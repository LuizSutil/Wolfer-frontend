import styled from 'styled-components'

export const Container = styled.div`
    display:flex;   
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 95%;

`

export const Form = styled.div `   
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    background-color:  #01939A;
    color:white;

    text-align:center;
    
    `

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color:white;
    align-items:center;

    padding-top: 15px;
    padding-bottom: 15px;
    
    h1{
        font-size:48px;
        margin-top:0px;
        margin-bottom:0px;
    }
    
    h2{
        font-size:26px;
        margin-top:-10px;
        margin-bottom:0px;
    }
`

export const Body = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    width: 95%;
    height: 100%;
`

export const Head = styled.thead`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin-top: 10px;

`

export const Table = styled.table`
    display:flex;
    flex-direction:column;
    width: 100%;
    height: 550px;
    border-width:2px;
    border-style: solid;
    border-color:#106C6E;  
    border-radius:10px;
    overflow-y:auto;
    align-items:center;

    :first-child{

        margin-right: 5px;
    }

    :last-child{ 

        margin-left: 5px;

    }
    
    margin-bottom: 10px;
    
    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
        border-radius:10px;

    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background: #F4F4F4;
        border-radius: 0 10px 10px 0;



    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

    h4{
        margin-bottom:0px;
    }

    ValorFinal{
        justify-content:flex-end;
    }
`

export const TableName = styled.div`
    display:flex;
    flex-direction:row;
    text-align:center;
    width:100%;
    justify-content:center;

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

export const Button = styled.button`
    margin-left:60px;
`
export const DivButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:500px;

    :first-child{
        margin-right:20px;
    }

    
`