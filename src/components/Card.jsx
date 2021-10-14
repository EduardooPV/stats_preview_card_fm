import styled from "styled-components";

import ImageMobile from '../images/image-header-mobile.jpg'
import ImageDesktop from '../images/image-header-desktop.jpg'

const Container = styled.article`
  max-width: 330px;
  width: calc(100% - 40px);

  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-align: center;
  font-size: 15px;

  border-radius: 10px;

  background: hsl(244, 38%, 16%);

  @media(min-width: 1440px) {
    max-width: 1000px;

    text-align: start;

    flex-direction: row-reverse;
  }
`

const ContainerImage = styled.div`
  position: relative;
    div {
      width: 100%;
      height: 100%;

      position: absolute;
      background: #aa5cdb;
      opacity: 0.4;
      filter: invert(0%) brightness(30%)  saturate(600%) ;
      
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    img {
      width: 100%;
      display: block;
      
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  @media(min-width: 1440px) {
    width: 50%;

    img {
      border-top-left-radius: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    div {
      border-top-left-radius: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`

const ContainerContent = styled.div`
  padding: 2.7rem 2.3rem 0.5rem 2.3rem;

  @media(min-width: 1440px) {
    width: 40%;

    padding: 0 4rem;
  }
`

const Title = styled.h1`

  font-family: InterBold;
  font-size: 28px;
  color: hsl(0, 0%, 100%);

  span {
    color: hsl(277, 64%, 61%);
  }

  @media(min-width: 1440px) {
    width: 90%;
    margin-top: 2rem;
    font-size: 30px;
    line-height: 40px;
  }
`

const Description = styled.p`
  margin: 1.5rem 0 3rem 0;

  line-height: 23px;
  font-family: InterRegular;
  color: hsla(0, 0%, 100%, 0.75);

  @media(min-width: 1440px) {
    margin-bottom: 4rem;

    width: 80%;
    font-size: 13px;
    line-height: 26px;
  }
`

const Numbers = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 1440px) {
    justify-content: start;
    flex-direction: row;
  }
`

const NumberItem = styled.div`
  margin-bottom: 2rem;
  
  display: flex;
  flex-direction: column;
  
  p {
    margin-bottom: 0.5rem;

    color: hsl(0, 0%, 100%);
    font-family: InterRegular;
    font-size: 25px;
  }
  
  span {
    color: hsla(0, 0%, 100%, 0.6);
    font-family: LexendDecaRegular;
    text-transform: uppercase;
    font-size: 12px;
  }

  @media(min-width: 1440px) {
    margin-right: 4rem;
  }
`

export default function Card() {
  return (
    <Container>
      <ContainerImage>
        <div></div>
        <picture>
					<source srcset={ImageMobile} media="(max-width: 375px)" aria-hidden="true" />

					<img src={ImageDesktop} alt="Banner Universal"/>
				</picture>
      </ContainerImage>
      <ContainerContent>
        <Title>
          Get <span>insights</span> that help your business grow.
        </Title>

        <Description>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
        </Description>

        <Numbers>
          <NumberItem>
            <p>10k+</p> 
            <span>companies</span>  
          </NumberItem>

          <NumberItem>
            <p>314</p> 
            <span>templates</span>
          </NumberItem>

          <NumberItem>
            <p>12M+</p> 
            <span>queries</span>
          </NumberItem>
        </Numbers>
      </ContainerContent>
    </Container>
  )
}