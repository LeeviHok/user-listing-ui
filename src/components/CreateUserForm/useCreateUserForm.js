import {useState} from 'react';

function useCreateUserForm(createUser, clearValidationError) {
  const formFields = [
    {
      'id': 'CreateUserForm-name',
      'name': 'name',
      'type': 'text',
      'required': true,
      'label': 'Full name',
      'placeholder': 'Enter name',
    },
    {
      'id': 'CreateUserForm-username',
      'name': 'username',
      'type': 'text',
      'required': true,
      'label': 'Username',
      'placeholder': 'Enter username',
    },
    {
      'id': 'CreateUserForm-email',
      'name': 'email',
      'type': 'email',
      'required': true,
      'label': 'Email address',
      'placeholder': 'Enter email',
    },
    {
      'id': 'CreateUserForm-phone',
      'name': 'phone',
      'type': 'tel',
      'required': true,
      'label': 'Phone number',
      'placeholder': 'Enter phone number',
    },
    {
      'id': 'CreateUserForm-website',
      'name': 'website',
      'type': 'text',
      'required': true,
      'label': 'Website',
      'placeholder': 'Enter website address',
    },
  ];

  // This can create initial state for the 'formData' dynamically, but reduces
  // readability too much in my opinion.
  //
  //const [formData, setFormData] = useState(
  //  formFields.reduce(
  //    (previousValue, currentValue) => Object.assign(
  //      {...previousValue}, {[currentValue['name']]: ''}
  //    ),
  //    {},
  //  )
  //)

  const [formData, setFormData] = useState({
    'name': '',
    'username': '',
    'email': '',
    'phone': '',
    'website': '',
  });

  function onChange(e) {
    const {name, value} = e.target;
    clearValidationError(name);
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    createUser(formData);
  }

  return ({
    formData,
    formFields,
    onChange,
    onSubmit,
  });
}

export default useCreateUserForm;