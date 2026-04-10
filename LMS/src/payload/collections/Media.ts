import type { CollectionConfig } from "payload";
import { checkRolePermission } from "../access";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Quản Lý Tập Tin",
    plural: "Quản Lý Tập Tin",
  },
  admin: {
    group: "Hệ thống",
  },
  access: {
    ...checkRolePermission("media"),
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, "../../../media"),
    staticURL: "/media",
  },
};
