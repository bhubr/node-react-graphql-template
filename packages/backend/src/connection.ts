import { createConnection } from 'typeorm';

let connection;
export async function getConnection() {
  connection = await createConnection();
  return connection;
}