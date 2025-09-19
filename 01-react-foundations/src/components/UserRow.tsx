import React from "react";
import type { User } from "../interfaces";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { id, avatar, first_name, last_name, email } = user;

  return (
    <tr>
      <td>
        <img src={avatar} />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};
