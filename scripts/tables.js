const { db } = require('@vercel/postgres');


//Initialize database tables
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id_user UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        country VARCHAR(100) NULL,
        password TEXT NOT NULL,
        nickname VARCHAR(100) NOT NULL UNIQUE,
        birthday DATE NULL,
        gender VARCHAR(100) NULL
      );
    `;
    console.log(`Created "users" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedFriendships(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS friendships (
        id_user UUID references users (id_user) ON DELETE CASCADE,
        id_friend UUID references users (id_user) ON DELETE CASCADE,
        status VARCHAR(10) CHECK (status IN ('pending', 'accepted', 'blocked')),
        PRIMARY KEY (id_user, id_friend)
      );  
    `;
    console.log(`Created "friendships" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error  seeding friendships:', error);
    throw error;
  }
}

async function seedPost(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS post (
        id_post SERIAL  PRIMARY KEY,
        id_user UUID references users (id_user) ON DELETE CASCADE,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log(`Created "post" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding post:', error);
    throw error;
  }
}

async function seedComments(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS comments (
        id_comments SERIAL PRIMARY KEY,
        id_post SERIAL references post (id_post) ON DELETE CASCADE,
        id_user UUID references users (id_user) ON DELETE CASCADE,
        content TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
      );
    `;

    console.log(`Created "comments" table`);
    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding comment:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedFriendships(client);
  await seedPost(client);
  await seedComments(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
