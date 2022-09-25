// Components
// Компоненты
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

// SCSS/SASS
import '../Public/Styles/Components/Footer.scss';
import '../Public/Styles/Components/Header.scss';
import '../Public/Styles/Components/Layout.scss';

// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Перцы</title>
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    );
}

export default MyApp;