FROM node as build
WORKDIR /bb
COPY package.json /bb
COPY package-lock.json /bb
RUN npm install
COPY . /bb
CMD ["npm", "start"]
EXPOSE 3000
