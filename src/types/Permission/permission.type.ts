export interface Permission {
  id: 0;
  member: {
    id: string;
    name: string;
    email: string;
    role: RoleTypes; //ACTIVE, DEACTIVATED
    status: StatusTypes; //STUDENT, TEACHER, ADMIN, PARENT
    joinDate: string;
    profileImage: string;
  };
  permission: string;
}

export type StatusTypes = "STUDENT" | "TEACHER" | "ADMIN" | "PARENT";

export type RoleTypes = "ACTIVE" | "DEACTIVATED";

export interface PermissionResponse {
  data: Permission[];
}
