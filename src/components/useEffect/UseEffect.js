import React, { useState, useEffect } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((json) => setUsers(json));
    });

    return (
        <div>
            {users.map((user) => {
                return <div key={user.id}>{user.name}</div>;
            })}
        </div>
    );
}

export default UsersList;
