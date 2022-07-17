import '../styles/globals.css';
import '../styles/Home.module.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import Sidebar from '../components/common/layout/Sidebar';
import { AuthProvider } from '../context/store/Auth';
const Navbar = dynamic(() => import('../components/common/layout/Navbar'), {
  ssr: false,
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <AuthProvider>
      <Navbar />
     
        <Component {...pageProps} />
      </AuthProvider>

    </ThemeProvider>
  );
}

export default MyApp;
