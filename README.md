# Watchtower

Application for managing watch-list

## Docker environment

To run environment use following command:

```sh
docker-compose up -d
```

It will up followint services:

```sh
- postgres:5432
- adminer:8082
- swagger-ui:8088
- watchtower-app:8080 # FrontEnd application
```

Application will be available on [http://localhost:8080](http://localhost:8080)
