import { AppProps } from "next/app";
import { FC } from "react";
import "@assets/main.css";
import { UIProvider } from "@components/ui/context";
import 'keen-slider/keen-slider.min.css';

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps}: AppProps & { Component: { Layout: FC }}) {
    const Layout = Component.Layout ?? Noop;
    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    )
}

export default MyApp;

// 13 Tailwind & PostCSS - 003 Generate PostCss output