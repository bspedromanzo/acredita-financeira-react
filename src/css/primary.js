import styled from "styled-components";
import img from '../assets/Frame3.png';
import bgGradient from '../assets/BG-gradient.png'
import {Row, Col} from 'react-bootstrap';
import imgFrase2 from '../assets/Image-Frase2.png'
import imgDiv5 from '../assets/Img-Div5.png'
import arrowP from '../assets/ArrowPasso.svg'
import cashPasso from '../assets/cashPasso.svg'
import plus from '../assets/plus.svg'
import menos from '../assets/menos.svg'

export const Banner = styled(Row)`
background: linear-gradient(33.03deg, #039E90 15.62%, #00CDBA 96.52%);
height: 688px;
padding: 10px;

@media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1300px;
    width: 100% !important;
    margin: 0 !important;
  }
`

export const BannerContainer = styled(Col)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;
width: 595px;
height: 100%;
margin-top: 35px;
margin-left: 20px;

@media only screen and (max-width: 940px) {
    flex-direction: column !important;
    align-items: center;
    justify-content: flex-start;
  }
`

export const Resgate = styled.div`
position: static;
height: 280px;
font-weight: bold;
font-size: 72px;
line-height: 92px;
color: #FFFFFF;
`

export const SpanGreen = styled.span`
color: #E6EA2F
`

export const ImgBanner = styled.div`
width: 625px;
height: 640px;
background: url(${img})
`

export const InfoBanner = styled.div`
position: static;
height: 114px;

font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 38px;

color: #F8F9FA;
`

export const SpanUper = styled.span`
text-transform: uppercase;
font-weight: bold;
`

export const DivGreyL = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 0px;
width: 430px;

position: static;

background: #E6EA2F;
border-radius: 4px;

margin: 64px 0px;
`

export const BtnGreyL = styled.a`
position: static;
font-weight: bold;
font-size: 20px;
line-height: 26px;

text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

color: #00726B !important;

flex: none;
order: 0;
flex-grow: 0;
text-decoration: none !important;
cursor: pointer;
`

export const ArrowRight = styled.img`
position: static;
margin: 0px 8px;
`
export const ContainerBurocracia = styled(Row)`
position: static;
height: 1055px;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: nowrap !important;

@media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1700px;
    width: 98% !important;
    margin: 0 !important;
  }
`

export const FrasePrincipal = styled(Col)`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;

@media only screen and (max-width: 940px) {
    flex-grow: inherit !important;
  }
`

export const Frase1 = styled.div`
width: 100%;
height: 180px;

font-weight: bold;
font-size: 48px;
line-height: 60px;
text-align: center;

color: #212529;

@media only screen and (max-width: 940px) {
    height: 250px;
  };

  @media only screen and (max-width: 534px) {
    height: 290px;
  };

  @media only screen and (max-width: 499px) {
    height: 350px;
  };

  @media only screen and (max-width: 420px) {
    height: 390px;
  };
`

export const Frase1Subtitle = styled.span`
position: static;
height: 56px;

font-size: 18px;
line-height: 28px;
text-align: center;

color: #495057;

flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;
`

export const SpanSelect = styled.span`
    background: #E6EA2F
`

export const Frase2 = styled(Col)`
height: 644px;
display: flex;
flex-direction: row;

@media only screen and (max-width: 940px) {
    flex-direction: column !important;
    align-items: center;
    justify-content: flex-start;
  }
`

export const DivFrase2 = styled.div`
display: flex;
flex-direction: column;

@media only screen and (max-width: 940px) {
    justify-content: center;
    align-items: center;
  }
`

export const ImgFrase2 = styled.div`
width: 732px;
height: 710px;

@media only screen and (max-width: 940px) {
  width: 700px;
  height: 700px;
}
`
export const ImgFrase5 = styled.div`
width: 610px;
height: 650px;
background: url(${imgDiv5})
`
export const DivFrase2Esq = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 50px;
`

export const EsqTextPrincipal = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 481px;
height: auto;

flex: none;
order: 0;
flex-grow: 0;
margin: 48px 0px;
`

export const TitleBold = styled.span`
width: 481px;

font-weight: bold;
font-size: 32px;
line-height: 44px;

color: #212529;

flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;
`

export const SubTitleNormal = styled.span`
width: 481px;

font-size: 18px;
line-height: 28px;

color: #495057;

flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;
`

export const OptionsFrase2 = styled.div`
display: flex;
flex-direction: row;
padding: 0px;
justify-content: center;
align-items: center;
position: static;
width: 414px;
margin: 10px 0;
`

export const CheckIcon = styled.img`
width: 20px;
height: 20px;
`

export const TextOptions = styled.span`
position: static;
width: 366px;

font-size: 18px;
line-height: 28px;

color: #495057;

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 24px;
`

export const DivBtnGreyB = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19px 40px;

position: static;

background: #039E90;
border-radius: 4px;

flex: none;
order: 2;
flex-grow: 0;
margin: 48px 0px;
`

export const BtnGreyB = styled.a`
position: static;

font-weight: bold;
font-size: 20px;
line-height: 26px;

text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

color: #FFFFFF !important;

margin: 0px 8px;
cursor: pointer;
text-decoration: none !important;
`

export const Col3R2 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
position: static;
width: 100%;
height: 540px;
`

export const DivInfo = styled(Col)`
display: flex;
flex-direction: column;
align-items: center;

position: static;
width: 245px;
height: 190px;
margin: 20px 32px;
padding: 0;

`

export const IcoGradient = styled.div`
width: 72px;
height: 72px;
display: flex;
justify-content: center;
align-items: center;

background: linear-gradient(40.89deg, #00CDBA 1.18%, rgba(3, 158, 144, 0.1) 102.92%);
border-radius: 8px;
`

export const ElipseGradient = styled.div`
width: 48px;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position: absolute;
background: linear-gradient(206.57deg, #FFFFFF 16.67%, rgba(255, 255, 255, 0) 100%);
opacity: 0.3;
`

export const IcoElipse = styled.img`
`

export const SpanGreyBold = styled.span`
font-weight: bold;
font-size: 20px;
line-height: 26px;
text-align: center;
color: #00CDBA;
margin: 10px 0px;
`

export const SpanObsSlim = styled.span`
font-size: 10px;
line-height: 16px;
text-align: center;
color: #495057;
`

export const Absolute = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`

export const BgGradient = styled.div`
height: 860px;

background: url(${bgGradient}), linear-gradient(33.03deg, #039E90 15.62%, #00CDBA 96.52%);
background-blend-mode: multiply, normal;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media only screen and (max-width: 940px) {
    flex-direction: column;
    height: 1300px;
    width: 100% !important;
    margin: 0 !important;
  }
`

export const TitleL48 = styled.span`
width: 600px;
height: 180px;

font-weight: bold;
font-size: 48px;
line-height: 60px;

color: #FFFFFF;

margin: 48px 0px;
`

export const DivDir = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 580px;
height: 696px;

background: #FFFFFF;
border-radius: 16px;
`

export const BgTitleB = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: static;
width: 580px;
height: 168px;

background: #212529;
border-radius: 16px 16px 0px 0px;

margin: 0px 0px;
`

export const TitleY32 = styled.span`
position: static;
width: 484px;
height: 88px;

font-weight: bold;
font-size: 32px;
line-height: 44px;

text-align: center;

color: #E6EA2F;

margin: 0px 10px;
`

export const DivDirMid = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 0px;

position: static;
width: 465px;
height: 424px;

margin: 0px 0px;
`

export const DivDirFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: static;
width: 580px;
height: 104px;

background: #E9ECEF;
border-radius: 0px 0px 16px 16px;

margin: 0px 0px;
`

export const SpanBold18 = styled.span`
position: static;
width: 484px;
height: 56px;

font-weight: 600;
font-size: 18px;
line-height: 28px;
text-align: center;

color: #212529;

margin: 0px 10px;
`

export const DivWRow = styled.div`
height: 750px;
margin: 0px 0px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media only screen and (max-width: 940px) {
    flex-direction: column;
    height: 1300px;
    width: 100% !important;
    margin: 0 !important;
  }
`

export const DivPasso = styled(Col)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 0px;

width: 100%;
height: 176px;

margin: 64px 0px;
@media only screen and (max-width: 940px) {
    flex-direction: column;
  }
`

export const ItemPasso = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px;

width: 220px;
height: 205px;
`

export const ArrowPasso = styled.div`
position: static;
width: 10px;
height: 16px;
opacity: 0.7;
margin: 20px 40px;
background: url(${arrowP})
`

export const DivNumber = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;

background: linear-gradient(40.89deg, rgba(3, 158, 144, 0.1) 1.18%, #00CDBA 102.92%);
opacity: 0.25;
`

export const SpanNormal18 = styled.span`
height: 56px;

font-size: 18px;
line-height: 28px;

text-align: center;

color: #212529;
`

export const SpanNumber = styled.span`
position: absolute;
width: 8px;
height: 26px;

font-weight: bold;
font-size: 20px;
line-height: 26px;

text-align: center;
`

export const AbsoluteNumber = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 70px;
height: 70px;
`

export const TitleBoldGrey = styled.span`
position: static;
width: 220px;
height: 88px;

font-weight: bold;
font-size: 32px;
line-height: 44px;
text-align: center;
color: #00CDBA;
margin: 8px 0px;
`

export const CashPasso = styled.div`
position: static;
width: 80px;
height: 80px;
margin: 8px 0px;
background: url(${cashPasso})
`

export const DivQuestion = styled.div`
height: 2300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100% !important;
margin: 0 !important;
`

export const BgForm = styled.div`
height: 1020px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

background: linear-gradient(33.03deg, #039E90 15.62%, #00CDBA 96.52%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media only screen and (max-width: 940px) {
    flex-direction: column;
    height: 1300px;
    width: 100% !important;
    margin: 0 !important;
  }
`

export const TitleBY72 = styled.span`
width: 600px;
height: 276px;

font-weight: bold;
font-size: 72px;
line-height: 92px;
color: #E6EA2F;

margin: 24px 0px;
`

export const DivForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px 56px;
height: 900px;
background: #FFFFFF;
border-radius: 4px;
`

export const TitleForm = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 466px;
height: 152px;

margin: 32px 0px;
`
export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 466px;

margin: 32px 0px;
`

export const DivSubmit = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
`

export const ItemForm = styled.div`
width: 466px;
height: 84px;
margin: 5px 0px;
display:flex;
flex-direction: column;
`

export const SelectForm = styled.select`
height: 56px;
background: #F8F9FA;
border: 1px solid #E9ECEF;
box-sizing: border-box;
font-size: 16px;
line-height: 28px;
color: #868E96;
padding: 10px
`

export const InputForm = styled.input`
height: 56px;
background: #F8F9FA;
border: 1px solid #E9ECEF;
box-sizing: border-box;
font-size: 16px;
line-height: 28px;
color: #868E96;
padding: 10px
`

export const OptionForm = styled.option`
width: 172px;
height: 28px;
font-size: 18px;
line-height: 28px;
color: #868E96;
`

export const QuestionG = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 24px;
position: static;
width: 648px;
height: auto;
background: #E6EA2F;
border: 1px solid #E9ECEF;
margin: 0px 0px;
flex-wrap: wrap;
`

export const QuestionW = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 24px;
position: static;
width: 648px;
height: auto;
border: 1px solid #E9ECEF;
margin: 0px 0px;
flex-wrap: wrap;
`

export const TitleBold20 = styled.span`
position: static;
width: 528px;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #495057;
margin: 16px 0px;
`

export const IconQuestionPlus = styled.div`
margin-right: 15px;
background: url(${plus});
width: 24px;
height: 24px;
`

export const IconQuestionMenos = styled.div`
margin-right: 15px;
background: url(${menos});
width: 24px;
height: 3px;
`