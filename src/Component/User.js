const User = (props) => {
  const { user } = props;

  return (
    <div className="users">
      <h3>Name : {user.name}</h3>
      <h3>User : {user.username}</h3>
      <h3>Email : {user.email} </h3>
    </div>
  );
};

export default User;
