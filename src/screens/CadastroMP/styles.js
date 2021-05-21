import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    margin:auto;
    border-radius: 15px;

`


export const Form = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 660px;
    width: 1251px;
    box-shadow: 0 0 1em black;
    background-color:  #01939A;
    border-radius: 15px;

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
`

export const Button = styled.button`
    border-radius: 5px;
    height: 45px;
    width: 150px;
    margin-bottom: 70px;
    background-color:white;
    border-color: rgb(54, 155, 227);
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
    flex-direction:row;
`