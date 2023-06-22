import { customAxios } from "../../lib/Axios/customAxios";
import { PermissionResponse } from "../../types/Permission/permission.type";
import { PermissionRepository } from "./PermissionRepository";

class PermissionRepositoryImpl implements PermissionRepository {
  public async getMyPermission(): Promise<PermissionResponse> {
    const { data } = await customAxios.get("/permission/my");
    return data;
  }
}

export default new PermissionRepositoryImpl();
