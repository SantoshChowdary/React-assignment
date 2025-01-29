import React from "react";
import { ListItemMainContainer, ListItemName, ListItemDesc, ListItemButton } from "./StyledComponents";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


export const ListItem = (props) => {

    const {item, handleButtonClick, pos} = props;
    const {id, name, description} = item;
    const isLeftButtonVisible = (pos === "LEFT" || pos === "MID") ? true : false;
    const isRightButtonVisible = (pos === "RIGHT" || pos === "MID") ? true : false;
    
    // expecting props --> item details, isLeftButtonVisible, isRightButtonVisible, callBack function for buttons
    // Items should include --> Item name, Item description, left button, right button, buttons display status

    const handleRightClick = () => {
        handleButtonClick(id, pos, "RIGHT");
    };

    const handleLeftClick = () => {
        handleButtonClick(id, pos, "LEFT");
    };

    return (
        <ListItemMainContainer show={isLeftButtonVisible || isRightButtonVisible}>
            <ListItemName>
                {name ?? "Item name"}
            </ListItemName>
            <ListItemDesc>
                {description ?? "Item description"}
            </ListItemDesc>

            <ListItemButton pos="right" show={isLeftButtonVisible} onClick={handleRightClick}>
                <BsArrowRight />
            </ListItemButton>

            <ListItemButton pos="left" show={isRightButtonVisible} onClick={handleLeftClick}>
                <BsArrowLeft />
            </ListItemButton>
        </ListItemMainContainer>
    )
};

