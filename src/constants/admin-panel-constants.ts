import { validators } from "utils/validators";

export const ADMIN_PANEL_FIELDS = [
  { keyName: "title", label: "Title", validator: undefined },
  { keyName: "description", label: "Description", validator: undefined },
  { keyName: "imageUrl", label: "Image URL", validator: undefined },
  { keyName: "count", label: "Count", validator: validators.allowTypeCount },
  { keyName: "price", label: "Price(AMD)", validator: undefined },
];
