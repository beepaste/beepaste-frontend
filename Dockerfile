FROM node:9

COPY app beepaste/app
COPY internals beepaste/internals
COPY package.json beepaste/package.json
COPY server beepaste/server
COPY static beepaste/static
COPY views beepaste/views

WORKDIR beepaste/

# ENV NODE_ENV production

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:prod"]