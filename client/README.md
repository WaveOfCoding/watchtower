# Watchtower

This is a [Next.js](https://nextjs.org/) project for managing watch-list.

## Getting Started

Install project dependencies:

```sh
yarn install
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

### Docker image

**Notes**:

- [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/#use-multi-stage-builds)

To build docker image run:

```sh
docker build -t watchtower-app:latest .

# Use only a specific build stage
docker build --target deps -t watchtower-app:latest .
```

To run docker container run:

```sh
docker run -p 3000:3000 watchtower-app
```

_Info_:

- There is an issue with `nextjs` environment variables passing to docker container. There is no convinient way to provide env variables to nextjs docker container during build/runtime (e.g. set secrets via env variables). The best way to do that is to split build process into two steps: 1. build nextjs application with env's via `.env.*` (or `process.env.*`) files on CI; 2. create docker image using output from previous step.

## Notes

- [nextjs buildtime vs runtime env variables](https://www.saltycrane.com/blog/2021/04/buildtime-vs-runtime-environment-variables-nextjs-docker/)
