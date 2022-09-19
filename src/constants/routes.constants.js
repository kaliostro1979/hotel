import Home from "../pages/Home";
import Hostel from "../pages/Hostel";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Tours from "../pages/Tours";
import Stories from "../pages/Stories";
import UpcomingProjects from "../pages/UpcomingProjects";
import Page from "../pages/dynamic-page/Page";

export const ROUTES = [
    {
        path: '/',
        to: '/',
        name: 'HOME',
        element: <Home/>,
    },
    {
        path: '/hostel',
        to: '/hostel',
        name: 'HOSTEL',
        element: <Hostel/>,
    },
    {
        path: '/about',
        to: '/about',
        name: 'ABOUT',
        element: <About/>,
    },
    {
        path: '/booking',
        to: '/booking',
        name: 'BOOKING',
        element: <Booking/>,
    },
    {
        path: '/tours',
        to: '/tours',
        name: 'TOURS',
        element: <Tours/>,
    },
    {
        path: '/stories',
        to: '/stories',
        name: 'STORIES',
        element: <Stories/>,
    },
    {
        path: '/upcoming-projects',
        to: '/upcoming-projects',
        name: 'UPCOMING PROJECTS',
        element: <UpcomingProjects/>,
    },
]

export const FOOTER_ROUTES = [
    {
        path: 'about',
        to: '/',
        name: 'ABOUT',
        element: <About/>,
    },
    {
        path: 'privacy-and-cookie',
        to: '/',
        name: 'Privacy and cookie',
        element: <Page path={"privacy-and-cookie"}/>,
    },
    {
        path: 'kantar-policies',
        to: '/',
        name: 'Kantar Policies',
        element: <Page path={'kantar-policies'}/>,
    },
    {
        path: 'terms-and-conditions',
        to: '/',
        name: 'Terms and Conditions',
        element: <Page path={'terms-and-conditions'}/>,
    },
]
