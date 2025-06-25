// Test file with potential security issues for CodeQL scanning
// This is intentionally insecure code for testing purposes

const express = require('express');
const app = express();

// Potential XSS vulnerability
app.get('/user', (req, res) => {
    const name = req.query.name;
    res.send(`<h1>Hello ${name}</h1>`); // Unescaped user input
});

// Potential SQL injection vulnerability  
const mysql = require('mysql');
function getUserData(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`; // String concatenation
    return mysql.query(query);
}

// Hardcoded credentials (for testing secret scanning)
const API_KEY = "sk-1234567890abcdef1234567890abcdef"; // Fake API key
const PASSWORD = "admin123"; // Hardcoded password

// Insecure random number generation
function generateToken() {
    return Math.random().toString(36); // Weak randomness
}

// Command injection vulnerability
const { exec } = require('child_process');
function processFile(filename) {
    exec(`cat ${filename}`, (error, stdout, stderr) => { // Unvalidated input
        console.log(stdout);
    });
}

// Path traversal vulnerability
const fs = require('fs');
function readFile(path) {
    return fs.readFileSync(path); // No path validation
}

console.log('Insecure test file loaded - for security scanning tests only');

module.exports = { getUserData, generateToken, processFile, readFile };
