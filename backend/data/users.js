import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Joe Biden',
    email: 'biden@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Donald Trump',
    email: 'trump@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
