export type Validator = (arg: any) => boolean;

export type ProfileContextInputItem = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export type AdminPaneContextInputItem = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  VoidFunction | undefined
];

export type ProfileWrapperContextValue = {
  firstName: ProfileContextInputItem;
  lastName: ProfileContextInputItem;
  email: ProfileContextInputItem;
  imageUrl: ProfileContextInputItem;
  phone: ProfileContextInputItem;
  action: [() => Promise<void>, boolean];
};

export type AdminPanelContextValue = {
  title: AdminPaneContextInputItem;
  description: AdminPaneContextInputItem;
  imageUrl: AdminPaneContextInputItem;
  count: AdminPaneContextInputItem;
  price: AdminPaneContextInputItem;
  action: [() => Promise<void>, boolean];
};
