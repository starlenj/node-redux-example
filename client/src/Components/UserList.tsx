import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserList, SetSelectUser } from '../Redux/Action/User';
import { ApplicationState } from '../Redux/Reducers/index';
import { Modal, Button } from "react-bootstrap";
import UserDetails from './UserDetails';
function UserList() {
  const Users: any = useSelector<ApplicationState>((state) => state.userReducer);
  const dispatch = useDispatch();
  const [UserModal, setUserModal] = useState(false)
  const [SelectUser, setSelectUser] = useState("")
  useEffect(() => {
    dispatch(GetUserList());
  }, []);
  const SelectItemUser = (item: any) => {
    setUserModal(true);
    dispatch(SetSelectUser(item));
  }
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {Users.Users.default !== undefined && Users.Users.default.map((item: any) => (
            <tr onClick={(): void => SelectItemUser(item)}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>


          ))}
          <Modal
            show={UserModal}
            onHide={() => setUserModal(false)}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>User Detail Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserDetails />
            </Modal.Body>
          </Modal>
        </tbody>

      </table>
    </div >
  );
}

export default UserList;
