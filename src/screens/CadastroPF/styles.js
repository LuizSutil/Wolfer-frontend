import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    height: 100%;
    width: 95%;

`


export const Form = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    background-color:  #01939A;
    text-align:center;

    h1{
        margin-bottom:0px;
        font-size:80px;
    }

    h2 {
        margin-top:0px;

    }
`


export const Label = styled.label`
    font-weight:bold;


`

export const Input = styled.input`
    //border-radius: 5px;
    height: 30px;
    width: 300px;
    margin-bottom: 40px;
    outline: none;
    border-radius: 5px;
    border: 0 solid;
`

export const Button = styled.button`
    border-radius: 5px;
    height: 30px;
    width: 150px;
    font-size: 1em;
    margin-bottom: 70px;
    background-color:white;
    border-style: solid;
    color: rgb(0, 51, 255);

`

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:30px;
    
`

export const Row = styled.div`
    display:flex;
    flex: 1;
    flex-direction:row;
`
