import React, {useState, useContext} from 'react';
import ListContainer from './ListComponents/ListContainer';
import { ListsUl, ButtonsDiv, CancelButton, UpdateButton, EditingContainer } from './ListComponents/StyledComponents';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../context/context';


const EditingScreen = observer(({checkedItemsIds, handleEditMode, cancelOperation}) => {

    const {itemsStore} = useContext(StoreContext);

    // console.log(checkedItemsIds)
    const selectedItems = itemsStore.getEditableItems(checkedItemsIds);

    let leftId = checkedItemsIds[0];
    let rightId = checkedItemsIds[1];
    const middleListId = itemsStore.getLatestListId() + 1;
    
    const [middleListItems, setMiddleListItems] = useState({id: middleListId, listItems: []});
    const [leftList, setLeftList] = useState(selectedItems[0]);
    const [rightList, setRightList] = useState(selectedItems[1]);

    const updateChangesToMain = () => {
        itemsStore.updateItems(checkedItemsIds, leftList, middleListItems, rightList);
        handleEditMode([]);
    };

    const handleCancelButton = () => {
        cancelOperation();
    }

    const handleButtonClick = (id, pos, dir) => {

        if (pos === "LEFT"){
            const item = leftList.listItems.find(item => item.id === id);
            setLeftList((prev) => {
                const updatedList = prev.listItems.filter(item => item.id !== id);
                return {
                    ...prev,
                    listItems: updatedList
                }
            });
            item.listNumber = middleListId;
            middleListItems.listItems.push(item);
        } else if (pos === "MID"){  
            const item = middleListItems.listItems.find(item => item.id === id); 
            setMiddleListItems((prev) => {
                const updatedList = prev.listItems.filter(item => item.id !== id);
                return {
                    ...prev,
                    listItems: updatedList
                }
            });

            if (dir === "RIGHT"){
                item.listNumber = rightId;
                rightList.listItems.push(item);
            } else {
                item.listNumber = leftId;
                leftList.listItems.push(item);
            }
        } else if (pos === "RIGHT"){ 
            const item = rightList.listItems.find(item => item.id === id);     
            setRightList((prev) => {
                const updatedList = prev.listItems.filter(item => item.id !== id);
                return {
                    ...prev,
                    listItems: updatedList
                }
            });
            item.listNumber = middleListId;
            middleListItems.listItems.push(item);
        }
    }

    return (
        <EditingContainer>
            <ListsUl>
                <ListContainer items={leftList} isInEditMode={true} pos={"LEFT"} handleButtonClick={handleButtonClick} />
                <ListContainer items={middleListItems} isInEditMode={true} pos={"MID"} handleButtonClick={handleButtonClick} />
                <ListContainer items={rightList} isInEditMode={true} pos={"RIGHT"} handleButtonClick={handleButtonClick} />
            </ListsUl>
            <ButtonsDiv>
                <CancelButton onClick={handleCancelButton}>cancel</CancelButton>
                <UpdateButton onClick={updateChangesToMain}>Update</UpdateButton>
            </ButtonsDiv>
            
        </EditingContainer>
    )
});

export default EditingScreen;