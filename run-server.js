#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Set environment variables
process.env.OBSIDIAN_API_KEY = 'dfc99df49c61a3f372256164522cdf50b3ff6197a4bc7ed4edf0cb0d08099741';
process.env.OBSIDIAN_HOST = '127.0.0.1';
process.env.OBSIDIAN_PORT = '27124';

// Get the directory of this script
const scriptDir = __dirname;

// Spawn the MCP server using uv
const server = spawn('uv', ['run', 'mcp-obsidian'], {
  cwd: scriptDir,
  stdio: 'inherit',
  env: process.env,
  shell: true
});

// Handle server exit
server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

server.on('exit', (code) => {
  process.exit(code);
});