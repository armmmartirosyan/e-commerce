import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import requireAuth from "HOCs/require-auth";
import Loading from "components/loading";
import withAdminPanelContext from "HOCs/with-admin-panel-context";
import AdminPanelInput from "./components/admin-panel-input";
import { ADMIN_PANEL_FIELDS } from "constants/admin-panel-constants";
import AdminPanelAction from "./components/admin-panel-action";

const wrapperSx = {
  width: "500px",
  margin: "100px auto 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
};

const AdminPanel = memo(function ({ isLoading }: any) {
  return (
    <Box sx={wrapperSx}>
      <Typography align="center" variant="h6">
        Add new product
      </Typography>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
          width: "100%",
        }}
      >
        {ADMIN_PANEL_FIELDS.map((filed) => (
          <AdminPanelInput
            key={filed.keyName}
            label={filed.label}
            keyName={filed.keyName}
            validator={filed.validator}
          />
        ))}

        <AdminPanelAction />
      </form>

      {isLoading && <Loading />}
    </Box>
  );
});

const withAdminPanelContextComponent = withAdminPanelContext(AdminPanel);

export default requireAuth(withAdminPanelContextComponent);
