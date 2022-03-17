import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import NextLink from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import ScrollAnimation from 'react-animate-on-scroll';

export interface HeroProps {
  backgroundImage: string;
}

export default function Hero({ backgroundImage }: PropsWithChildren<HeroProps>) {
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <ContentsWrapper>
        <Contents>
          <CustomOverTitle>natrify a sustainable future</CustomOverTitle>
          <ScrollAnimation animateIn="fadeInLeft">
            <Heading> OUR PLANET IS DROWING IN PLASTIC POLUTION</Heading>
          </ScrollAnimation>
          <Description>IT'S TIME FOR CHANGE!</Description>
        </Contents>
        <ImageContainer>
          <ScrollAnimation animateIn="rotateIn">
            <Image src="/bag.png" alt="Bag" width={600} height={400} />
          </ScrollAnimation>
        </ImageContainer>
      </ContentsWrapper>
    </HeroWrapper>
  );
}

const bag = keyframes`
0% {
  transform: rotate(0) skewY(-4deg) ;
  -webkit-filter: hue-rotate(0);
  filter: hue-rotate(0);
}
25% {
  transform: rotate(72deg) skewY(5deg) skewX(0) scale(.9);
  -webkit-filter: hue-rotate(30deg);
  filter: hue-rotate(30deg);
}
  50% {
    transform: rotate(144deg) skewY(3deg) skewX(-4deg) scale(1);
    -webkit-filter: hue-rotate(4deg);
    filter: hue-rotate(4deg);
  }
  75% {
    transform: rotate(216deg) skewY(10deg) skewX(-4deg) scale(1);
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }
  90% {
    transform: rotate(288deg) skewY(10deg) skewX(-4deg) scale(1);
    -webkit-filter: hue-rotate(5deg);
    filter: hue-rotate(1deg);
  }
  100% {
    transform: rotate(1turn) skewY(0deg) skewX(0deg) scale(1);
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
  }
`;

const ContentsWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

type Props = Pick<HeroProps, 'backgroundImage'>;

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  flex-direction: column;
  align-items: center;
  background-image: ${(props: Props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  img {
    animation: ${bag} 100s ease-in-out infinite;
    cursor: pointer;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 5rem;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;
