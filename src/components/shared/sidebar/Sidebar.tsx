import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../../assets";
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import appRoutes from "../../../routes/appRoutes";
import SidebarItem from "./sidebarItem/SidebarItem";
import SidebarItemCollapse from "./sidebarItemCollapse/SidebarItemCollapse";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "" }}>
          <Stack
            sx={{ width: "100%", alignItems: "center" }}
            direction="row"
            justifyContent="center"
          >
            {/* <Avatar src={assets.images.logo} /> */}
            <h2 style={{ fontWeight: "800", margin: 0 }}>FIND MY HOUSE</h2>
          </Stack>
        </Toolbar>

        {/* <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ marginY: 1 }}
        >
          <Avatar src={assets.images.logo} />
          <p style={{ marginLeft: "10px", fontWeight: "bold", margin: 0 }}>
            Admin
          </p>
        </Stack> */}

        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
