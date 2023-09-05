import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { FlameLoader } from '../components/FlameLoader';
import { LangContextProvider } from '../contexts/LangContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { ModalProvider } from 'react-modal-hook';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2718); // Adjust the delay as needed

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
          <>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 5000,
                style: {
                  fontWeight: 'bold',
                },
              }}
            />
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </>
        )}
      </LangContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
