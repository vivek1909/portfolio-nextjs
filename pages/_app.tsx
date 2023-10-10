import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp;
