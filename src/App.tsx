import { ThemeContextProvider } from './context/ThemeContext';
import { TopArea } from './components/TopArea';
import { Container } from './styles';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Container>
			  <TopArea />
      </Container>
    </ThemeContextProvider>
  )
};