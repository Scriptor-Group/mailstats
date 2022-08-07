#!/bin/bash
# install required nodejs
sudo curl -sL https://deb.nodesource.com/setup_16.x | bash -

# install pm2
npm install pm2 -g

# install required npm packages
yarn

# build app
yarn build

# run the app
yarn start