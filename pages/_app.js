import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import ReactGA from 'react-ga';

const App = ({ Component, pageProps }) => {
  ReactGA.initialize(G-GWW24SZZ3T);
  return (
    <div>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </div>
  );
};

export default App;
