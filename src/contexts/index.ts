import { createContext } from "react";
import {
  ProfileWrapperContextValue,
  AdminPanelContextValue,
} from "types/shared-types";

export const ProfileContext = createContext({} as ProfileWrapperContextValue);

export const AdminPanelContext = createContext({} as AdminPanelContextValue);
