import { useState } from 'react';
import {observer} from 'mobx-react-lite';
import { ListsUl, HeaderDiv } from './ListComponents/StyledComponents';
import ListContainer from './ListComponents/ListContainer';

const MainScreen = observer(({items, handleEditMode}) => {
    
    const [checkBoxIds, updateCheckBoxIds] = useState([]);
    const [showCheckBoxMsg, toggleVisibility] = useState(false);
    

    // update the checkboxes status
    const handleCheckBox = (id, isChecked) => {
        toggleVisibility(false);
        let tempCheckBoxDetails = checkBoxIds;
        if (isChecked) {
            tempCheckBoxDetails.push(id);
        } else {
            tempCheckBoxDetails = tempCheckBoxDetails.filter((item) => item !== id);
        }
        updateCheckBoxIds(tempCheckBoxDetails);
    };

    const createNewList = () => {
        if (checkBoxIds.length === 2) {
            handleEditMode(checkBoxIds);
        } else {
            toggleVisibility(true);
        }
    }

    return (
        <div>
            <HeaderDiv>
                <h1>List Creation</h1>
                <button onClick={createNewList}>Create a new list</button>
                {showCheckBoxMsg && <p>*You should select exactly 2 lists to create a new list</p>}
            </HeaderDiv>
            <ListsUl>
                {
                    items && items.map((items) => (
                        <ListContainer key={items.id} items={items} handleCheckBox={handleCheckBox} isInEditMode={false} />
                    ))
                }
            </ListsUl>
        </div>
    )
});

export default MainScreen;