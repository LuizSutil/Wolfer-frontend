import styled from 'styled-components'

export const Div = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    
`

export const Container = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 209px);
    margin-top: 6%;
`

export const Navbar = styled.div`
    display:flex;
    flex-direction: column;
    width: 209px;
    height: 100vmax;
    background-color: #01939A;
    float: left;
`

export const NavItem = styled.div`
    display:flex;
    width: 100%;
    height:52px;
    padding-left: 4px;
    
    :first-child{
        border-top:1px solid rgb(70, 69, 69);
    }
    align-items: center;
    cursor: pointer;
    color: white;
    font-weight:bold;

    :hover {
        background-color: white;
        color: #01939A;
    }
     
`