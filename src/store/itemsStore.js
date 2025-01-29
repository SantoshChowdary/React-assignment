import { makeAutoObservable, toJS } from "mobx";
import { fetchItemsService } from "../service/fetchService";

class ListItemsStore {

    // Store Data
    itemDetails = [];
    APIError = false;
    APIErrorDetails;
    isLoaded = false;

    constructor(){
        makeAutoObservable(this);
        this.fetchItemDetails()
    }

    // API Part
    groupData = (items) => {
        if (items.length === 0){
            return [];
        }

        const groupedData = items.reduce((obj, item) => {
            obj[item.listNumber] = obj[item.listNumber] || [];
            obj[item.listNumber].push(item);
            return obj;
        }, {});

        let finalGroupedData = Object.keys(groupedData).map((key) => {
            return {
                id: parseInt(key),
                listItems: groupedData[key]
            }
        });

        return finalGroupedData;
    }

    fetchItemDetails = async () => {
        const {data, error, errorData} = await fetchItemsService();

        if (error) {
            this.APIError = true;
            this.APIErrorDetails = errorData;
        } else {
            data.lists = data.lists && data.lists.map(item => ({
                listNumber : item.list_number,
                id : item.id,
                name : item.name,
                description : item.description
                
            }))
            this.itemDetails = toJS(this.groupData(data.lists));
        }
        
        this.isLoaded = true;
    };

    getStoreItems = async () => {

        if (!this.isLoaded) {
            await this.fetchItemDetails();
        }
        
        return {
            loading : true,
            itemDetails : toJS(this.itemDetails),
            error : this.APIError,
            errorMsg : this.APIErrorDetails
        }
    };

    // API Part

    // Editing Part
    getEditableItems = (idsArray) => {
        const editableItems = this.itemDetails.filter(item => idsArray.includes(item.id)).map(item => toJS(item));
        return editableItems;
    }

    updateItems = (checkedItemsIds, leftList, middleList, rightList) => {
       this.itemDetails = this.itemDetails.filter(item => !checkedItemsIds.includes(item.id));
       if (leftList.listItems.length > 0) this.itemDetails.push(leftList);
       if (middleList.listItems.length > 0) this.itemDetails.push(middleList);
       if (rightList.listItems.length > 0) this.itemDetails.push(rightList);

       this.itemDetails = this.itemDetails.sort((a, b) => a.id - b.id);
    };

    getLatestListId = () => {
        return this.itemDetails[this.itemDetails.length - 1].id;
    }

};

const itemsStore = new ListItemsStore();

export default itemsStore;