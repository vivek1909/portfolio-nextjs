import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}

export default MyApp;
