//GPT ATTEMPT

import "../styles/globals.css";
import { useState, useEffect } from "react";
import { FlameLoader } from "../components/FlameLoader";

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
    <>
      {loading ? <FlameLoader mode="fullpage" /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
