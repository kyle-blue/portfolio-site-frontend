FROM node:22.13.1-bullseye-slim AS build
WORKDIR /app/
COPY ./ /app/
RUN rm -Rf node_modules
RUN rm -Rf build
RUN corepack enable
RUN yarn
RUN yarn build

FROM nginx:1.25.2-bookworm AS release
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
