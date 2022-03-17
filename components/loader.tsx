import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Logo from 'components/Logo';

const Loader = () => {
  return (
    <Screen>
      <Image src={'/logo-loader.svg'} width={'300'} height={'300'} />
      {/* <Image src="/greengdn.png" alt="loading… " layout="fill" /> */}
      {/* <Logo /> */}
    </Screen>
  );
};

const Screen = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  animation: fade 0.4s ease-in forwards;
  background: rgb(var(--secondBackground));

  @keyframes fade {
    0% {
      transform: scale(0.1);
    }
    25% {
      transform: scale(0.3);
    }
    50% {
      transform: scale(0.5);
    }
    75% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Loader;
