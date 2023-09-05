import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { FlameLoader } from '../components/FlameLoader';
import { LangContextProvider } from '../contexts/LangContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ThemeContextProvider>
      <LangContextProvider>
        {loading ? (
          <FlameLoader mode="fullpage" />
        ) : (
          <Component {...pageProps} />
        )}
      </LangContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
