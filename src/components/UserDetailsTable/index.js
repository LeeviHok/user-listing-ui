import Table from 'react-bootstrap/Table';

function UserDetailsTable({userDetails}) {
  const headers = {
    'id': 'User ID',
    'name': 'Name',
    'username': 'Username',
    'email': 'Email',
    'phone': 'Phone number',
    'website': 'Website',
  };

  return (
    <Table>
      <tbody>
        {Object.keys(headers).map(header => (
          <tr key={header}>
            <th>{headers[header]}</th>
            <td>{userDetails[header]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserDetailsTable;
