const QUERY = {
  SELECT_USER_BY_EMAIL:
    "SELECT id,username, email, password, role, joined FROM user WHERE email = ?",
  CREATE_USER:
    "INSERT INTO user(username, email, password, role, joined) VALUES (?, ?, ?, ?, ?)",
};
// date_format(joined,'%m %d %Y') to change date format in sql select statement
export default QUERY;
