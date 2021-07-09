import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    margin:auto;
    border-radius: 15px;

`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height: 30px;
`
export const Form = styled.div `   
    display:flex;
    flex-direction: column;
    align-items:center;
    height: 660px;
    width: 1251px;
    box-shadow: 0 0 1em black;
    background-color:  #01939A;
    border-radius: 15px;
    margin-left: 50px;
    margin-top:25px;
    text-align:center;
    overflow-y: scroll;
`

export const Tabela = styled.div`
    display:flex;
    flex-direction: column;
    background-color:none;
`

export const Head = styled.div`

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
`

export const MP = styled.div`
    display: flex;
    flex-direction: row;
`

export const Data = styled.div`
    display: flex;
    align-items: center;
    min-width: 130px;
    border-style: solid;
    border-width: 1px;
    border-color:#106C6E;
    color:white;

    :first-child{
        border-left: 0;
    }
    :last-child{
        border-right: 0;
    }
`