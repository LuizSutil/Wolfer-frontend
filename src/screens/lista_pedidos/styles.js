import styled from 'styled-components'

export const Container = styled.div`
    display:flex;   
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 100%;

`
export const Body = styled.div `   
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    background-color:  #01939A;
    color:white;

    text-align:center;

    padding-top: 20px;
    padding-bottom: 20px;
`
export const Pedidos = styled.div`


    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    
`

export const Dados = styled.div`

    display: flex;
    flex-direction: column;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;

    border-width:2px;
    border-style: solid;
    border-color:#106C6E;  
    border-radius:10px;

`