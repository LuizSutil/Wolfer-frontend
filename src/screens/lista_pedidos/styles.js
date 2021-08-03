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
    width: 100%;
    background-color:  #01939A;
    color:white;

    text-align:center;

    padding-top: 20px;
    padding-bottom: 20px;
    
`
export const Pedidos = styled.form`

    display: flex;
    width: 90%;

    border-width:2px;
    border-style: solid;
    border-color:#106C6E;  
    border-radius:10px;
    margin-top: 15px;
    
`

export const Form = styled.form`

    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    

`
export const Dados = styled.div`

    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;

`

export const Data = styled.div`

    display: flex;
    flex-direction: column;
    width: 70%;
    height: 300px;

`

export const TableHeading = styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    width:100%;
    justify-content:center;
`

export const Label = styled.div`
    display:flex;
    width:50%;
    justify-content:center;
    align-items:center;
    margin-top:10px;
    height:40px;
    vertical-align:center;
    background-color:#106C6E;
    

    :first-child{
        width:20%;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;

    }

    :last-child{
        width:25%;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        

    }

`

export const Descricao = styled.div`

    display: flex;
    width: 150px;
    border-width:2px;
    border-style: solid;
    border-color:#106C6E;  
    border-radius:10px;
    margin-top: 15px;

`

export const TableName = styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    justify-content:center;
    width:100%;

    :first-child{
        &:hover {
        background-color:none;
    }
    
    }
    &:hover {
        background-color:white;
        color: #106C6E;
    }
   
`

export const Items = styled.div`
    display:flex;
    width:50%;
    justify-content:center;
    align-items:center;
    border: 1px solid white;
    border-right:none;
    border-left:none;
    border-top: none;
    height:40px;
    vertical-align:center;
    cursor:pointer;

    

    :first-child{
        width:20%;
        border-right:1px solid white;
    }

    :last-child{
        width:25%;
        border-left:1px solid white;

    }

`

export const TitleProduct = styled.div`

    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`
