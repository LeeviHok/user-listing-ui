import {useEffect} from 'react';
import {useState} from 'react';

import uniqueId from 'lodash/uniqueId';

import validateUser from './validators';

function useApp() {
  const [usersData, setUsersData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({
    'name': undefined,
    'username': undefined,
    'email': undefined,
    'phone': undefined,
    'website': undefined,
  });

  // Fetch users data on first component render.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {setUsersData(data)});
  }, []);

  // We need ID's for new users, but there isn't backend to provide those.
  // So 'uniqueId()' from lodash will be used to generate incremental ID's.
  // However, ID's from 1 to 10 are already reserved for the existing data.
  // This function is an ugly hack to generate ID's past 10, so that any ID
  // generated after this is actually unique for this set of data.
  useEffect(() => {
    while(parseInt(uniqueId()) <= 10);
  }, []);

  // 'validateUser()' mocks backend validation,
  // check 'validators.js' for more info.
  function createUser(userData) {
    if (validateUser(usersData, userData, setValidationErrors)) {
      setUsersData(prevState => ([
        ...prevState,
        {
          ...userData,
          'id': parseInt(uniqueId()),
        }
      ]));
    }
  }

  function deleteUser(userId) {
    const newUsersData = usersData.filter(userData => (
      userData.id !== userId
    ));
    setUsersData(newUsersData);
  }

  function clearValidationError(formField) {
    setValidationErrors(prevState => ({
      ...prevState,
      [formField]: undefined,
    }));
  }

  return {
    usersData,
    validationErrors,
    createUser,
    deleteUser,
    clearValidationError,
  };
}

export default useApp;
