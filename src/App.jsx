import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./component/Banner";
import Features from "./component/Features";
import Header from "./component/Header";
import Court from "./component/Court";
import PromotionalCard from "./component/PromotionalCard";
import CourtsOnSale from "./component/CourtsOnSale";
import Banner2 from "./component/Banner2";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Shop from "./component/Shop";
import CourtDetail from "./component/CourtDetail";
import Payment from "./component/Payment";
import Headerv2 from "./managerpages/Headerv2";
import SideBar from "./managerpages/Sidebar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Order from "./managerpages/ManagementOrder";
import ManagementSlot from "./managerpages/ManagementSlot";
import ManagementStaff from "./managerpages/ManagementStaff";
import Sidebarv2 from "./staffpages/Sidebarv2";
import UserCheckIn from "./staffpages/UserCheckin";
import SideBarv3 from "./adminpages/Sidebarv3";
import ManagementUser from "./adminpages/ManagementUser";
import ApproveCourt from "./adminpages/ApproveCourt";
import CourtManagement from "./managerpages/CourtManagement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCourt from "./managerpages/CreateCourt";
import EditCourt from "./managerpages/EditCourt";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <Features />
              <Court />
              <Banner2 />
              <CourtsOnSale />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Header />
              <Shop />
              <Footer />
            </>
          }
        />
        <Route
          path="/court-detail/:id"
          element={
            <>
              <Header />
              <CourtDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />
        <Route
          path="/manager/orders"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <Order />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/courts"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <CourtManagement />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/courts/new"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <CreateCourt />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/courts/:id"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <EditCourt />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/slots"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <ManagementSlot />
              </div>
            </div>
          }
        />
        <Route
          path="/manager/staff"
          element={
            <div className="flex">
              <SideBar />
              <div className="flex-1">
                <Headerv2 />
                <ManagementStaff />
              </div>
            </div>
          }
        />
        <Route
          path="/staff/check-in"
          element={
            <div className="flex">
              <Sidebarv2 />
              <div className="flex-1">
                <Headerv2 />
                <UserCheckIn />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/users"
          element={
            <div className="flex">
              <SideBarv3 />
              <div className="flex-1">
                <Headerv2 />
                <ManagementUser />
              </div>
            </div>
          }
        />
        <Route
          path="/admin/requests"
          element={
            <div className="flex">
              <SideBarv3 />
              <div className="flex-1">
                <Headerv2 />
                <ApproveCourt />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
