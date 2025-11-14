import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { restaurantTheme } from './theme/restaurantTheme';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    <ThemeProvider theme={restaurantTheme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
        fontFamily: 'Roboto, sans-serif'
      }}>
        <MainScreen />
      </Box>
    </ThemeProvider>
  );
}

export default App;
