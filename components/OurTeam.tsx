import NextLink from 'next/link';
// import { animation } from 'polished';
import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

export interface OurTeamProps {
  imageUrl: string;
  text: string;
  title: string;
  reversed?: boolean;
}

export default function OurTeam({ imageUrl, text, title, reversed }: PropsWithChildren<OurTeamProps>) {
  return (
    <Card>
      <img src={imageUrl} alt="" />
      <Text>{text}</Text>
      <Parag>{title}</Parag>
      <Social className="social-icons">
        <NextLink href="" passHref>
          <a>
            <TwitterIcon size={30} round={true} />
          </a>
        </NextLink>

        <NextLink href="" passHref>
          <a>
            <FacebookIcon size={30} round={true} />
          </a>
        </NextLink>

        <NextLink href="" passHref>
          <a>
            <LinkedinIcon size={30} round={true} />
          </a>
        </NextLink>
      </Social>
    </Card>
  );
}

const Social = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  z-index: 20;
  text-decoration: none;
  opacity: 0;
  margin-top: 100px;
  padding: 8px 15px;
  background: #ffffff;
  border-radius: 35px;
  transition: all 0.5s ease-in-out;
`;

const Card = styled.div`
  background-color: rgb(var(--secondBackground));
  position: relative;
  height: 264px;
  width: 300px;
  cursor: pointer;

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 340px;
    &:nth-child(2) {
      width: 250px;
      height: 336px;
      opacity: 0;
    }
  }

  & :hover ${Social} {
    opacity: 1;
  }
`;

const Text = styled.h1`
  position: absolute;
  top: 100%;
  letter-spacing: 0px;
  color: white;
  margin-top: 10px;
  font-size: 26px;
  font-weight: 600;
`;

const Parag = styled.p`
  position: absolute;
  top: 115%;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-top: 10px;
  color: white;
`;
