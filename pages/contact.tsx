import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ContactPage() {
  return (
    <Page title="Contact" description="Have any question? we'd love to hear from you.">
      <ContactContainer>
        <ScrollAnimation delay={100} animateIn="fadeInLeft">
          <InformationSection />
        </ScrollAnimation>

        <ScrollAnimation delay={500} animateIn="fadeInRight">
          <FormSection />
        </ScrollAnimation>
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
