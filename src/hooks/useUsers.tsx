import { useEffect, useRef, useState } from "react";
import { ReqResponseList, User } from "../interfaces/reqResponse.interfaces";
import { reqResponseAPI } from "../api/reqResponse";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    return () => {
      loadUsers();
    };
  }, []);

  const loadUsers = async () => {
    const resp = await reqResponseAPI.get<ReqResponseList>("/users", {
      params: { page: pageRef.current },
    });

    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert("Not data");
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadUsers();
  };

  const prevPage = () => {
    const currentPage = pageRef.current;
    if (currentPage > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

  return {
    users,
    nextPage,
    prevPage,
  };
};
