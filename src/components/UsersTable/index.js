import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {EyeFill} from "react-bootstrap-icons";
import {TrashFill} from "react-bootstrap-icons";

import UserDetailsModal from '../UserDetailsModal';
import useUsersTable from './useUserTable';

function UsersTable({usersData, deleteUser}) {
  const {
    userDetails,
    showUserDetails,
    hideUserDetails,
  } = useUsersTable(usersData);

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {usersData.map((userData) => (
            <tr key={userData.id}>
              <td>{userData.name}</td>
              <td>{userData.username}</td>
              <td>{userData.email}</td>
              <td>
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => showUserDetails(userData.id)}
                >
                  <EyeFill size={17} />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteUser(userData.id)}
                >
                  <TrashFill size={17} />
                </Button>
              </td>
            </tr>
          ))}
          {usersData.length ? null : (
            <tr>
              <td colSpan="100" className="text-center">
                <span className="d-inline-block mt-3">No users</span>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <UserDetailsModal
        isVisible={userDetails.isVisible}
        userDetails={userDetails.details}
        handleClose={hideUserDetails}
      />
    </>
  );
}

export default UsersTable;
