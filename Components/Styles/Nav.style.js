import styled from "styled-components";

export const StyledNav = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(50, 0, 10);
    width: 100%;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style-type: none;
    }

    ul li {
        width: 5rem;
        margin: 0 1rem;
    }

    ul li a {
        color: rgb(240, 240, 240);
        text-decoration: none;
        font-size: 1.15rem;
        transition: color 0.25s ease-in;
    }

    button {
        background-color: rgb(50, 0, 10);
        color: rgb(240, 240, 240);
        border: none;
        font-size: 1rem;
        border-radius: 15px;
        transition: color 0.25s ease-in;
    }

    button:hover {
        cursor: pointer;
        color: rgb(90, 180, 200);
    }

    ul li a:hover {
        cursor: pointer;
        color: rgb(90, 180, 200);
    }
`