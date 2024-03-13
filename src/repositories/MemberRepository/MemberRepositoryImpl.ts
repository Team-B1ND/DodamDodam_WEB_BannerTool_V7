import { customAxios } from "../../lib/Axios/customAxios";
import { MyMemberResponse } from "../../types/Member/member.type";
import { MemberRepository } from "./MemberRepository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await customAxios.get("/member/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
