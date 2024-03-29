import styled from 'styled-components';

export const StyledMainHeader = styled.section`
  min-height: 34rem;
  padding: 5.875rem 0 6.75rem 0;

  background-image: url(src/assets/background.svg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
`;

export const HeroSection = styled.div`
  display: flex;
  gap: 3.5rem;

  align-items: center;
`;

export const TitleContainer = styled.div`
  h1 {
    line-height: 3.9rem;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 4.125rem;
  }
`;

export const AdvantageSection = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 18.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme['gray-700']};

    > span {
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['white']};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    &:nth-of-type(1) > span {
      background-color: ${(props) => props.theme['yellow-700']};
    }

    &:nth-of-type(2) > span {
      background-color: ${(props) => props.theme['gray-700']};
    }

    &:nth-of-type(3) > span {
      background-color: ${(props) => props.theme['yellow-300']};
    }

    &:nth-of-type(4) > span {
      background-color: ${(props) => props.theme['purple-300']};
    }
  }
`;

export const ImageContainer = styled.div`
  > img {
    max-width: 29rem;
  }
`;
