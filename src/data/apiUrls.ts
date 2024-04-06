const FARAVIN_BASE_URL = 'https://farawin.iran.liara.run';

export const faravin = {
  // login page
  usersAll: FARAVIN_BASE_URL + '/api/user',
  userRegister: FARAVIN_BASE_URL + '/api/user',
  userLogin: FARAVIN_BASE_URL + '/api/user/login',

  //   contacts
  contactAdd: FARAVIN_BASE_URL + '/api/contact',
  contactEdit: FARAVIN_BASE_URL + '/api/contact',
  contactDelete: FARAVIN_BASE_URL + '/api/contact',
  contactsAll: FARAVIN_BASE_URL + '/api/contact',

  //   chats
  chatAdd: FARAVIN_BASE_URL + '/api/contact',
  chatEdit: FARAVIN_BASE_URL + '/api/contact',
  chatDelete: FARAVIN_BASE_URL + '/api/contact',
  chatsAll: FARAVIN_BASE_URL + '/api/contact',
  allUserChats: (userName: string) => FARAVIN_BASE_URL + '/api/contact/' + userName,
};
