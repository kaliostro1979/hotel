import Home from "../pages/Home";
import Hostel from "../pages/Hostel";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Tours from "../pages/Tours";
import Stories from "../pages/Stories";
import UpcomingProjects from "../pages/UpcomingProjects";

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
