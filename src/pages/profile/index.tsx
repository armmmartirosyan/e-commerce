import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import requireAuth from "HOCs/require-auth";
import SharedInput from "pages/profile/components/profile-input";
import ProfileAction from "./components/profile-action";
import withProfileContext from "HOCs/with-profile-context";
import ProfileAvatar from "./components/profile-avatar";
import { PROFILE_PAGE_FIELDS } from "constants/profile-constants";

const wrapperSx = {
  width: "500px",
  margin: "70px auto 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
};

const Profile = memo(function () {
  return (
    <Box sx={wrapperSx}>
      <Typography align="center" variant="h6">
        Profile
      </Typography>
      <ProfileAvatar />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
          width: "100%",
        }}
      >
        {PROFILE_PAGE_FIELDS.map((field) => (
          <SharedInput
            key={field.keyName}
            label={field.label}
            keyName={field.keyName}
            validator={field.validator}
          />
        ))}

        <ProfileAction />
      </form>
    </Box>
  );
});

const withProfileContextComponent = withProfileContext(Profile);

export default requireAuth(withProfileContextComponent);
