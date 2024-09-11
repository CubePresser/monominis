import React, { useState, useEffect, useCallback } from 'react';
import { User } from '../types';
import { getUsers } from '../data/api';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    const result = await getUsers();
    setUsers(result.data);
  }, []);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <ul style={{ listStyle: 'none' }}>
      {
        users.map(user => (
          <li key={user.id}>
            <h1>{user.username}</h1>
            <h2>{user.firstName} {user.lastName}</h2>
          </li>
        ))
      }
    </ul>
  )
};

export default Dashboard;