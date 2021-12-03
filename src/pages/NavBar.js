import React from 'react';
import { Header, Menu, Logotipo, BtnMenu, SocialIcons } from '../css/header'
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Header id="navbar" expand="lg">
      <Container >
        <Navbar.Brand>
          <Logotipo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Menu id="navbar-nav">
          <Nav className="me-auto">
            <BtnMenu.Link>
              <Link to="/#solucao" style={{ textDecoration: "none", color: "black" }}>Solução</Link>
            </BtnMenu.Link>
            <BtnMenu.Link>
              <Link to="/#vantagens" style={{ textDecoration: "none", color: "black" }}>Vantagens</Link>
            </BtnMenu.Link>
            <BtnMenu.Link>
              <Link to="/#oQuePrecisa" style={{ textDecoration: "none", color: "black" }}>O que precisa?</Link>
            </BtnMenu.Link>
            <BtnMenu.Link>
              <Link to="/#passoAPasso" style={{ textDecoration: "none", color: "black" }}>Passo a passo</Link>
            </BtnMenu.Link>
            <BtnMenu.Link>
              <Link to="/#duvidas" style={{ textDecoration: "none", color: "black" }}>Dúvidas</Link>
            </BtnMenu.Link>
            <BtnMenu.Link>
              <Link to="/#form" style={{ textDecoration: "none", color: "black" }}>Contato</Link>
            </BtnMenu.Link>
            <SocialIcons href="http://www.instagram.com" target="_blank">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2432 0.600098H13.7566C16.6479 0.600098 19.0001 2.92755 19 5.78822V14.212C19 17.0726 16.6479 19.4001 13.7566 19.4001H5.2432C2.3521 19.4001 0 17.0728 0 14.212V5.78822C0 2.92755 2.3521 0.600098 5.2432 0.600098ZM13.7567 17.7321C15.7184 17.7321 17.3143 16.153 17.3143 14.212H17.3142V5.78822C17.3142 3.8473 15.7183 2.26812 13.7566 2.26812H5.2432C3.28164 2.26812 1.68577 3.8473 1.68577 5.78822V14.212C1.68577 16.153 3.28164 17.7322 5.2432 17.7321H13.7567ZM4.75 10.0002C4.75 7.40853 6.88081 5.3001 9.5 5.3001C12.1192 5.3001 14.25 7.40853 14.25 10.0002C14.25 12.5918 12.1192 14.7001 9.5 14.7001C6.88081 14.7001 4.75 12.5918 4.75 10.0002ZM6.38556 10.0001C6.38556 11.6993 7.78277 13.0816 9.5 13.0816C11.2172 13.0816 12.6144 11.6993 12.6144 10.0001C12.6144 8.3008 11.2173 6.91837 9.5 6.91837C7.78266 6.91837 6.38556 8.3008 6.38556 10.0001ZM13.807 4.07739C14.0274 3.85841 14.3338 3.73343 14.6458 3.73343C14.9589 3.73343 15.2655 3.85841 15.4857 4.07739C15.707 4.29529 15.8333 4.59866 15.8333 4.90843C15.8333 5.21714 15.707 5.5205 15.4857 5.73948C15.2644 5.95739 14.9589 6.08343 14.6458 6.08343C14.3338 6.08343 14.0273 5.95739 13.807 5.73948C13.5857 5.5205 13.4583 5.21724 13.4583 4.90843C13.4583 4.59866 13.5856 4.29529 13.807 4.07739Z" fill="#212529" />
              </svg>
            </SocialIcons>
            <SocialIcons href="http://www.fb.com" target="_blank">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.431 0.60498H2.55896C1.14571 0.60498 0 1.73859 0 3.137V16.8631C0 18.2615 1.14567 19.3951 2.55896 19.3951H9.40059L9.41225 12.6806H7.64924C7.42013 12.6806 7.23417 12.4972 7.23329 12.2705L7.22483 10.1062C7.22395 9.87821 7.41046 9.69296 7.64083 9.69296H9.40063V7.60161C9.40063 5.17462 10.8987 3.85311 13.0867 3.85311H14.8822C15.1119 3.85311 15.2982 4.03738 15.2982 4.26473V6.08975C15.2982 6.31701 15.1121 6.50124 14.8824 6.50138L13.7806 6.50188C12.5906 6.50188 12.3602 7.06138 12.3602 7.88246V9.69301H14.9749C15.2241 9.69301 15.4174 9.90827 15.388 10.1531L15.1287 12.3175C15.1039 12.5246 14.9264 12.6806 14.7157 12.6806H12.3719L12.3602 19.3952H16.4311C17.8443 19.3952 18.99 18.2616 18.99 16.8633V3.137C18.99 1.73859 17.8443 0.60498 16.431 0.60498Z" fill="#212529" />
              </svg>
            </SocialIcons>
          </Nav>
        </Menu>
      </Container>
    </Header>
  );
}

export default NavBar;