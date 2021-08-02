import styled from 'styled-components'

export const Container = styled.div`
    display:flex;   
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 100%;

`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width:100%;
    height: 30px;
`

export const Form = styled.div `
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color:  #01939A;
    text-align:center;
    overflow-y: scroll;
    overflow-x: scroll;
    width: 100%;

    padding-bottom: 25px;


    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
`

export const Tabela = styled.table`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`

export const Head = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    color:white;
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

export const Dado = styled.div`
    display: flex;
    align-items: center;
    min-width: 130px;
    border-style: solid;
    border-color:#106C6E;
    border-width: 1px;
    color:white;
    
    text-indent: 3px;
    
    :first-child{
        border-radius: 5px 0 0 0;
    }

    :last-child{
        border-radius: 0 5px 0 0;
    }
    
`

export const MP = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 600px;
`

export const Data = styled.div`
    display: flex;
    align-items: center;
    min-width: 130px;
    border-style: solid;
    border-width: 1px;
    border-top: 0;
    border-color:#106C6E;
    color:white;
    height: 30px;

    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    text-indent: 3px;
    
    text-transform: capitalize;

    
    :first-child{
        border-left: 0;
    }
    :last-child{
        border-right: 0;
    }
`
