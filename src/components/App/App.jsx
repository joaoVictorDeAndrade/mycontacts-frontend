import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global.js';
import defaultTheme from '../../assets/styles/themes/default.js';

import { Container } from './styles.js';

import Header from '../Header/Header.jsx';
import ContactsList from '../ContactsList/ContactsList.jsx';

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyles />

      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
