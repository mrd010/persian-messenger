import { getAllUsers } from './fetchers';

export const isUserMember = async (phoneNumber: string) => {
  // get all users
  const users = await getAllUsers();

  // all usernames
  const userNames = users.map((user) => user.username);
  // user is currently a member
  const userExists = userNames.includes(phoneNumber);

  return userExists;
};
