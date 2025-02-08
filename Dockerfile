FROM node:20.7.0-bullseye-slim AS build
WORKDIR /app/
COPY ./ /app/
RUN apt-get update
RUN apt-get install -y openssh-client git
# download public key for github.com
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN rm -Rf node_modules
RUN rm -Rf build
RUN --mount=type=ssh yarn
RUN yarn build

FROM nginx:1.25.2-bookworm AS release
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
