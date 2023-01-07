import Head from 'next/head';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/styles.scss';
import { Manrope } from '@next/font/google';
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const scroller = useSmoothScroll();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        html {
          --ff: ${manrope.style.fontFamily};
          font-family: ${manrope.style.fontFamily};
        }
      `}
      </style>

      <Header />

      <div id="viewport">
        <div id="content">
          <Component {...pageProps} />
          <div style={{ height: '592px' }} />
        </div>
      </div>

      <Footer light />
    </>
  )
}
