import styled, {keyframes} from "styled-components";

export const Loader = () => {
    return (
        <Container>
            <Spinner />
        </Container>
    )
};

// styled-components

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid grey;
    border-radius: 50%;
    border-bottom-color: transparent;
    animation: ${RotateAnimation} 1s infinite;
`;


