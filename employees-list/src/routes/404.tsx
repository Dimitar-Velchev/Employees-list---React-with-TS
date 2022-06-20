import { FC } from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundScreen: FC = () => {
  return (
    <Wrapper>
      <FaExclamationTriangle size={100} className="mb-5" />
      <Title className="mb-4">404</Title>
     
    </Wrapper>
  );
};

export default NotFoundScreen;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
`;
