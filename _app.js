// _app.js
import { AuthProvider } from './src/context/authContext'
// import './styles/globals.css';  // Adjust the path based on your project structure

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
