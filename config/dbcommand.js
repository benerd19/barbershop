// dbCommands.js
const { Command } = require('commander')
const fs = require('fs')
const path = require('path')
const mysql = require('mysql2')
require('dotenv').config({
    path: path.resolve('../.env'),
})

const program = new Command()

// Настройка подключения к базе данных
const pool = mysql
    .createPool({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        multipleStatements: true,
    })
    .promise()

async function executeSQLFile(filePath) {
    try {
        const connection = await pool.getConnection()
        const sqlCommands = fs.readFileSync(filePath, 'utf-8')
        await connection.query(sqlCommands)
        console.log('SQL-скрипт успешно выполнен')
        connection.release()
    } catch (error) {
        console.error('Ошибка при выполнении SQL-скрипта:', error)
    } finally {
        pool.end()
    }
}

// Команда для выполнения SQL-файла
program
    .command('run-sql <file>')
    .description('Выполнить SQL-скрипт из файла')
    .action((file) => {
        const filePath = path.join(__dirname, file)
        executeSQLFile(filePath)
    })

program.parse(process.argv)
