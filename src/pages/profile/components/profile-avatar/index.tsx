import { ProfileContext } from "contexts";
import React, { useContext } from "react";

export default function ProfileAvatar() {
  const profileState: any = useContext(ProfileContext);
  const [imageUrl] = profileState.imageUrl;

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Profile picture" width={200} height={150} />
      )}
    </div>
  );
}
