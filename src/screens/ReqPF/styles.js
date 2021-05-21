import styled from 'styled-components'


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
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: 30px;
    color:white;
    align-items:center;
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
    width:100%;
    height:100%;
`

export const Head = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width:72%;
    height:100%;
`

export const Table = styled.div`
    display:flex;
    flex-direction:column;
    width:350px;
    height: 500px;
    border-width:2px;
    border-style: solid;
    border-color:#106C6E;  
    border-radius:10px;
    overflow-y:scroll;
    border-right:0px none white;
    align-items:center;

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

    ::first-child{
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
    flex-direction:row;
    width:500px;
    justify-content:center;
    align-items:center;
    margin-top:470px;
    justify-self:flex-end;
    padding-left:60%;

    :first-child{
        margin-right:20px;
    }

    
`