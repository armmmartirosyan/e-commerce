import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import {
  currentUserDataSelector,
  currentUserErrorSelector,
  currentUserLoadingSelector,
} from "store/auth/auth-selectors";
import Loading from "components/loading";
import { PAGES, SETTINGS } from "constants/header-constants";
import HeaderMenuItem from "components/header/components/menu-item";
import MenuButton from "./components/menu-button";
import SettingsItem from "./components/setting-item";
import { account } from "providers/account-provider";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const currentUserLoading = useSelector(currentUserLoadingSelector);
  const currentUserData = useSelector(currentUserDataSelector);
  const currentUserEror = useSelector(currentUserErrorSelector);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    if (currentUserEror) {
      toast.error(currentUserEror);
      account.signOut();
    }
  }, [currentUserEror]);

  return (
    <>
      {!currentUserLoading && !currentUserEror && currentUserData && (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/product-list"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                E-Commerce
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {PAGES.map((page) => (
                    <HeaderMenuItem
                      {...page}
                      key={page.text}
                      extraAction={handleCloseNavMenu}
                    />
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/product-list"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                E-Commerce
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {PAGES.map((page) => (
                  <MenuButton
                    {...page}
                    key={page.text}
                    extraAction={handleCloseNavMenu}
                  />
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <img
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                    src={currentUserData.imageUrl}
                    alt="Avatar"
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {SETTINGS.map((setting) => (
                    <SettingsItem
                      {...setting}
                      key={setting.text}
                      extraFunction={handleCloseUserMenu}
                    />
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      {currentUserLoading && <Loading />}
    </>
  );
}
