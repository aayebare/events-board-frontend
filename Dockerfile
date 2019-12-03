
FROM  node:10.15.0

# set the deafult working directory
WORKDIR /eventsboard

# copy package.json or pa
COPY package*.json ./


RUN npm install
RUN npm install -g @angular/cli@7.3.1

# copy all files to the image
COPY  . /eventsboard

#Expose port
EXPOSE 4200

#start app
CMD npm start --host 0.0.0.0
