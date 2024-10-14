import path from 'path';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import * as query from '../Models/UserModel.js';

dotenv.config();

// Validate email, nome, and senha using regex
var nameRegex = /^[a-zA-Z\s]+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w]).{8,}$/;

//Criando função para retornar todos os usuários e enviando para a rota
export function getAllUsers(req, res) {
  query.getAllUsers((err, users) => {
    console.log(users)
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuários' });
    } else {
      return res.status(200).send(users);
    }
  });
}

// Register User
export function registerUserGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/register.html'));
}


export function registerUserPOST(req, res) {
  let { name, email, password } = req.body;

  // Validate the data
  if (!nameRegex.test(name)) {
    console.log('Invalid name format');
    return res.status(400).json({ message: 'Invalid name format \nThe name must contain only letters and spaces'});
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  } else if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: 'Invalid password format\nThe password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character' });
  }

  // Check if the user already exists
  query.getUserByEmail(email, async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error when searching for user by email' });
    }
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    password = await bcrypt.hash(password, 10);

    query.createUser({ name, email, password }, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Database error when trying to register user' });
      }
      return res.status(200).json({ message: 'User created successfully' });
    });

  });
}
// felipe
// felipe@felipe.com
// Aa123!@#


export function logUserGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/login.html'));
}

export function logUserPOST(req, res) {
  const { email, password } = req.body;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  query.getUserByEmail(email, async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error when searching for user by email' });
    }
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const hash = await bcrypt.hash(password, 10);
    const validPassword = await bcrypt.compare(password, hash);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const tokens = {
      acess_t: jwt.sign({ userId: user.id }, process.env.ACESS_TOKEN_KEY, { expiresIn: 10 }),
      refresh_t: jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_KEY, { expiresIn: 180 })
      // acess_t: jwt.sign({ userId: user.id }, process.env.ACESS_TOKEN_KEY, { expiresIn: 500 }),
      // refresh_t: jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_KEY, { expiresIn: 3600 })
    }

    res.clearCookie();
    res.cookie('acess_t', tokens.acess_t);
    res.cookie('refresh_t', tokens.refresh_t);

    return res.status(200).json({ message: 'Logged in successfully' });
  });

}

// Authenticated functions
export function feedGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/feed.html'));
}

export function feedGETContent(req, res) {
  query.getAllPosts((err, posts) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching posts' });
    } else {
      return res.status(200).json(posts);
    }
  });
}

export function getPageMyPosts (req, res) {
  res.sendFile(path.resolve('./src/Views/myPosts.html'));
}

export function getAllPostsByUserId(req, res) {
  // console.log(`in function "getAllPostsOfTheUser": ${req.userId}`);
  query.getAllPostsByUserId(req.userId, (err, posts) => {
    // console.log(posts)
    if (err) {
      return res.status(500).json({ message: 'Error fetching posts' });
    } else {
      return res.status(200).send(posts);
    }
  });
}

export function getPostById (req, res) {
  const { id } = req.params;

  query.getPostById(id, (err, post) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching post' });
    } else if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    if (post.userId !== req.userId) {
      return res.status(403).json({ message: 'You do not have permission to view this post in this route' });
    }
    
    return res.status(200).json(post);
  });
}

export function updatePostPUT(req, res) {
  const { title, content } = req.body;
  const { id } = req.params;

  query.getPostById(id, (err, post) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching post' });
    } else if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    } else if (post.userId !== req.userId) {
      return res.status(403).json({ message: 'You do not have permission to edit this post' });
    }
    
    query.updatePost({ id, title, content }, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error updating post' });
      } else {
        return res.status(200).json({message: 'Post updated successfully'});
      }
    });

  });

}

export function deletePostDELETE (req, res) {
  const { id } = req.params;

  query.getPostById(id, (err, post) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching post' });
    } else if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    } else if (post.userId !== req.userId) {
      return res.status(403).json({ message: 'You do not have permission to delete this post' });
    }

    query.deletePost(id, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error deleting post' });
      } else {
        return res.status(200).json({message: 'Post deleted successfully'});
      }
    });

  });
}

export function addPostGETP(req, res) {
  res.sendFile(path.resolve('./src/Views/addPost.html'));
}

export function addPostPOST(req, res) {
  const { title, content } = req.body;
  const userId = req.userId;

  if (!title || !content || !userId) {
    console.log(`${title}\n${content}\n${userId}`);
    return res.status(400).json({ message: 'Missing data' });
  }

  query.createPost({ title, content, userId }, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error creating post' });
    } else {
      return res.status(200).json({message: 'Post created successfully'});
    }
  });
}