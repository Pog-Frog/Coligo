import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Box } from "@mui/material";
import AuthHOC from "../components/withAuth";


const Layout: React.FC = () => {

  const AuthenticatedLayout = AuthHOC(() => (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <Box style={{ flexGrow: 1 }}>
        <Navbar />
        <Box sx={{ padding: "1.25rem" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  ))

  return <AuthenticatedLayout />
}


export default Layout;
