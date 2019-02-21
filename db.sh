#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER samjunior;
    CREATE DATABASE sms-api-test;
    GRANT ALL PRIVILEGES ON DATABASE sms-api-test TO samjunior;
EOSQL