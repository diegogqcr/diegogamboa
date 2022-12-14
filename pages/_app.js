import Navbar from '../components/Navbar';

import '../styles/globals.css';
// import style from './404/page404.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
