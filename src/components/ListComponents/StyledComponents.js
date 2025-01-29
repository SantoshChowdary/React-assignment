import styled from "styled-components";

// ListItem components

export const ListItemMainContainer = styled.li`
    width: 90%;
    min-width: 150px;
    background-color: white;
    padding: ${(props) => (props.show ? "10px 10px 40px 10px" : "10px")};
    margin: 10px 15px;
    border: 1px solid grey;
    border-radius: 13px;
    position: relative;

    @media screen and (max-width: 768px) {
        margin: 10px;
    }

    @media screen and (max-width: 680px) {
        margin: 5px;
        min-width: 90px;
    }
`;

export const ListItemName = styled.p`
    font-weight: 700;
    margin: 10px;
`;

export const ListItemDesc = styled.p`
    margin: 10px;
`;

export const ListItemButton = styled.button`
    display: ${(props) => (props.show ? "block" : "none")};
    position: absolute;
    border: none;
    background: none;
    bottom: 10px;
    font-size: 20px;
    cursor: pointer;
    right: ${(props) => (props.pos === "left" ? "none" : "20px")};
    left: ${(props) => (props.pos === "left" ? "20px" : "none")};
`;

// ListContainer components

export const ListContainerMainContainer = styled.div`
    padding: 20px 10px;
    margin-bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 300px;
    height: 70vh;
    background-color:rgb(214, 233, 251);
    border-radius: 13px;
    scrollbar-width: thin;

    @media screen and (max-width: 1024px) {
        width: 200px;
        padding: 10px 5px;
    }

    @media screen and (max-width: 680px) {
        max-width: 180px;
        padding: 5px;
    }
`;

export const ListContainerHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin-left: 10px;

    input {
        margin-right: 10px;
        width: 20px;
        height: 20px;
    };

    p {
        font-weight: 700;
    }
`;

export const ListsUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    /* width: 100vw; */
    overflow-x: auto;

    @media screen and (max-width: 976px) {
        padding: 5px;
    }

    @media screen and (max-width: 680px) {
        padding: 2px;
        gap: 5px;
        margin: 0;
    }
`;

export const HeaderDiv = styled.div`
    min-height: 130px;
    margin: 20px;
    text-align: center;

    h1 {
        font-size: 25px;
        margin-bottom: 15px;
    };

    button {
        padding: 10px 20px;
        margin: 10px;
        background-color:rgb(15, 130, 238);
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    };

    p {
        color: red;
        font-size: 12px;
        font-weight: 600;
        margin: 10px;
    }
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);    
    }
`;

export const CancelButton = styled(Button)`
    background-color:rgb(251, 251, 251);
    border: 2px solid grey;
    color: black;
`;

export const UpdateButton = styled(Button)`
    background-color:rgb(15, 130, 238);
    border: none;
    color: white;
`;

export const EditingContainer = styled.div`
    padding: 20px;
`;

export const ItemsUL = styled.ul`
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    // gap: 15px;
    // padding: 10px;
    // width: 100vw;
    // overflow-x: auto;
`;

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;