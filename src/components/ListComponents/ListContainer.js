import React from "react";
import { ListContainerHeaderDiv, ListContainerMainContainer, ItemsUL } from "./StyledComponents";
import { ListItem } from './ListItem';


const ListContainer = ({items, isInEditMode, handleCheckBox = () => {}, pos="", handleButtonClick = ()=>{} }) => {

    // Expecting props --> List details like count, isInEditMode, ListPositionInEditMode(LEFT, MIDDLE, RIGHT)
    // Items should include --> Checkbox, List name, Items count in the (), List Items

    // console.log(items)

    const renderItemName = () => {
        if (isInEditMode){
            return <p>List {items.id} ({items.listItems.length ?? 0})</p>
        } else {
            return <p>List {items.id}</p>
        }
    };

    const updateCheckBoxStatus = (e) => {
        // console.log(e.target.checked)
        handleCheckBox(items.id, e.target.checked)
    }
 
    return (
        <ListContainerMainContainer>
            <ListContainerHeaderDiv>
                {!isInEditMode && <input type="checkbox" onChange={(e) => updateCheckBoxStatus(e)} />}
                {renderItemName()}
            </ListContainerHeaderDiv>
            {
                <ItemsUL>
                    {items.listItems.length !== 0 && items.listItems.map((item) => (
                          <ListItem key={item.id} item={item} pos={pos} handleButtonClick={handleButtonClick} />
                    ))}
                </ItemsUL>
            }
            
        </ListContainerMainContainer>
    )
};

export default ListContainer;