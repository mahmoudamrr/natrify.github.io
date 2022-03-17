import styled from 'styled-components';
import NextImage from 'next/image';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <div style={{ display: 'flex' }}>
        <div style={{position: "relative", bottom: "1.2rem"}}>
          <NextImage src={'/icon (N)-23.png'} width="50" height="50" />
        </div>
        <p>Email: support@myawesomesaas.com</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
