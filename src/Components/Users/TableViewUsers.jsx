import Table from "react-bootstrap/Table";

import useUserContext from "../../Hooks/useUserContext";
import TableViewUser from "../User/TableViewUser";
function TableViewUsers() {
  const { users } = useUserContext();

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>User Name</th>
          <th>Email </th>
          <th>Options</th>
        </tr>
      </thead>
      {users.map((user) => (
        <TableViewUser key={user.id} user={user} />
      ))}
    </Table>
  );
}

export default TableViewUsers;
