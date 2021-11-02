import React from 'react'
import Footer from '../../views/Footer/Footer';
import Header from '../../views/Header/Header';

const Layout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
