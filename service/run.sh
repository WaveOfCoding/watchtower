#!/bin/bash

export POSTGRES_NAME=watchtower
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=password
export POSTGRES_HOST=127.0.0.1
export POSTGRES_PORT=5432

python manage.py migrate
python manage.py runserver