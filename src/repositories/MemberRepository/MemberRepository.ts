import { MyMemberResponse } from "../../types/Member/member.type";

export interface MemberRepository {
  getMyMember(): Promise<MyMemberResponse>;
}
