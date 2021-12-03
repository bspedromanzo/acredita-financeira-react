import styled from "styled-components";
import logo from '../assets/Logotipo.png'
import { Container, Row, Col } from 'react-bootstrap'

export const ContainerFooter = styled(Container)`
background: #FFFFFF;

@media only screen and (max-width: 709px) {
    height: 540px;
  }

  @media only screen and (max-width: 709px) {
    height: 630px;
  }
  @media only screen and (max-width: 295px) {
    height: 730px;
  }
`

export const ContainerInfo = styled(Row)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 0px;
height: 100%;
margin: 25px;
flex-wrap: nowrap !important

@media only screen and (max-width: 709px) {
    height: 500px !important;
  }
`

export const Logotipo = styled.div`
position: static;
width: 121px;
height: 56px;
margin-bottom: 15px;
background: url(${logo});
`

export const Menu = styled(Col)`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
margin-top: 15px;
position: static;
width: 880px;
height: 20px;

@media only screen and (max-width: 709px) {
    flex-direction: column;
  }
`

export const ItemMenu = styled.a`

font-size: 16px;
line-height: 20px;
letter-spacing: 0.02em;
color: #212529 !important;
margin: 0px 10px;
cursor: pointer;
text-decoration: none !important;
`

export const Infos = styled(Col)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px;
margin: 10px 0px;
`

export const InfoEnd = styled.div`
font-size: 16px;
line-height: 26px;
text-align: center;
color: #868E96;
margin: 8px 0px;
display: flex;
align-items: center;
justify-content: center;
`

export const InfoCreate = styled.div`
position: static;
font-size: 16px;
line-height: 26px;
text-align: center;
color: #868E96;
margin: 8px 0px;
`

export const BtnUp = styled.a`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

flex: none;
order: 1;
flex-grow: 0;
cursor: pointer;
text-decoration: none;
`

export const SpanUp = styled.span`
position: static;
width: 112px;
height: 26px;

font-size: 16px;
line-height: 26px;
text-align: center;
color: #868E96;

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
`

export const IconUp = styled.img`
position: static;
width: 24px;
height: 24px;

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 8px;
`

export const Renova = styled(Row)`
background: #F8F9FA;
display: flex;
justify-content: center;
align-items: center;
`

export const LogoRenova = styled.img`
`