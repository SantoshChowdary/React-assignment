import {useState, useEffect, useContext} from 'react';
import MainScreen from './MainScreen';
import EditingScreen from './EditingScreen';
import {observer} from 'mobx-react-lite';
import { StoreContext } from '../context/context';
import {Loader} from './Loader/Loader';
import ErrorComponent from './ErrorComponent';

const RootApp = observer(() => {

    const [items, setItems] = useState([]);
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [checkedItemsIds, setCheckedItemsIds] = useState([]);

    const {itemsStore} = useContext(StoreContext);
    

    const cancelOperation = () => {
        setIsInEditMode(!isInEditMode);
    }


    const handleEditMode = (list=[]) => {
        setIsInEditMode(!isInEditMode);
        setCheckedItemsIds(list);
    };

    // Getting the list
    const fetchItems = async () => {
        const itemsDataFromStore = await itemsStore.getStoreItems();
        setItems(itemsDataFromStore);
    };

    useEffect(()=>{
        fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInEditMode]);

    const renderLoader = () => {
        return (
            <Loader />
        )
    };

    const renderComponents = () => {
        return (
            <div>
                {
                    isInEditMode ? 
                        <EditingScreen checkedItemsIds={checkedItemsIds} handleEditMode={handleEditMode} cancelOperation={cancelOperation} /> 
                        : 
                        <MainScreen items={items.itemDetails} handleEditMode={handleEditMode} />
                }
            </div>
        )
    };


    return (
        <>
            {
                itemsStore.APIError ? <ErrorComponent /> : (itemsStore.isLoaded ? renderComponents() : renderLoader())
            }
        </>
    )


});

export default RootApp;