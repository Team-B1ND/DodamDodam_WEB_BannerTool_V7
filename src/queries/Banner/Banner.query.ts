import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import {
  BannerApply,
  BannerResponse,
  BannersResponse,
} from "../../types/Banner/banner.type";
import BannerRepositoryImpl from "../../repositories/BannerRepository/BannerRepositoryImpl";
import {
  DeleteBannerByIdParam,
  GetBannerByIdParam,
  PatchActiveBannersParam,
  PatchBannerByIdParam,
  PatchDeativateByIdParam,
} from "../../repositories/BannerRepository/BannerRepository";
import { QUERY_KEYS } from "../QueryKey";

export const useGetActiveBannersQuery = (
  options?: UseQueryOptions<
    BannersResponse,
    AxiosError,
    BannersResponse,
    string
  >
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.banner.getActive,
    () => BannerRepositoryImpl.getActiveBanners(),
    options
  );

export const useUploadBannerMutation = () => {
  const mutation = useMutation((bannerData: BannerApply) =>
    BannerRepositoryImpl.postBanners(bannerData)
  );
  return mutation;
};

export const useGetBannersQuery = (
  options?: UseQueryOptions<
    BannersResponse,
    AxiosError,
    BannersResponse,
    string
  >
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.banner.get,
    () => BannerRepositoryImpl.getBanners(),
    options
  );

export const useActiveBannersMutation = () => {
  const mutation = useMutation(({ id }: PatchActiveBannersParam) =>
    BannerRepositoryImpl.patchActiveBanners({ id })
  );
  return mutation;
};

export const useDeativeBannersMutation = () => {
  const mutation = useMutation(({ id }: PatchDeativateByIdParam) =>
    BannerRepositoryImpl.patchDeativateById({ id })
  );
  return mutation;
};

export const useDeleteBannerMutation = () => {
  const mutation = useMutation(({ id }: DeleteBannerByIdParam) =>
    BannerRepositoryImpl.deleteBannerById({ id })
  );
  return mutation;
};

export const usePatchBannerMutation = () => {
  const mutation = useMutation(({ id, data }: PatchBannerByIdParam) =>
    BannerRepositoryImpl.patchBanenrById({ id, data })
  );
  return mutation;
};

export const useGetBannerByIdQuery = (
  { id }: GetBannerByIdParam,
  options?: UseQueryOptions<
    BannerResponse,
    AxiosError,
    BannerResponse,
    (string | number)[]
  >
) =>
  useQuery(
    [QUERY_KEYS.banner.getById, id],
    () => BannerRepositoryImpl.getBannerById({ id }),
    {
      ...options,
    }
  );
