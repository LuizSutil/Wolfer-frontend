import styled from 'styled-components'

export const Container = styled.div`
    display:flex;   
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 100%;

`

export const Form = styled.div `   
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color:  #01939A;
    color:white;

    text-align:center;
    
    `

export const Title = styled.div`

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
    width: 95%;
    height: 500px;
`

export const Head = styled.thead`
    display:flex;
    flex-direction:row;
    margin-top: 10px;

`

export const Table = styled.table`
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 100%;
    height: 100%;
    border-width:2px;
    border-style: solid;
    border-color:#106C6E;  
    border-radius:10px;
    overflow-y:auto;

    :first-child{

        margin-right: 10px;

    }

    :last-child{ 

        margin-left: 10px;

    }

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
        border-radius:10px;
        border-radius: 0 30px 30px 0;

    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background: #F4F4F4;
        border-radius: 0 30px 30px 0;



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
export const ValorFinal = styled.div`
   
    display:flex;
    justify-content: right;
    flex-direction: row;
    align-items:center;

    :first-child{
        margin-right:20px;
    }

`

export const Form2 = styled.form`

    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    width: 95%;
    height: 100%;
    margin-top: 20px;

`

export const Input = styled.input`

    width: 31%;
    height: 40px;
    margin-left: 5px;
    margin-right: 5px;
    border: 0;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    
`