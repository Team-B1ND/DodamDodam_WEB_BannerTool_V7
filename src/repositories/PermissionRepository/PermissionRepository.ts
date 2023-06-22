import { PermissionResponse } from "../../types/Permission/permission.type";

export interface PermissionRepository {
  getMyPermission(): Promise<PermissionResponse>;
}
