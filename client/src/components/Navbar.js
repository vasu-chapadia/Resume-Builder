import { FaSignInAlt, FaUser } from "react-icons/fa";
// FaSignOutAlt;
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#151515" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#ffffff" }}>
          Resume Builder
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div>
            <Button
              variant="contained"
              size="medium"
              sx={{
                margin: 2,
                borderRadius: "10px",
                backgroundColor: "#B4A5A5",
                padding: 1,
              }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/login"
              >
                <span style={{ margin: "5px" }}>
                  <FaSignInAlt />
                </span>
                Log In
              </Link>
            </Button>
            <Button
              variant="contained"
              size="medium"
              sx={{
                margin: 2,
                borderRadius: "10px",
                backgroundColor: "#B4A5A5",
                padding: 1,
              }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/register"
              >
                <span style={{ margin: "5px" }}>
                  <FaUser />
                </span>
                Register
              </Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
