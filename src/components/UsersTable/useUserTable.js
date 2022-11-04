import {useState} from 'react';

function useUsersTable(usersData) {
  const [userDetails, setUserDetails] = useState({
    'isVisible': false,
    'details': {},
  });

  function showUserDetails(userId) {
    setUserDetails({
      'isVisible': true,
      'details': usersData.find(userData => userData.id === userId),
    });
  }

  function hideUserDetails() {
    setUserDetails({
      ...userDetails,
      'isVisible': false,
    });
  }

  return {
    userDetails,
    showUserDetails,
    hideUserDetails,
  };
}

export default useUsersTable;
