#! /bn/bash
set -v
git pull&&npm i&&npm run build
pm2 delete ""
pm2 start npm --name "" -- start