#!/bin/bash
export RDS_HOSTNAME=YOUR_HOSTNAME
export RDS_USERNAME=YOUR_USERNAME
export RDS_PASSWORD=YOUR_PASSWORD
export RDS_DB_NAME=YOUR_DATABASE
export HANDLER_ADDRESS=localhost
export API_ADDRESS=ADDRESS_FOR_API_SERVER
export PORT=80
export HANDLER_PORT=6000

node tweetHandler/server.js
