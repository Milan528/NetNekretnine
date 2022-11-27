const QUERY = {
  SELECT_USER_BY_EMAIL: "SELECT * FROM user WHERE email = ?",
  CREATE_USER:
    "INSERT INTO user(username, email, password, role, joined) VALUES (?, ?, ?, ?, ?)",
};

export default QUERY;
