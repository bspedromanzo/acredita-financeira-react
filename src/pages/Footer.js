import React from 'react';
import '../css/footer'
import $ from 'jquery';
import arrow from '../assets/Arrow-up-line.svg'
import logoRenova from '../assets/Logotipo-Renove.svg'
import { ContainerFooter, ContainerInfo, Logotipo, Menu, ItemMenu, Infos, InfoEnd, InfoCreate, BtnUp, SpanUp, IconUp, Renova, LogoRenova } from '../css/footer';
import { HashLink as Link } from 'react-router-hash-link';
import { Col } from 'react-bootstrap'

const Footer = () => {
    $("#backToTop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return (
        <ContainerFooter fluid>
            <ContainerInfo >
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Logotipo />
                </Col>
                <Menu>
                    <Link to="/#navbar" style={{ textDecoration: "none", color: "black" }}><ItemMenu>Inicio</ItemMenu></Link>
                    <Link to="/#solucao" style={{ textDecoration: "none" }}><ItemMenu>Solução</ItemMenu></Link>
                    <Link to="/#vantagens" style={{ textDecoration: "none" }}><ItemMenu>Vantagens</ItemMenu></Link>
                    <Link to="/#oQuePrecisa" style={{ textDecoration: "none" }}><ItemMenu>O que precisa?</ItemMenu></Link>
                    <Link to="/#passoAPasso" style={{ textDecoration: "none" }}><ItemMenu>Passo a passo</ItemMenu></Link>
                    <Link to="/#duvidas" style={{ textDecoration: "none" }}><ItemMenu>Dúvidas</ItemMenu></Link>
                    <Link to="/#form" style={{ textDecoration: "none" }}><ItemMenu>Contato</ItemMenu></Link>
                    <BtnUp id="backToTop" href="#navbar">
                        <IconUp src={arrow} />
                        <SpanUp>Voltar ao topo</SpanUp>
                    </BtnUp>
                </Menu>
                <Infos>
                    <InfoEnd>
                        Acreditar Promoções de Vendas LTDA - ME, instituição financeira, inscrita sob o CNPJ n° 15.533.354/0001-79, com sede na Praça Rui Barbosa, n°23, 1° Andar, Centro, Santos - SP
                    </InfoEnd>
                    <InfoCreate>
                        © 2021 Acreditar Crédito e Negócio. Todos os Direitos Reservados.
                    </InfoCreate>
                </Infos>
            </ContainerInfo>
            <Renova>
                <LogoRenova src={logoRenova} />
            </Renova>
        </ContainerFooter>
    )
}

export default Footer;