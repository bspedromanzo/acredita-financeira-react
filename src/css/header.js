import styled from "styled-components"
import logo from '../assets/Logotipo.png'
import {  Nav, Navbar } from "react-bootstrap"

export const Header = styled(Navbar) `
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin: 10px 50px;
`

export const Menu = styled(Navbar.Collapse) `
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
justify-content: flex-end;
position: static;
height: 100%;
margin: 0px 32px;

@media only screen and (max-width: 976px) {
  justify-content: center;
}
`

export const Logotipo = styled.div `
width: 121px;
height: 56px;
left: 108px;
top: 12px;

background: url(${logo});
`

export const BtnMenu = styled(Nav)`
position: static;

font-size: 16px;
line-height: 20px;
letter-spacing: 0.02em;
color: #212529;

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
cursor: pointer;
text-decoration: none;
`

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px
`

export const Social = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 61.99px;
left: 679px;
top: 0.6px;

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 32px;
`

export const SocialIcons = styled.a`
position: static;
width: 19px;
height: 18.8px;
flex: none;
order: 0;
flex-grow: 0;
margin: 10px 10px;
`