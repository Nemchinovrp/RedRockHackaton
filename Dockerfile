FROM node:alpine
LABEL maintainer="nemchinovrp@gmail.com"
WORKDIR /usr/app/front
EXPOSE 4200
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
