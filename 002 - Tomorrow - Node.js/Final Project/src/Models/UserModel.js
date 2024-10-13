import db from '../Config/db.js';

export function getAllUsers(callback) {
  db.query('SELECT * FROM user', (err, results) => {
    callback(err, results);
  });
}

export function getAllPostsByUserId(userId, callback) {
  const query = `
      SELECT post.id, post.title, post.content
      FROM post
      JOIN user ON post.userId = user.id
      WHERE user.id = ?;
  `;

  db.query(query, [userId], (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
  });
}

export function getUserByEmail(email, callback) {
  const query = 'SELECT * FROM user WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results[0]);
  });
}

export function createUser(user, callback) {
  const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [user.name, user.email, user.password], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}