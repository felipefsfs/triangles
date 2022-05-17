#!/bin/bash
source ~/.bashrc
cd /triangles
nvm use --lts
npm run prod > /tmp/tlog 2>&1 &