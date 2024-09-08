import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navigation from '../components/navigation'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto mt-8 font-serif">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
