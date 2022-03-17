import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';
import ScrollAnimation from 'react-animate-on-scroll';

const REFERENCES = [
  {
    imageUrl: '/icon (N)-12.png',
    title: 'Natural Polymers.',
    description:
      'The word "polymer" means "many parts" (from the Greek poly , meaning "many," and meros , meaning "parts"). Polymers are giant molecules with molar masses ranging from thousands to millions. continue reading....',
    link: 'http://www.chemistryexplained.com/Pl-Pr/Polymers-Natural.html',
  },
  {
    imageUrl: '/icon (N)-08.png',
    title: 'Synthetic polymers.',
    description:
      'Synthetic polymers are human-made polymers, often derived from petroleum oil. From the utility point of view they can be classified into three main categories: thermoplastics, elastomers and synthetic fibers. They are commonly found in a variety of products worldwide. continue reading....',
    link: 'https://en.wikipedia.org/wiki/List_of_synthetic_polymers',
  },
  {
    imageUrl: '/tax.png',
    title: 'Percentage of plastic used for packaging.',
    description: 'Read the paper.',
    link: 'https://www.mdpi.com/2313-4321/3/1/1',
  },
  {
    imageUrl: '/tax.png',
    title: '9% of all plastic has been recycled, 12% burned, 79% sticks around.',
    description: 'Read the paper.',
    link: 'https://www.science.org/doi/10.1126/sciadv.1700782',
  },
  {
    imageUrl: '/water-pollution.png',
    title: '8 million tons of plastic leak into the ocean annually.',
    description:
      'You might have heard the oceans are full of plastic, but how full exactly? Around 8 million metric tonnes go into the oceans each year, according to the first rigorous global estimate published in Science today. continue reading....',
    link: 'https://theconversation.com/eight-million-tonnes-of-plastic-are-going-into-the-ocean-each-year-37521',
  },
  {
    imageUrl: '/microplastics.png',
    title: 'Microplastics .',
    description: 'Read the paper.',
    link: 'http://www.gesamp.org/publications/reports-and-studies-no-90',
  },
  {
    imageUrl: '/garbage.png',
    title: 'Side effects of plastic additives.',
    description: 'Read the paper.',
    link: 'https://www.semanticscholar.org/paper/Plastics-and-health-risks.-Halden/82adcc3ffad768c844482d3df16a5d63d4272816?p2df',
  },
  {
    imageUrl: '/plastic.png',
    title: 'Micro plastic travels up the food chain.',
    description:
      'Looks like it’s plastic for lunch. For the first time, plankton have been caught on camera munching on tiny pieces of plastic. continue reading....',
    link: 'https://www.newscientist.com/article/dn27849-plankton-snacking-on-plastic-caught-on-camera-for-the-first-time/',
  },
  {
    imageUrl: '/microplastics.png',
    title: 'Plastic air.',
    description: 'Read the paper.',
    link: 'https://www.pnas.org/content/118/16/e2020719118',
  },
  {
    imageUrl: '/icon (N)-29.png',
    title: 'Adults and babies have phthalates in their blood.',
    description: 'Read the paper.',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2873014/',
  },
];

export default function ReferencesPage() {
  return (
    <Page title="References" description="">
      <Wrapper>
        <ScrollAnimation animateIn="fadeIn">
          <SectionTitle>Check out this quick introduction</SectionTitle>
        </ScrollAnimation>
        <VideoWrapper>
          <ScrollAnimation delay={200} animateIn="zoomIn">
            <YoutubeVideo url="https://www.youtube.com/watch?v=RS7IzU2VJIQ" />
          </ScrollAnimation>
        </VideoWrapper>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <SectionTitle>Papers and research articles</SectionTitle>
        </ScrollAnimation>
        <CustomAutofitGrid>
          {REFERENCES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const VideoWrapper = styled.div`
  padding: 0 15rem 0 15rem;

  ${media('<=tablet')} {
    padding: 0;
    margin: 2rem;
  }
`;
