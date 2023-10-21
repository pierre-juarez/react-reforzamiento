import { User } from "../interfaces/reqResponse.interfaces";
import { useUsers } from "../hooks/useUsers";

export const UsersWithHook = () => {
  const { users, prevPage, nextPage } = useUsers();

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
      <h3>Users with Hook:</h3>
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
      <button className="btn btn-primary" onClick={prevPage}>
        Anterior
      </button>
      <button className="btn btn-primary" onClick={nextPage}>
        Siguiente
      </button>
    </>
  );
};
