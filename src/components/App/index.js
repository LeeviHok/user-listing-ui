import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CreateUserForm from '../CreateUserForm';
import UsersTable from '../UsersTable';
import useApp from './useApp';

function App() {
  const {
    usersData,
    validationErrors,
    createUser,
    deleteUser,
    clearValidationError,
  } = useApp();

  return (
    <Container>
      <Row className="mt-5">

        <Col>
          <CreateUserForm
            createUser={createUser}
            validationErrors={validationErrors}
            clearValidationError={clearValidationError}
          />
        </Col>

        <Col xs={8}>
          <UsersTable usersData={usersData} deleteUser={deleteUser} />
        </Col>

      </Row>
    </Container>
  );
}

export default App;
