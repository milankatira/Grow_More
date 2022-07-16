import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import Sidebar from '../components/common/layout/Sidebar';
const Navbar = dynamic(() => import('../components/common/layout/Navbar'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
    
      <Navbar />
      {/* <div className='flex bg-gray-300'> */}
      {/* <Sidebar /> */}
      <Component {...pageProps} />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default MyApp;
