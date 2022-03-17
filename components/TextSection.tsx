import styled from 'styled-components';
import React, { PropsWithChildren } from 'react';
import { media } from 'utils/media';
import ScrollAnimation from 'react-animate-on-scroll';
import Typed from 'react-typed';

export interface TextSectionProps {
  backgroundImage?: string;
}
export default function TextSection({ backgroundImage }: PropsWithChildren<TextSectionProps>) {
  return (
    <ScrollAnimation animateIn="zoomIn">
      <TextWrapper backgroundImage={backgroundImage}>
        <section>
          <Text>
            Plastics are everywhere in our food, water, and even the air we breathe.
            <InnerText>
              <Typed
                strings={[
                  'Plastics leech into the water, suffocate animals degrading the water quality with toxic compounds and end up harming human and animal health.',
                  'The plastics and several polymeric-based products turn into microplastics with passage of time due to impact of environmental conditions which vary from region to region in the world.',
                ]}
                typeSpeed={150}
                backSpeed={50}
                loop
              />
            </InnerText>
          </Text>
        </section>
      </TextWrapper>
    </ScrollAnimation>
  );
}

type Props = Pick<TextSectionProps, 'backgroundImage'>;

const TextWrapper = styled.section`
  margin: 15rem 0 15rem 0;
  background-image: ${(props: Props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat, repeat;
  background-size: contain;
`;

const Text = styled.h1`
  position: relative;
  top: 7rem;
  text-align: center;
  margin: 2rem;
  padding: 5rem;
  font-size: 50px;
  ${media('<=desktop')} {
    font-size: 27px;
    top: 0;
  }
  & > :last-child {
    font-size: 30px;
    height: 20rem;
    margin: 2rem;
    ${media('<=desktop')} {
      font-size: 20px;
    }
  }
`;

const InnerText = styled.h1`
  ${media('<=desktop')} {
    display: none;
  }
`;
