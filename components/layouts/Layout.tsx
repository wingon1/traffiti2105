import React, { ReactNode ,Fragment} from 'react'
import Head from 'next/head'
import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";
import GlobalStyle from "@components/layouts/GlobalStyle";

type Props = {
    children?: ReactNode
    title?: string
};

const LayoutStyles = {
    Wrapper : {      margin: 0,      padding: 0,     width: '100%',    height: '100%',    background : '#fff'   },
    Container : {    display : 'flex',   justifyContent : 'center'  }
}

const Layout = ({ children, title = 'default title' }: Props) => (
    <Fragment>
        <GlobalStyle/>
        <Head>
            <title>Senshig | {title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div style={LayoutStyles.Wrapper}>
            <Header/>
            <section style={LayoutStyles.Container}>
                <main>
                    {children}
                </main>
            </section>
            <Footer/>
        </div>
    </Fragment>
)

export default Layout