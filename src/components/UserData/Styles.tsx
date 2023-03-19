import styled from 'styled-components';

// LINKS AREA COMPONENT ------------------------------------------------------------------
export const ContainerLinksArea = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  a {
    display: grid;
    grid-template-columns: 20px 1fr;
  }
  svg {
    width: 20px;
  }
  &.unavailable {
    opacity: 0.5;
  }
`;

export const Data = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  word-break: break-all;
  margin-left: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

// START AREA COMPONENT ------------------------------------------------------------------
export const ContainerStartArea = styled.ul`
  border-radius: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  padding: 1.8rem 1.4rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.8rem 3.2rem;
  }
`;

export const DataStartArea = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
  span {
    font-size: 1.3rem;
    line-height: 1.6rem;
    text-align: center;
    color: ${(props) => props.theme.colors.textNorm};
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  strong {
    font-weight: bold;
    font-size: 1.8em;
    line-height: 2.4rem;
    margin-top: 0.8rem;
 
    color: ${(props) => props.theme.colors.textBolded};
    @media (min-width: 768px) {
      margin-top: 1rem;
      font-size: 2.4rem;
    }
  }
`;


// TOP AREA COMPONENT ------------------------------------------------------------------
export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Bio = styled.p`
  color: ${(props) => props.theme.colors.textNorm};
  font-size: 1.4rem;
  line-height: 192%;
  margin: 3.3rem 0 2.3rem;
  @media (min-width: 768px) {
    margin: 2.2rem 0 3.3rem;
    font-size: 1.6rem;
  }
`;

export const Pfp = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-right: 2rem;
  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
    margin-right: 4.1rem;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

export const SideInfo = styled.div`
  display: grid;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    span:last-of-type {
      grid-column: 2 /3;
      grid-row: 1 /2;
      justify-self: end;
    }
  }
`;

export const Name = styled.strong`
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.textBolded};
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

export const Username = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  margin-bottom: 0.6rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

export const JoinedAt = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;


// TOP AREA COMPONENT ------------------------------------------------------------------
export const ContainerUserData = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;
  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }
  @media (min-width: 900px) {
    padding: 4.8rem;
  }
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PfpUserData = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

export const SideArea = styled.div`
  width: 100%;
`;