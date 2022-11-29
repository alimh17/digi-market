import React, { useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import DashboardContext from "./context/dashboardContext";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ToastProvider placement="top-right">
      <DashboardContext.Provider value={{ loading, setLoading }}>
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <>
            <Navbar />
            <Main />
          </>
        )}
      </DashboardContext.Provider>
    </ToastProvider>
  );
};

export default Dashboard;
