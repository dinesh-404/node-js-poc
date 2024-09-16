import { Sequelize } from 'sequelize';

// Initialize Sequelize
const sequelize : Sequelize= new Sequelize('mydb', 'root', 'root', {
    dialect: 'mysql'
});

// Define the connectDb function with TypeScript type annotations
export async function connectDb(): Promise<void> {
    try {
        await sequelize.authenticate();
        sequelize.sync().then(() => {
            console.log('Tables synced successfully!');
         }).catch((error) => {
            console.error('Unable to create table : ', error);
         });
        console.log('Connected');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

// Exporting the sequelize instance and connectDb function
export { sequelize };
