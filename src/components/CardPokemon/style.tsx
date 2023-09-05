import styled from "styled-components"

export const CartaoPokemon = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    width: 250px;
    transition: 0.5s ease-in-out;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    border: 2px solid black;
    
    :hover{
        transition: 0.4s ease-in-out;
        transform: scale(1.1);
        z-index: 10;
    }

    .name{
        margin-bottom: 3px;
        margin-top: 0; 
    }

    .types{
        display: flex;
        gap: 5px;
        font-size: 13px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 6px;
        padding: 3px 15px;
        color: white;
    }

    .details{
        display: flex;
        align-items: start;
        flex-direction: column;
        max-width: 85%;
        border-radius: 5px;
        margin: 0 auto;
        margin-bottom: 20px;
        padding: 15px 8px;
        background-color: rgba(255, 255, 255, 0.787);
        color: black;
        z-index: 10;
        position: relative; 
    }

    .card-image{
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    img{
        max-width: 100%;
        z-index: 10;
    }
`