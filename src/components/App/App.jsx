import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global.js';
import defaultTheme from '../../assets/styles/themes/default.js';

import { Container } from './styles.js';

import Header from '../Header/Header.jsx';
import Routes from '../../Routes.jsx';
import { ToastContainer } from '../Toast/ToastContainer/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
