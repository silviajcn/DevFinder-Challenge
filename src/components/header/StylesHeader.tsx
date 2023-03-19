import styled from 'styled-components';

export const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeThemeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeBtn};
  cursor: pointer;
  img {
    margin-left: 1.6rem;
  }
`;