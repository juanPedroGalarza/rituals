import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home';
import Play from './pages/Play';
import Help from './pages/Help';
import { useSelector } from 'react-redux';
import darkTheme from "./features/theme/darkTheme";
import lightTheme from "./features/theme/lightTheme";
import { Theme, ThemeProvider } from '@mui/material';
import { StoreInterface } from './features/store';
import { ThemeState } from './features/theme/themeSlice';

type Themes = {
  [K: string]: Theme
};

const themes: Themes = {
  dark: darkTheme,
  light: lightTheme,
};

function App() {

  const { themeName } =
    useSelector<StoreInterface, ThemeState>(state => state.theme);

  return (
    <ThemeProvider theme={themes[themeName]}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jugar' element={<Play />} />
            <Route path='/ayuda' element={<Help />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
