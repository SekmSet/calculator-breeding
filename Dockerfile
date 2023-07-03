FROM node:20-alpine as builder

WORKDIR /app
COPY . /app

RUN npm install -g next@latest
RUN npm install

CMD ["next", "build"]

FROM node:20-alpine as starter

WORKDIR /app

RUN npm install -g next@latest

COPY --from=builder /app/public /app/public
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000
ENV PORT 3000

CMD ["next", "start"]