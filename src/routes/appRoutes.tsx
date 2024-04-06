import HomePage from "../components/pages/home/HomePage";
import { RouteType } from "./config";

import DashboardIndex from "../components/pages/bookings/DashboardIndex";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import BookIcon from "@mui/icons-material/Book";

import AllCustomersPage from "../components/pages/allCustomers/AllCustomersPage";
import BookingPageLayout from "../components/pages/bookings/BookingPageLayout";
import NewEnquiryPage from "../components/pages/bookings/newEnquiry/NewEnquiryPage";
import CurrentBookingPage from "../components/pages/bookings/currentBooking/CurrentBookingPage";
import BookingHistoryPage from "../components/pages/bookings/bookingHistory/BookingHistoryPage";
import WorkspacesPage from "../components/pages/workspaces/Workspace";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/all-customers",
    element: <AllCustomersPage />,
    state: "allcustomers",
    sidebarProps: {
      displayText: "All Customers",
      icon: <SupervisedUserCircleIcon />,
    },
  },
  {
    path: "/bookings",
    element: <BookingPageLayout />,
    state: "boookings",
    sidebarProps: {
      displayText: "Bookings",
      icon: <BookIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "bookings.index",
      },
      // {
      //   path: "/bookings/new-enquiry",
      //   element: <NewEnquiryPage />,
      //   state: "bookings.newenquiry",
      //   sidebarProps: {
      //     displayText: "New Enquiry",
      //   },
      // },
      {
        path: "/bookings/current-booking",
        element: <CurrentBookingPage />,
        state: "bookings.currentbooking",
        sidebarProps: {
          displayText: "Current Booking",
        },
      },
      {
        path: "/bookings/booking-history",
        element: <BookingHistoryPage />,
        state: "bookings.history",
        sidebarProps: {
          displayText: "Booking History",
        },
      },
    ],
  },

  {
    path: "/workspaces",
    element: <WorkspacesPage />,
    state: "workspaces",
    sidebarProps: {
      displayText: "All Plots",
      icon: <WorkspacePremiumIcon />,
    },
  },
  {
    path: "/bookings/booking-history",
    element: <BookingHistoryPage />,
    state: "bookings.history",
    sidebarProps: {
      displayText: "All Admins",
      icon: <SupervisedUserCircleIcon />,
    },
  },
];

export default appRoutes;
