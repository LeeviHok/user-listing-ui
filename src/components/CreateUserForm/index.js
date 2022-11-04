import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import useCreateUserForm from './useCreateUserForm';

function CreateUserForm({createUser, validationErrors, clearValidationError}) {
  const {
    formData,
    formFields,
    onChange,
    onSubmit,
  } = useCreateUserForm(createUser, clearValidationError);

  return (
    <Form
      onSubmit={onSubmit}
      className="w-75 border border-2 rounded p-4"
    >
      {formFields.map(field => (
        <FloatingLabel
          key={field.id}
          controlId={field.id}
          label={field.label}
          className="mb-3"
        >
          <Form.Control
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={onChange}
            required={field.required}
            isInvalid={validationErrors[field.name] ? true : false}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors[field.name]}
          </Form.Control.Feedback>
        </FloatingLabel>
      ))}

      <Button type="submit">Create user</Button>
    </Form>
  );
}

export default CreateUserForm;
