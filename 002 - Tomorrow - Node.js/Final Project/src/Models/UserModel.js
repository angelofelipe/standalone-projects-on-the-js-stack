import db from '../Config/db.js';

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

export function getUserByEmail(email, callback) {
  const query = 'SELECT * FROM user WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.length === 0) {
      callback(null, null);
      return;
    }
    callback(null, results[0]);
  });
}

export function getAllUsers(callback) {
  db.query('SELECT * FROM user', (err, results) => {
    callback(err, results);
  });
}

export function createPost (post, callback) {
  const query = 'INSERT INTO post (title, content, userId) VALUES (?, ?, ?)';
  db.query(query, [post.title, post.content, post.userId], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

export function getAllPostsByUserId(userId, callback) {
  // const query = `
  //     SELECT post.id, post.title, post.content
  //     FROM post
  //     JOIN user ON post.userId = user.id
  //     WHERE user.id = ?;
  // `;

  const query = 'SELECT * FROM post WHERE userId = ?';

  db.query(query, [userId], (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
  });
}

export function getAllPosts (callback) {
  const query = 'SELECT * FROM post';
  db.query(query, (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

export function getPostById (id, callback) {
  const query = 'SELECT * FROM post WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.length === 0) {
      callback(null, null);
      return;
    }
    callback(null, results[0]);
  });
}

export function updatePost (post, callback) {
  const query = 'UPDATE post SET title = ?, content = ? WHERE id = ?';
  db.query(query, [post.title, post.content, post.id], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

export function deletePost (id, callback) {
  const query = 'DELETE FROM post WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}