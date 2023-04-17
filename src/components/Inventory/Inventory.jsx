import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Inventory = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h3>Inventory page {user && <span>{user.displayName}</span>} </h3>
        </div>
    );
};

export default Inventory;