# Watchtower

Application for managing watch-list

## Docker environment

To run environment use following command:

```sh
# To run environment
docker-compose up -d

# Use `--build` flag to build images before run
docker-compose up -d --build
```

It will up following services:

```sh
- postgres:5432
- adminer:8082
- swagger-ui:8088
- watchtower-app:8080 # FrontEnd application
- watchtower-service:8001 # BackEnd application
```

Application will be available on [http://localhost:8080](http://localhost:8080)
