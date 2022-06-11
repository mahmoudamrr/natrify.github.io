import NextImage from 'next/image';
// import { animation } from 'polished';
import React, { PropsWithChildren } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';
import ScrollAnimation from 'react-animate-on-scroll';

export interface BasicSectionProps {
  imageUrl: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
  backgroundImage?: string;
  animation?: any;
  right?: string;
  bottom?: string;
  id: string;
}

export default function BasicSection({
  imageUrl,
  title,
  overTitle,
  reversed,
  backgroundImage,
  animation,
  right,
  bottom,
  id,
  children,
}: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper reversed={reversed} backgroundImage={backgroundImage} id={id}>
      <ImageContainer animation={animation} right={right} bottom={bottom}>
        <ScrollAnimation animateIn="fadeInRight" delay={400} style={{ height: '100%', width: '100%' }}>
          <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </ScrollAnimation>
      </ImageContainer>

      <ContentContainer>
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <ScrollAnimation animateIn="fadeInLeft" style={{ margin: '0', padding: '0' }}>
          <Title>{title}</Title>
          <RichText>{children}</RichText>
        </ScrollAnimation>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const rotate = keyframes`
0%   { transform: rotate(0); }
50%  { transform: rotate(-15deg); }
75%  { transform: rotate(90deg); }
100% { transform: translateY(0); }
`;

const Title = styled.h1`
  font-size: 5.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  color: rgb(var(--textTertiary));

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

type P = Pick<BasicSectionProps, 'animation' | 'right' | 'bottom' | 'backgroundImage' | 'reversed'>;

const ImageContainer = styled.div`
  flex: 1;
  transition: 1s;
  animation: ${(props: P) => props.animation};
  right: ${(props: P) => props.right};
  bottom: ${(props: P) => props.bottom};
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 70rem;
    height: 50rem;
  }

  ${media('<=desktop')} {
    width: 100%;
    right: 7rem;
    top: 5rem;
    width: 30rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  img {
    animation: ${rotate} 15s ease-in-out infinite;
    margin: 0 0 2rem 2rem;
  }
`;

const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: P) => (p.reversed ? 'row-reverse' : 'row')};
  background-image: ${(props: P) => `url(${props.backgroundImage})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: 85% 50%;
  padding: 7rem 2rem 7rem 2rem;

  &:nth-child(6) {
    min-height: 70rem;
  }
  &:nth-child(7) {
    min-height: 70rem;
  }

  ${ImageContainer} {
    margin: ${(p: P) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;
    background-attachment: scroll;

    ${ImageContainer} {
      margin: 0 0 7rem 0;
    }
  }
`;
