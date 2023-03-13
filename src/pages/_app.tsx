import "@/styles/globals.css";
import "../components/Bottom/style.css";
import "../components/User/style.css";
import "../components/Cookies/style.css";
import "../components/Menu/style.css";
import "../components/Button/style.css";
import "../components/Footer/style.css";
import "../components/Logo/style.css";
import "../components/SKils/style.css";
import "../features/Home/style.css";
import "../features/Home/Portfolio/style.css";
import "../pages/contact/style.css";
import "../pages/about/style.css";
import "../pages/cv/style.css";
import "../pages/blog/style.css";
import "../pages/blog/[id]/style.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
// import '../i18n'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Menu />
      <Component {...pageProps} />

      <Footer />
    </Provider>
  );
}
