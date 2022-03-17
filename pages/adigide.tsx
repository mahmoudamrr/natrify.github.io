import styled from 'styled-components';
import Image from 'next/image';
import Page from 'components/Page';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import BasicSection from 'components/BasicSection';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import YoutubeVideo from 'components/YoutubeVideo';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import { useState } from 'react';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function AdigidePage() {
  const [dark, setDark] = useState();

  return (
    <HomepageWrapper>
      <Wrapper>
        <ScrollAnimation animateIn="fadeInDown">
          <AdigideTitle>How Adigide is Made</AdigideTitle>
        </ScrollAnimation>

        <ScrollAnimation delay={300} animateIn="fadeInRight">
          <AdigideText>
            Adigide is a set of single-use products that have been developed by Natrify through the use of genetically modified
            microorganisms to be used in the packaging industry as the best option to replace plastics due to its similarity in
            characteristics and number of applications to plastics as well as having a selling price that matches the stock price of
            plastics creating a high value proposition for prospective customers.
          </AdigideText>
        </ScrollAnimation>

        <VideoWrapper>
          <ScrollAnimation delay={1500} animateIn="zoomIn">
            <YoutubeVideo url="https://www.youtube.com/watch?v=SL3-K2vLvBs" />
          </ScrollAnimation>
        </VideoWrapper>
        <SwipWrapper>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            pagination={{
              // type: 'progressbar',
              clickable: true,
            }}
            // navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <BasicSection imageUrl="/soilnew.png" title="" overTitle="step one" reversed id="">
                <Parag>The plants perform photosynthesis and produces carbohydrates to be consumed by microorganisms.</Parag>
              </BasicSection>
            </SwiperSlide>
            <SwiperSlide>
              <BasicSection imageUrl="/icon (N)-28(1).png" title="" overTitle="step two" reversed id="">
                <Parag>Microorganisms feeds on the carbohydrates and produces our polymer.</Parag>
              </BasicSection>
            </SwiperSlide>
            <SwiperSlide>
              <BasicSection imageUrl="/icon (N)-08(1).png" title="" overTitle="step three" reversed id="">
                <Parag>The polymer is shaped in the desired form.</Parag>
              </BasicSection>
            </SwiperSlide>
            <SwiperSlide>
              <BasicSection imageUrl="/icon (N)-01(1).png" title="" overTitle="step four" reversed id="">
                <Parag>Product is consumed and disposed.</Parag>
              </BasicSection>
            </SwiperSlide>
            <SwiperSlide>
              <BasicSection imageUrl="/icon (N)-12(1).png" title="" overTitle="step five" reversed id="">
                <Parag>Product biodegrades into CO2 & H2O to be consumed once again by plants.</Parag>
              </BasicSection>
            </SwiperSlide>
          </Swiper>
        </SwipWrapper>
      </Wrapper>
    </HomepageWrapper>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--background));
  background-image: var(--background-image);

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
  }
`;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 0;
  }
`;

const SwipWrapper = styled.div`
  margin-bottom: 20rem;
`;
const Parag = styled.p`
  color: white;
  font-size: 4rem;
`;

const AdigideTitle = styled.div`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  margin: 3rem;

  ${media('<=tablet')} {
    font-size: 4.6rem;
  }
`;

const AdigideText = styled.div`
  font-size: 2.2rem;
  line-height: 1.7;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 4rem;

  ${media('<=tablet')} {
    font-size: 2rem;
  }
`;

const VideoWrapper = styled.div`
  padding: 0 15rem 0 15rem;

  ${media('<=tablet')} {
    padding: 0;
    margin: 2rem;
  }
`;
