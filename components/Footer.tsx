import NextLink from 'next/link';
import NextImage from 'next/image';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'About', href: '/about' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Product',
    items: [{ title: 'Adigide', href: '/adigide' }],
  },
  {
    title: 'Knowledge',
    items: [
      { title: 'References', href: '/references' },
      { title: 'Faq', href: '/faq' },
    ],
  },
];

export default function Footer() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <FooterWrapper>
        <Container>
          <ListContainer>
            {footerItems.map((singleItem) => (
              <FooterList key={singleItem.title} {...singleItem} />
            ))}
          </ListContainer>
          <BottomBar>
            <ShareBar>
              <NextLink href="" passHref>
                <a>
                  <NextImage src={'/icon (N)-06(1).png'} height="70" width="70" />
                </a>
              </NextLink>

              <NextLink href="" passHref>
                <a>
                  <NextImage src={'/icon (N)-04(1).png'} height="70" width="70" />
                </a>
              </NextLink>

              <NextLink href="" passHref>
                <a>
                  <NextImage src={'/icon (N)-05(1).png'} height="70" width="70" />
                </a>
              </NextLink>
            </ShareBar>
            <Copyright>&copy; Copyright {new Date().getFullYear()}</Copyright>
          </BottomBar>
        </Container>
      </FooterWrapper>
    </ScrollAnimation>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondBackground));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
