# Get latest version of node
FROM node:latest

# Copy package.json and install dependencies
COPY ./package.json /home/app/package.json
WORKDIR /home/app/
RUN npm install

# Copy the rest of the App
COPY ./ /home/app/

EXPOSE 3000