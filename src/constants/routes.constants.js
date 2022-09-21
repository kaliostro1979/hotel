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
        id: "route-1",
        path: '',
        to: '',
        name: 'HOME',
        element: <Home/>,
    },
    {
        id: "route-2",
        path: '/hostel',
        to: '/hostel',
        name: 'HOSTEL',
        element: <Hostel/>,
    },
    {
        id: "route-3",
        path: '/about',
        to: '/about',
        name: 'ABOUT',
        element: <About/>,
    },
    {
        id: "route-4",
        path: '/booking',
        to: '/booking',
        name: 'BOOKING',
        element: <Booking/>,
    },
    {
        id: "route-5",
        path: '/tours',
        to: '/tours',
        name: 'TOURS',
        element: <Tours/>,
    },
    {
        id: "route-6",
        path: '/stories',
        to: '/stories',
        name: 'STORIES',
        element: <Stories/>,
    },
    {
        id: "route-7",
        path: '/upcoming-projects',
        to: '/upcoming-projects',
        name: 'UPCOMING PROJECTS',
        element: <UpcomingProjects/>,
    },
]

export const FOOTER_ROUTES = [
    {
        id: "fr-1",
        path: 'about',
        to: '/',
        name: 'ABOUT',
        element: <About/>,
        dynamic: false
    },
    {
        id: "fr-2",
        path: 'privacy-and-cookie',
        to: '/',
        name: 'Privacy and cookie',
        element: <Page/>,
        dynamic: true
    },
    {
        id: "fr-3",
        path: 'kantar-policies',
        to: '/',
        name: 'Kantar Policies',
        element: <Page/>,
        dynamic: true
    },
    {
        id: "fr-4",
        path: 'terms-and-conditions',
        to: '/',
        name: 'Terms and Conditions',
        element: <Page/>,
        dynamic: true
    },
]
