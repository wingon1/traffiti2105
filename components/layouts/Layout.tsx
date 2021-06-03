import React, {ReactNode, Fragment,useEffect } from 'react'
import Head from 'next/head'
import Header from "@components/layouts/Header";
import ButtonNav from "@components/layouts/ButtonNav";
import Footer from "@components/layouts/Footer";
import GlobalStyle from "@components/layouts/GlobalStyle";

type Props = {
    children?: ReactNode
    title?: string
};

const LayoutStyles = {
    Wrapper : {      margin: 0,      padding: 0,     width: '100%',    height: '100%',    background : '#fff'   },
    Container : {    display : 'flex',   justifyContent : 'center', marginTop:'35px' }
}

const Layout = ({ children, title = '이어둠을빨간코로' }: Props) =>
{
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);
    return (
        <Fragment>
            <GlobalStyle/>
            <Head>
                <title>{process.env.REACT_APP_TITLE} | {title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <div style={LayoutStyles.Wrapper}>
                <Header/>
                <section style={LayoutStyles.Container}>
                    <main>
                        {children}
                    </main>
                </section>
                <Footer/>
                <ButtonNav />
            </div>
        </Fragment>
    )
}
export default Layout;