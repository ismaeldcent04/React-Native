import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";
import axios from "axios";

const loadUsers = async (
  page: number = 1,
  per: number = 5
): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
          per_page: per,
        },
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

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current).then((users) => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current > 0) {
      currentPageRef.current--;
      const users = await loadUsers(currentPageRef.current);
      setUsers(users);
    }
  };
  return {
    users,
    nextPage,
    prevPage,
  };
};
