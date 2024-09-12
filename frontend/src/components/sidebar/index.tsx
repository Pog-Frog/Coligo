import { Paper, Box, Typography, IconButton } from "@mui/material";
import { IoMdExit } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import {
  FaCalendarDays,
  FaBook,
  FaGraduationCap,
  FaBullhorn,
  FaHourglassHalf,
} from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/auth.reducer";
import { useTranslation } from "react-i18next";
import MenuOption from "./menu-option";
import { NavLink } from "react-router-dom";
import { useState } from "react"; // Import useState for sidebar toggle
import MenuIcon from "@mui/icons-material/Menu"; // Icon for sidebar toggle

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for toggle

  const menuOptions = [
    {
      id: 1,
      name: "dashboard",
      url: "/dashboard",
      icon: <IoHome className="icon" />,
    },
    {
      id: 2,
      name: "schedule",
      url: "/schedule",
      icon: <FaCalendarDays className="icon" />,
    },
    {
      id: 3,
      name: "courses",
      url: "/courses",
      icon: <FaBook className="icon" />,
    },
    {
      id: 4,
      name: "gradebook",
      url: "/gradebook",
      icon: <FaGraduationCap className="icon" />,
    },
    {
      id: 5,
      name: "performance",
      url: "/performance",
      icon: <BsGraphUpArrow className="icon" />,
    },
    {
      id: 6,
      name: "announcements",
      url: "/announcements",
      icon: <FaBullhorn className="icon" />,
    },
    {
      id: 7,
      name: "quizzes",
      url: "/quizzes",
      icon: <FaHourglassHalf className="icon" />,
    },
  ];

  const [t] = useTranslation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  

  return (
    <>
      <IconButton
        sx={{ display: { xs: "block", md: "none" }, position: "absolute", top: 10, left: 10, zIndex: 1300 }}
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <MenuIcon sx={{ color: "grey" }} />
      </IconButton>
      
      <Paper
        elevation={3}
        square
        sx={{
          minHeight: "100vh",
          width: { xs: isSidebarOpen ? "16rem" : 0, md: "16rem" },
          backgroundImage: "linear-gradient(to bottom, #12567b, #398593)",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease-in-out",
          overflow: "hidden",
          position: { xs: "fixed", md: "static" },
          zIndex: { xs: 1200, md: 1 },
        }}
      >
        <Box marginX="auto" paddingY="2.5rem">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "600",
              color: "white",
              letterSpacing: "0.025em",
              display: { xs: "none", md: "block" },
            }}
          >
            Coligo
          </Typography>
        </Box>

        <nav style={{ marginTop: "0.5rem" }}>
          <ul>
            {menuOptions.map((option) => (
              <MenuOption key={option.name} link={option} />
            ))}
            <li>
              <NavLink to="/" onClick={logoutHandler} className="sidebar-link">
                <IoMdExit className="icon" />{" "}
                <Box>
                  {t("logout")}
                </Box>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Paper>
    </>
  );
};

export default Sidebar;
