import React, { Props, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserList } from '../Redux/Action/User';
import { ApplicationState } from '../Redux/Reducers/index';
import { Modal, Button } from "react-bootstrap";
export interface SelectUserProps {
    SelectUser: string[]
}
function UserDetails() {
    const { User }: any = useSelector<ApplicationState>((state) => state.userReducer);

    return (
        <div>

            <div>
                <div className="form-group">
                    <label> Name</label>
                    <input type="text" className="form-control" value={User.name} readOnly />
                </div>
                <div className="form-group">
                    <label> User Name</label>
                    <input type="text" className="form-control" value={User.username} readOnly />
                </div>
                <div className="form-group">
                    <label> Street</label>
                    <input type="text" className="form-control" value={User.address.street} readOnly />
                </div>
                <div className="form-group">
                    <label> Street</label>
                    <input type="text" className="form-control" value={User.address.city} readOnly />
                </div>
            </div>

        </div >
    );
}

export default UserDetails;
