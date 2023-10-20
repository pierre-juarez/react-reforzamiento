import { useEffect, useRef, useState } from "react";
import { reqResponseAPI } from "../api/reqResponse";
import { ReqResponseList, User } from "../interfaces/reqResponse.interfaces";

export const Users = () => {
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

    console.log(
      "🚀 ~ file: Users.tsx:20 ~ loadUsers ~ resp.data.data:",
      resp.data.data
    );
    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
      pageRef.current++;
    } else {
      alert("Not data");
    }
  };

  const renderItem = ({ id, last_name, first_name, avatar, email }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: "50%" }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={loadUsers}>
        Siguiente
      </button>
    </>
  );
};
