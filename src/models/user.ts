export interface UserType {
  username: string;
  password: string;
  name: string;
  date: string;
}

export interface AllUsersType {
  code: string;
  message: string;
  userList: UserType[];
}
