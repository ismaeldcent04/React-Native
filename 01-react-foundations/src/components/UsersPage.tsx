import axios from "axios";
import React, { useEffect, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";
import { UserRow } from "./UserRow";

const loadUsers = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users?page=1&per_page=5",
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    loadUsers().then((users) => setUsers(users));
  }, []);

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <UserRow key={user.id} user={user} />;
          })}
        </tbody>
      </table>
    </>
  );
};
