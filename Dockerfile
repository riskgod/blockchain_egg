FROM node:7.6.0

# create app folder and switch to it
RUN mkdir /app
WORKDIR /app/

RUN npm install -g nodemon --quiet

# Set instructions on build. Keep package.json separate to preserve image cache
ADD package.json /app/

RUN npm install --quiet

ADD . /app/

CMD ["npm", "run", "dev"]