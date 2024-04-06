import { faravin } from '../data/apiUrls';
import { AllUsersType, UserType } from '../models/user';

///////////////////////////////////////////////////////////////////////
const getData = async <DataType>(apiUrl: string): Promise<DataType> => {
  const response = await fetch(apiUrl);
  if (!response.ok || response.status >= 400) {
    throw new Error(response.statusText);
  }

  const resJSON = await response.json();

  return resJSON as Promise<DataType>;
};

///////////////////////////////////////////////////////////////////////
export const getAllUsers = async (): Promise<UserType[]> => {
  const allUsers = await getData<AllUsersType>(faravin.usersAll);

  //   if response is ok return users
  if (allUsers.code === '200') {
    return allUsers.userList;
  } else {
    throw new Error(allUsers.message);
  }
};
