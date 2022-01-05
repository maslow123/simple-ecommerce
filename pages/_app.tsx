import { AppProps } from "next/app";
import { FC } from "react";
import "@assets/main.css";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps}: AppProps & { Component: { Layout: FC }}) {
    const Layout = Component.Layout ?? Noop;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;

// 13 Tailwind & PostCSS - 003 Generate PostCss output