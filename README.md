# Watchtower

Application for managing watch-list

## Docker environment

### Prerequisites

Add following records into your `hosts` file:

```
127.0.0.1 watchtower.local
127.0.0.1 docs.watchtower.local
127.0.0.1 adminer.watchtower.local
127.0.0.1 api.watchtower.local
127.0.0.1 app.watchtower.local
```

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

Application will be available on [http://localhost:8085](http://localhost:8085) or [http://app.watchtower.local](http://app.watchtower.local)
