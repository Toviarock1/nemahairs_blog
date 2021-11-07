import React from 'react'
import Footer from '../../views/Footer/Footer';
import Header from '../../views/Header/Header';

const Layout = (props) => {
    return (
        <>
            <Header searchText={props.searchText} setSearchText={props.setSearchText} />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
