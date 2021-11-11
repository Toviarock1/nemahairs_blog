import React, { useEffect } from 'react'
import Footer from '../../views/Footer/Footer';
import Header from '../../views/Header/Header';
import ReactGa from 'react-ga';

const Layout = (props) => {
    
    useEffect(() => {
        ReactGa.initialize('UA-212602997-1');
        ReactGa.pageview(window.location.pathname + window.location.search);
    })

   
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
