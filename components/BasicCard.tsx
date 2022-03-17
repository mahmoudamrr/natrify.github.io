import NextImage from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function BasicCard({ title, description, imageUrl, link }: BasicCardProps) {
  return (
    <Card>
      <ScrollAnimation delay={300} animateIn="fadeIn">
        <NextImage src={imageUrl} width={128} height={128} alt={title} />
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Title href={link} target="_blank">
          {title}
        </Title>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Description href={link} target="_blank">
          {description}
        </Description>
      </ScrollAnimation>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.a`
  font-weight: bold;
  color: inherit;
  text-decoration: none;
`;
const Description = styled.a`
  opacity: 0.6;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;
