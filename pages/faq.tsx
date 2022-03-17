import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import ScrollAnimation from 'react-animate-on-scroll';

export default function FaqSection() {
  return (
    <Wrapper>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <SectionTitle>Frequently asked question</SectionTitle>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Accordion title="What are the advantages of bioplastic products?">
          Bioplastic is a sustainable material derived from renewable feedstocks, and is an alternative to petroleum-based plastics. It has
          the potential to reduce 30-70% of carbon dioxide emission. It represents approximately 42% reduction of carbon footprints. The
          production of bioplastic requires 65% less energy than conventional petroleum plastic.
        </Accordion>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Accordion title="How large is the bioplastics market – current and future?">
          The global bioplastics market was valued at $5.8 billion in 2020, and is projected to reach $16.8 billion by 2030, growing at a
          CAGR of 11.5% from 2021 to 2030.
        </Accordion>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Accordion
          title="Can fossil-based plastics be completely substituted by biobased
       bioplastics?"
        >
          According to the PRO BIP study conducted by the University of Utrecht, bioplastics could technically substitute about 85 percent
          of conventional plastics, so this is not a realistic short- or mid-term development
        </Accordion>
      </ScrollAnimation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
