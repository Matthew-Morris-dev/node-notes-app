FROM node:lts-alpine3.12
WORKDIR /usr/src/app

#install dependencies
COPY ./src/package*.json ./
RUN npm install

#move app source
COPY ./src .
#Expose port the app will work on
# EXPOSE 3000

#start command
CMD [ "node", "app.js" ]

#docker run command in order to launch container with this image
#docker run -it --name notes -v ${PWD}/data:/usr/src/app/data dffiant/notes-app /bin/sh  <-PowerShell
#docker run -it --name notes -v %cd%/data:/usr/src/app/data dffiant/notes-app /bin/sh  <-cmd