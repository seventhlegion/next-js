import styled from "styled-components";

export const StyledMainBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    * {
        box-sizing: border-box;
    }

    div {
        margin: 1rem 0.5rem;
        padding: 0.5rem 1rem;
        width: 47%;
        flex-grow: 1;
        flex-shrink: 1;
        align-self: center;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
        background-color: rgb(240, 240, 240);
    }
`