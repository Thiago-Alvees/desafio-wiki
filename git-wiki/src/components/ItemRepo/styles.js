import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a{
        margin-right: 10px;
    
    }

    a.ver{

        background-color: #FFFFFF;   
        color: #22272e;              
        padding: 10px 20px;          
        text-decoration: none;       
        border-radius: 5px;          
        display: inline-block;       
        cursor: pointer;             

    
    }

    a.remover {
        background-color: #FF0000;   
        color: #FFFFFF;              
        padding: 10px 20px;          
        text-decoration: none;       
        border-radius: 5px;          
        display: inline-block;       
        cursor: pointer;             
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`