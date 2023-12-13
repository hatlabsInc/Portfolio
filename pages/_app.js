import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {

  return (
    <div>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </div>
  );
};

export default App;
