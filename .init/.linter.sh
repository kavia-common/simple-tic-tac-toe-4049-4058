#!/bin/bash
cd /tmp/kavia/workspace/code-generation/simple-tic-tac-toe-4049-4058/tic_tac_toe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

