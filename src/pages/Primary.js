import React, { useState } from 'react';
import {
  Banner,
  BannerContainer,
  Resgate,
  SpanGreen,
  ImgBanner,
  InfoBanner,
  SpanUper,
  BtnGreyL,
  DivGreyL,
  ArrowRight,
  ContainerBurocracia,
  FrasePrincipal,
  Frase1,
  SpanSelect,
  Frase2,
  DivFrase2,
  ImgFrase2,
  DivFrase2Esq,
  EsqTextPrincipal,
  TitleBold,
  SubTitleNormal,
  Frase1Subtitle,
  OptionsFrase2,
  CheckIcon,
  TextOptions,
  BtnGreyB,
  DivBtnGreyB,
  Col3R2,
  DivInfo,
  IcoGradient,
  ElipseGradient,
  IcoElipse,
  SpanGreyBold,
  SpanObsSlim,
  Absolute,
  BgGradient,
  TitleL48,
  DivDir,
  BgTitleB,
  TitleY32,
  DivDirMid,
  DivDirFooter,
  SpanBold18,
  DivWRow,
  DivPasso,
  ItemPasso,
  ArrowPasso,
  DivNumber,
  SpanNormal18,
  SpanNumber,
  AbsoluteNumber,
  TitleBoldGrey,
  CashPasso,
  DivQuestion,
  BgForm,
  TitleBY72,
  DivForm,
  TitleForm,
  Form,
  DivSubmit,
  ItemForm,
  SelectForm,
  InputForm,
  OptionForm,
  TitleBold20,
  QuestionG,
  IconQuestionPlus,
  IconQuestionMenos,
  QuestionW,
  ImgFrase5
} from '../css/primary'
import iconArrowRight from '../assets/Arrow-right-line.png'
import checkIco from '../assets/Check.png'
import paste from '../assets/Combined-Shape.png'
import cellphone from '../assets/cellphone.png'
import pig from '../assets/pig.png'
import globalCard from '../assets/globalCard.png'
import shield from '../assets/shield.png'
import cash from '../assets/cash.png'
import globe from '../assets/globe.png'
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from "react-helmet";

const Primary = () => {

  const [valor, setValor] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [nCellphone, setNCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [qGreen, setQGreen] = useState(false);
  const [qWhite1, setQWhite1] = useState(false);
  const [qWhite2, setQWhite2] = useState(false);
  const [qWhite3, setQWhite3] = useState(false);
  const [qWhite4, setQWhite4] = useState(false);
  const [qWhite5, setQWhite5] = useState(false);
  const [qWhite6, setQWhite6] = useState(false);

  const handleSubmit = () => {
    if (valor !== "" && name !== "" && cpf !== "" && nCellphone !== "" && email !== "") {
      alert('Solicitação realizada com sucesso!')
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <Container fluid style={{ padding: 0 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Acredita Financeira</title>
      </Helmet>
      {/* Parte 1 */}
      <Banner>
        <BannerContainer>
          <Col>
            <Resgate>
              <span>Resgate seu FGTS em</span> <SpanGreen>até 2 hora</SpanGreen>
            </Resgate>
            <InfoBanner>
              <span>Que tal antecipar até 5 anos de saque do seu FGTS?</span> <SpanUper>Empréstimo garantido em 2 cliques!</SpanUper>
            </InfoBanner>
            <DivGreyL>
              <BtnGreyL href="#form">quero resgatar meu fgts</BtnGreyL>
              <ArrowRight src={iconArrowRight} />
            </DivGreyL>
          </Col>
          <Col>
            <ImgBanner />
          </Col>

        </BannerContainer>
      </Banner>

      {/* Parte 2 */}
      <ContainerBurocracia id="solucao">
        <FrasePrincipal>
          <Frase1>Por que perder tempo com burocracia quando você pode <SpanSelect>resgatar seu FGTS em até 2 horas</SpanSelect>
          </Frase1>
          <Frase1Subtitle>O empréstimo com garantia de saque do FGTS é o <SpanUper>único empréstimo que não afeta seu orçamento mensal</SpanUper>, incluindo negativados na SPC/Serasa, têm esse direito.</Frase1Subtitle>
        </FrasePrincipal>
        <Frase2>
          <DivFrase2>
            <DivFrase2Esq>
              <EsqTextPrincipal>
                <TitleBold>Chega de esperar para ter o dinheiro que você precisa</TitleBold>
                <SubTitleNormal>
                  A antecipação do saque aniversário do FGTs conta com vários benefícios, venha conhecer:
                </SubTitleNormal>
              </EsqTextPrincipal>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Você não se compromete mensalmente. O pagamento da antecipação é anual e direto no seu FTGS</TextOptions>
              </OptionsFrase2>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Dinheiro rápido direto na sua conta </TextOptions>
              </OptionsFrase2>
              <DivBtnGreyB>
                <BtnGreyB href="#form">quero resgatar meu fgts agora </BtnGreyB>
              </DivBtnGreyB>
            </DivFrase2Esq>
          </DivFrase2>
          <Col>
            <ImgFrase2 />
          </Col>
        </Frase2>
      </ContainerBurocracia>

      {/* Parte 3 */}
      <ContainerBurocracia id="vantagens">
        <FrasePrincipal>
          <Frase1>Espere até ver as <SpanSelect>vantagens</SpanSelect> que a Acreditar separou <SpanSelect>para você </SpanSelect>
          </Frase1>
        </FrasePrincipal>
        <Col3R2>
          <Row>
            <DivInfo>
              <IcoGradient>
                <ElipseGradient />
                <IcoElipse src={paste} />
              </IcoGradient>
              <SpanGreyBold>Não compromete o orçamento mensal</SpanGreyBold>
            </DivInfo>
            <DivInfo>
              <IcoGradient>
                <ElipseGradient />
                <IcoElipse src={cellphone} />
              </IcoGradient>
              <SpanGreyBold>Sem consulta ao SPC/Serasa</SpanGreyBold>
            </DivInfo>
            <DivInfo>
              <IcoGradient>
                <ElipseGradient />
                <IcoElipse src={pig} />
              </IcoGradient>
              <SpanGreyBold>Não impacta na contratação de outras linhas de crédito</SpanGreyBold>
            </DivInfo>
          </Row>
          <Row>
            <DivInfo>
              <IcoGradient>
                <ElipseGradient />
                <IcoElipse src={globalCard} />
              </IcoGradient>
              <SpanGreyBold>A contratação é 100% digital</SpanGreyBold>
            </DivInfo>
            <DivInfo>
              <IcoGradient>
                <ElipseGradient />
                <Absolute>
                  <IcoElipse src={shield} />
                </Absolute>
                <Absolute>
                  <IcoElipse src={cash} />
                </Absolute>
              </IcoGradient>
              <SpanGreyBold>Pagamento direto no seu FGTS</SpanGreyBold>
            </DivInfo>
            <DivInfo>
              <IcoGradient>
                <ElipseGradient />
                <IcoElipse src={globe} />
              </IcoGradient>
              <SpanGreyBold>Processo de liberação em até 2 horas*</SpanGreyBold>
              <SpanObsSlim>* Válido para operações realizadas até as 17h em dias úteis</SpanObsSlim>
            </DivInfo>
          </Row>
        </Col3R2>
        <DivBtnGreyB>
          <BtnGreyB href="#form">quero resgatar meu fgts agora </BtnGreyB>
        </DivBtnGreyB>
      </ContainerBurocracia>

      {/* Parte 4 */}
      <BgGradient id="oQuePrecisa">
        <Frase2>
          <DivFrase2>
            <TitleL48>Facilidades nunca vistas antes. Vai ficar de fora?</TitleL48>
            <DivGreyL>
              <BtnGreyL href="#form">quero resgatar meu fgts</BtnGreyL>
              <ArrowRight src={iconArrowRight} />
            </DivGreyL>
          </DivFrase2>
          <DivDir>
            <BgTitleB>
              <TitleY32>O que preciso para resgatar o empréstimo FGTS</TitleY32>
            </BgTitleB>
            <DivDirMid>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Ser optante pelo saque aniversário</TextOptions>
              </OptionsFrase2>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Autorizar o banco a realizar consulta</TextOptions>
              </OptionsFrase2>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Possuir saldo em conta FGTS</TextOptions>
              </OptionsFrase2>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Possuir conta bancária para recebimento do crédito</TextOptions>
              </OptionsFrase2>
              <OptionsFrase2>
                <CheckIcon src={checkIco} />
                <TextOptions>Ter o CPF regular na Receita Federal</TextOptions>
              </OptionsFrase2>
            </DivDirMid>
            <DivDirFooter>
              <SpanBold18>Mas fique tranquilo(a), a gente te ajuda
                nesse processo :)</SpanBold18>
            </DivDirFooter>
          </DivDir>
        </Frase2>
      </BgGradient>

      {/* Parte 5 */}
      <DivWRow >
        <Frase2>
          <DivFrase2Esq>
            <EsqTextPrincipal>
              <TitleBold><SpanSelect>Você sabia</SpanSelect> que seu FGTS rende menos que a PIOR aplicação do mercado financeiro?</TitleBold>
              <SubTitleNormal>
                Você está perdendo dinheiro e não te avisaram. <SpanUper>ANTECIPE SEU SALDO FGTS</SpanUper> e invista em algo que realmente vale a pena!
              </SubTitleNormal>
            </EsqTextPrincipal>
            <DivBtnGreyB>
              <BtnGreyB href="#form">quero resgatar meu fgts agora </BtnGreyB>
            </DivBtnGreyB>
          </DivFrase2Esq>
          <ImgFrase5 />
        </Frase2>
      </DivWRow>

      {/* Parte 6 */}
      <ContainerBurocracia id="passoAPasso">
        <FrasePrincipal style={{ marginTop: 50 }}>
          <Frase1>Faça o Empréstimo com Garantia de FGTS e <SpanSelect>realize seus sonhos</SpanSelect>
          </Frase1>
          <Frase1Subtitle>São apenas 3 etapas.<SpanUper> Conheça o passo a passo:</SpanUper></Frase1Subtitle>
        </FrasePrincipal>
        <DivPasso>
          <ItemPasso>
            <AbsoluteNumber>
              <DivNumber></DivNumber>
              <SpanNumber>1</SpanNumber>
            </AbsoluteNumber>
            <SpanNormal18>Optar pelo Saque de Aniversário</SpanNormal18>
          </ItemPasso>
          <ArrowPasso />
          <ItemPasso>
            <AbsoluteNumber>
              <DivNumber></DivNumber>
              <SpanNumber>2</SpanNumber>
            </AbsoluteNumber>
            <SpanNormal18>Autorizar o banco a acessar os dados e FGTS</SpanNormal18>
          </ItemPasso>
          <ArrowPasso />
          <ItemPasso>
            <AbsoluteNumber>
              <DivNumber></DivNumber>
              <SpanNumber>3</SpanNumber>
            </AbsoluteNumber>
            <SpanNormal18>Aprovação da simulação</SpanNormal18>
          </ItemPasso>
          <ArrowPasso />
          <ItemPasso style={{ marginTop: 30 }}>
            <CashPasso />
            <TitleBoldGrey>Dinheiro na conta</TitleBoldGrey>
          </ItemPasso>
        </DivPasso>
        <DivBtnGreyB>
          <BtnGreyB href="#form">quero resgatar meu fgts agora </BtnGreyB>
        </DivBtnGreyB>
      </ContainerBurocracia>

      {/* Parte 7 */}
      <DivQuestion id="duvidas">
        <Frase1>Perguntas frequentes</Frase1>
        <QuestionG onClick={() => { if (qGreen == false) { setQGreen(true) } else { setQGreen(false) } }}>
          <TitleBold20>Que segurança eu tenho de que eu não vou cair em um golpe?</TitleBold20>
          {(qGreen == false) && (
            <IconQuestionPlus />
          )}
          {(qGreen) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Certifique-se de que a empresa é regulamentada com a resolução do banco central. A Acreditar é uma empresa séria inscrita sob o CNPJ n° 15.533.354/0001-79</Frase1Subtitle>
            </>
          )}
        </QuestionG>
        <QuestionW onClick={() => { if (qWhite1 == false) { setQWhite1(true) } else { setQWhite1(false) } }}>
          <TitleBold20>Posso fazer a antecipação com o nome sujo?</TitleBold20>
          {(qWhite1 == false) && (
            <IconQuestionPlus />
          )}
          {(qWhite1) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Sim! Essa modalidade de empréstimo não consulta seu nome no SPC/Serasa.</Frase1Subtitle>
            </>
          )}
        </QuestionW>
        <QuestionW onClick={() => { if (qWhite2 == false) { setQWhite2(true) } else { setQWhite2(false) } }}>
          <TitleBold20>A antecipação do meu FGTs compromete outros empréstimos?</TitleBold20>
          {(qWhite2 == false) && (
            <IconQuestionPlus />
          )}
          {(qWhite2) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Não. Com essa modalidade de empréstimo, você não usa sua margem consignável nem afeta seu orçamento mensal. Assim você fica livre para solicitar outros tipos de empréstimo caso queira</Frase1Subtitle>
            </>
          )}
        </QuestionW>
        <QuestionW onClick={() => { if (qWhite3 == false) { setQWhite3(true) } else { setQWhite3(false) } }}>
          <TitleBold20>Qual valor máximo que posso antecipar? </TitleBold20>
          {(qWhite3 == false) && (
            <IconQuestionPlus />
          )}
          {(qWhite3) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Você pode antecipar até 5 parcelas anuais do seu FGTS.</Frase1Subtitle>
            </>
          )}
        </QuestionW>
        <QuestionW onClick={() => { if (qWhite4 == false) { setQWhite4(true) } else { setQWhite4(false) } }}>
          <TitleBold20>Qual a taxa de juros que irei pagar?</TitleBold20>
          {(qWhite4 == false) && (
            <IconQuestionPlus />
          )}
          {(qWhite4) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Sem resposta</Frase1Subtitle>
            </>
          )}
        </QuestionW>
        <QuestionW onClick={() => { if (qWhite5 == false) { setQWhite5(true) } else { setQWhite5(false) } }}>
          <TitleBold20>A empresa que trabalho precisa aprovar a operação?</TitleBold20>
          {(qWhite5 == false) && (
            <IconQuestionPlus />
          )}
          {(qWhite5) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Não, a empresa que realiza os pagamentos na sua conta do FGTS não possui qualquer vínculo com a contratação do empréstimo com garantia do saque aniversário do FGTS.</Frase1Subtitle>
            </>
          )}
        </QuestionW>
        <QuestionW onClick={() => { if (qWhite6 == false) { setQWhite6(true) } else { setQWhite6(false) } }}>
          <TitleBold20>Quem pode fazer o empréstimo com garantia FGTS? </TitleBold20>
          {(qWhite6 == false) && (
            <IconQuestionPlus />
          )}
          {(qWhite6) && (
            <>
              <IconQuestionMenos />
              <Frase1Subtitle style={{ width: '100%' }}>Todo cidadão que possua saldo no FGTS e que opte pelo saque aniversário pode realizar a operação</Frase1Subtitle>
            </>
          )}
        </QuestionW>

        <DivBtnGreyB>
          <BtnGreyB href="#form">quero resgatar meu fgts agora </BtnGreyB>
        </DivBtnGreyB>
        <Frase1Subtitle>Caso tenha dúvidas, <SpanUper>entre em contato.</SpanUper></Frase1Subtitle>
      </DivQuestion>

      {/* Parte 8 */}
      <BgForm id="form">
        <TitleBY72>Não deixe essa oportunidade passar!</TitleBY72>
        <DivForm>
          <TitleForm>
            <TitleBold>Resgate o seu FGTS agora mesmo</TitleBold>
            <Frase1Subtitle>Preencha o formulário abaixo e <SpanUper>antecipe até 5 anos do seu FGTS.</SpanUper></Frase1Subtitle>
          </TitleForm>
          <Form>
            <ItemForm>
              <SpanNormal18 style={{ textAlign: 'inherit' }}>Simular qual valor?</SpanNormal18>
              <SelectForm value={valor} onChange={(e) => setValor(e.target.value)}>
                <OptionForm selected value="coco">Selecione um valor</OptionForm>
                <OptionForm value="500">500 reais</OptionForm>
                <OptionForm value="1000">1.000 reais</OptionForm>
                <OptionForm value="3000">3.000 reais</OptionForm>
                <OptionForm value="5000">5.000 reais</OptionForm>
                <OptionForm value="10000">10.000 reais</OptionForm>
              </SelectForm>
            </ItemForm>
            <ItemForm>
              <SpanNormal18 style={{ textAlign: 'inherit' }}>Qual seu nome?</SpanNormal18>
              <InputForm type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </ItemForm>
            <ItemForm>
              <SpanNormal18 style={{ textAlign: 'inherit' }}>E seu CPF?</SpanNormal18>
              <InputForm type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </ItemForm>
            <ItemForm>
              <SpanNormal18 style={{ textAlign: 'inherit' }}>Qual telefone/Whatsapp?</SpanNormal18>
              <InputForm type="text" value={nCellphone} onChange={(e) => setNCellphone(e.target.value)} />
            </ItemForm>
            <ItemForm>
              <SpanNormal18 style={{ textAlign: 'inherit' }}>Qual e-mail para receber a simulação?</SpanNormal18>
              <InputForm type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </ItemForm>
            <DivSubmit>
              <DivGreyL>
                <BtnGreyL onClick={handleSubmit}>quero resgatar meu fgts</BtnGreyL>
              </DivGreyL>
            </DivSubmit>
          </Form>
        </DivForm>
      </BgForm>
    </Container >
  );
}

export default Primary;