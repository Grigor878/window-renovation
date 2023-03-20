import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import AutoScroll from '../../helpers/autoScroll'
import Footer from '../footer/Footer'
import Loading from "../loading/Loading"

const Layout = () => {
    return (
        <>
            <Header />
            <AutoScroll />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense >
            <Footer />
        </>
    )
}

export default Layout