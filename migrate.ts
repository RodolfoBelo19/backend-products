import { createConnection } from 'typeorm';

async function runMigrations() {
  const connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'homol',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  });

  await connection.runMigrations();

  await connection.close();
}

runMigrations()
  .then(() => {
    console.log('Migrations executed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error executing migrations:', error);
    process.exit(1);
  });
