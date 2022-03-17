import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import Container from 'components/Container';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import OurTeam from 'components/OurTeam';
import Partners from 'views/HomePage/Partners';
import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutPage() {
  return (
    <Page
      title="About"
      description="Natrify is the next form of packaging that will be used instead of plastics through our microorganism based polymers that are naturally biodegradable and share the same selling price as plastics. With high profile customers that cover our full production capacity till the fifth year and 15 patents being filed for our technology as well as being the first mover in the MENA region. Natrify aims to shift all global packaging to our products.
      "
    >
      <ScrollAnimation animateIn="fadeInDown">
        <TextOne>Meet The Team</TextOne>
      </ScrollAnimation>

      <ScrollAnimation delay={500} animateIn="fadeIn">
        <OurTeamWrapper>
          <OurTeam imageUrl={'/dummy.png'} title={'Co-Founder & co-ceo'} text={'Name name'} />
          <OurTeam imageUrl={'/girl.png'} title={'Co-Founder & Founder-Coo'} text={'Nameen'} />
        </OurTeamWrapper>
      </ScrollAnimation>

      <ScrollAnimation delay={700} animateIn="fadeIn">
        <Partners />
      </ScrollAnimation>
    </Page>
  );
}

const TextOne = styled.div`
  position: relative;
  bottom: 5rem;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const OurTeamWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  ${media('<=desktop')} {
    flex-direction: row;
  }
`;
