@echo off
start cmd /k "cd backend && python backend.py"
start cmd /k "cd frontend && npm run dev"
start cmd /k "cd datagraph && yarn run start"