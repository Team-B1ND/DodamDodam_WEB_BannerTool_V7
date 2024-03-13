import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { MyMemberResponse } from "../../types/Member/member.type";
import MemberRepositoryImpl from "../../repositories/MemberRepository/MemberRepositoryImpl";
import { QUERY_KEYS } from "../QueryKey";

export const useGetMyMemberQuery = (
  options?: UseQueryOptions<
    MyMemberResponse,
    AxiosError,
    MyMemberResponse,
    string
  >
): UseQueryResult<MyMemberResponse, AxiosError> =>
  useQuery(QUERY_KEYS.member.getMy, () => MemberRepositoryImpl.getMyMember(), {
    ...options,
  });
