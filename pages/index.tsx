import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import NextImage from 'next/image';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled, { keyframes, css } from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import TextSection from 'components/TextSection';
import { media } from 'utils/media';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero backgroundImage="leaves-hero.jpg" />
          <TextSection backgroundImage="color-spot.png" />
          <BasicSection
            id="micro"
            reversed
            title="What is micro plastics ?"
            overTitle="Microplastic"
            backgroundImage="/microplastics-human.jpg"
            imageUrl={'/magnifyingglass.png'}
            animation={rotate}
          >
            <Parag>
              Microplastics, small pieces of plastic, less than 5 mm in length, that occur in the environment as a consequence of plastic
              pollution Microplastics consist of carbon and hydrogen and others atoms bound together in polymer chains and many of these
              chemical additives leach out of the plastics after entering the environment.
            </Parag>
            <br />
            <Parag>
              Microplastics are divided into two types Primary microplastics are tiny particles designed for commercial use, such as
              cosmetics, as well as microfibers shed from clothing and other textiles, such as fishing nets Secondary microplastics are
              particles that result from the breakdown of larger plastic items, such as water bottles This breakdown is caused by exposure
              to environmental factors, mainly the sun’s radiation and ocean waves.
            </Parag>
          </BasicSection>
          <BasicSection
            id="bird"
            imageUrl="/birds2.png"
            title="Plastics and climate change"
            overTitle="Climate change"
            right="30rem"
            bottom="7rem"
            reversed
            backgroundImage="/birbs.jpeg"
            animation={birdy}
          >
            <Parag>
              Almost all plastic is derived from materials (like ethylene and propylene) made from fossil fuels (mostly oil and gas). The
              process of extracting and transporting those fuels, then manufacturing plastic creates billions of tonnes of greenhouse gases.
            </Parag>
            <br />
            <Parag>
              As it does, sunlight and heat cause the plastic to release powerful greenhouse gases, leading to an alarming feedback loop. As
              our climate changes, the planet gets hotter, the plastic breaks down into more methane and ethylene, increasing the rate of
              climate change, and so perpetuating the cycle.
            </Parag>
          </BasicSection>
          <BasicSection
            id="ocean"
            imageUrl="/bottle.png"
            title="Plastics in the ocean."
            overTitle="Plastic in ocean"
            backgroundImage="/ocean.jpg"
            reversed
            right="10rem"
            bottom="0rem"
            animation={bottle}
          >
            <Parag>
              up to 13 million metric tons of plastic ends up in the ocean each year—the equivalent of a rubbish or garbage truck load’s
              worth every minute. Fish, seabirds, sea turtles, and marine mammals can become entangled in or ingest plastic debris, causing
              suffocation, starvation, and drowning.
            </Parag>
            <br />
            <Parag>
              Plastic waste kills up to a million seabirds a year. As with sea turtles, when seabirds ingest plastic, it takes up room in
              their stomachs, sometimes causing starvation. Many seabirds are found dead with their stomachs full of this waste. Scientists
              estimate that 60 percent of all seabird species have eaten pieces of plastic, a figure they predict will rise to 99 percent by
              2050.
            </Parag>
          </BasicSection>
          <BasicSection
            id="air"
            imageUrl={'/bagy.png'}
            title="Plastics in the air."
            overTitle="Plastic in the air"
            reversed
            backgroundImage="/leaves-again.jpg"
            animation={bagy}
          >
            <Parag>
              Tiny bits of plastic from your packaging and soda bottles could be traveling in the atmosphere across entire continents,
              carried by winds, a new study found.
            </Parag>
            <Parag>
              Most of our plastic waste gets buried in landfills, incinerated or recycled -- but up to 18% ends up in the environment. Since
              plastic isn't easily decomposable it instead fragments into smaller and smaller pieces until the microplastics are small
              enough to be swept into the air.
            </Parag>
          </BasicSection>
          <BasicSection
            id="landfill"
            imageUrl="/62fb391.png"
            title="Plastic landfill."
            overTitle="Landfill"
            reversed
            backgroundImage="/grafa.jpg"
            animation={grafa}
          >
            <Parag>
              On a molecular level, a lot is happening beneath the surface of a landfill. Everything is decomposing (breaking down) or
              biodegrading (breaking down via a biological action), but these processes happen very, very slowly, as landfills are designed
              to prevent biodegradation and decomposition.
            </Parag>
          </BasicSection>
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}

const bird = keyframes`
  0% {
    transform: translateZ(0) rotate(0);
  }
  50% {
    transform: translate3d(0, -3vh, 0) rotate(-5deg);
  }
  100% {
    transform: translateZ(0) rotate(0);
  }
`;

const birdy = css`
  ${bird} 7s infinite alternate;
`;

const bottlle = keyframes`
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-100px); }
    100% { transform: translateY(0); }
`;

const bottle = css`
  ${bottlle} 25s infinite ease;
`;

const grafaa = keyframes`   
 to {
  transform: translate3d(-70%,0,0);
}`;

const grafa = css`
  ${grafaa} 30s infinite ease;
`;

const bag = keyframes`
  0% {
    transform: translateY(-50px) rotate(0);
  }
  25% {
    transform: translate3d(5px, -120px, 20px) rotate(40deg);
  }
  50% {
    transform: translate3d(10px, -170px, 30px) rotate(-5deg);
  }
  75% {
    transform: translate3d(10, -250px, 0) rotate(-5deg);
  }
  100% {
    transform: translateY(70) rotate(-70deg);
  }
`;

const bagy = css`
  ${bag} 15s infinite alternate;
`;

const rotatee = keyframes`
0%   { transform: rotate(0); }
100%  { transform: rotate(20deg); }
`;

const rotate = css`
  ${rotatee} 10s infinite alternate;
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 0;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 0;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--background));
  background-image: var(--background-image);

  & > :last-child {
    & > :first-child {
      & > :fisr-child {
        top: 0;
      }
      ${media('<=desktop')} {
        flex-direction: column-reverse;
      }
    }
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
  }
`;

const Parag = styled.p`
  color: white;
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
