import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    position: absolute;
    top:0;
    left:209px;
    flex-direction: row;
    height: 100%;
    width: calc(100% - 209px);
    background-color:white;

`
export const Navbar = styled.div`
    position: fixed;
    top:0;
    left: 0;
    display:flex;
    flex-direction: column;
    width: 209px;
    height: 100%;
    background-color: #01939A;
`

export const NavItem = styled.div`
    display:flex;
    width:100%;
    height:52px;
    border-top:1px solidrgb(70, 69, 69);
    border-bottom:1px solid rgb(70, 69, 69);

    :first-child{
        border-top:1px solid rgb(70, 69, 69);
    }
    align-items: center;
    cursor: pointer;
    color:rgb(10, 125, 163);
    font-weight:bold;

`