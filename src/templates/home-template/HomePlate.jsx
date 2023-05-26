import React, { Fragment, Suspense} from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
// import CarouselOponent from '/src/components/carousel/Carousel'
// import ListItem from '../../components/listItem/ListItem'
import Footer from '/src/components/footer/Footer'
import Loading from '../../components/loading/Loading'

function HomePlate() {
    return (
        <Fragment>
            <Header/>
            <Suspense fallback={<><Loading/></>}>
                <Outlet />
            </Suspense>
            <Footer/>
        </Fragment>
    )
}

export default HomePlate