import NextApp from "next/app";
import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ContextProviders } from "context/ContextProviders";
import { ComponentsProvider } from "@reactioncommerce/components-context";
import components from "custom/componentsContext";
import theme from "custom/reactionTheme";
// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import "swiper/modules/thumbs/thumbs.min.css";
// import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/swiper-bundle.css";
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import "../styles/global.css";
import "../assets/fonts/style.css";
  import "react-toastify/dist/ReactToastify.css";
import { StripeWrapper } from "components/StripeCard";

export default class App extends NextApp {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, ...rest } = this.props;

    return (
      <StripeWrapper>
        <ContextProviders pageProps={pageProps}>
          <ComponentsProvider value={components}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...rest} {...pageProps} />
            </MuiThemeProvider>
          </ComponentsProvider>
        </ContextProviders>
      </StripeWrapper>
    );
  }
}
