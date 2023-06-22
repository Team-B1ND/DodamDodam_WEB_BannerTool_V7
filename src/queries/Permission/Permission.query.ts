import { UseQueryOptions, useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import PermissionRepositoryImpl from "../../repositories/PermissionRepository/PermissionRepositoryImpl";
import { PermissionResponse } from "../../types/Permission/permission.type";
import { AxiosError } from "axios";

export const useGetMyPermissionQuery = (
  options: UseQueryOptions<
    PermissionResponse,
    AxiosError,
    PermissionResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.permission.myPermission,
    () => PermissionRepositoryImpl.getMyPermission(),
    options
  );
