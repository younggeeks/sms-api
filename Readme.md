[![CircleCI](https://circleci.com/gh/younggeeks/sms-api/tree/master.svg?style=svg)](https://circleci.com/gh/younggeeks/sms-api/tree/master)  [![Test Coverage](https://api.codeclimate.com/v1/badges/188c219a401b8aa05ecf/test_coverage)](https://codeclimate.com/github/younggeeks/sms-api/test_coverage)

SMS Management API 
LIVE VERSION https://aqueous-hollows-73651.herokuapp.com

## Table of Contents

- [Features ](#features)
- [Installation ](#Installation)
- [Technologies Used](#available-scripts)
 
## Features

    Contacts Management
    Messages Management

## Documentation
### THIS API IS FULLY DOCUMENTED USING  
![Swagger Documentation](https://swagger.io/swagger/media/assets/images/swagger_logo.svg)


## Installation
```
$ git clone git@github.com:younggeeks/sms-api.git
$ cd sms-api
```
## Install Dependencies:
```
$ yarn 
```
## Set Environment Variables:
```
DB_USERNAME="sample"
DB_DIALECT="postgres"
TEST_DB_NAME="sms_api_test"
PORT=9000
DB_NAME="sms-api"
```

## Seed the DB:
```
$ npx sequelize db:migrate

$ npx sequelize db:seed:all

$ yarn start
```
To see your application, access this url in your browser: http://localhost:9000

### Tech used to make this:

 * [NODEJS ](https://nodejs.org/) NODEJS
 * [Express ](https://expressjs.com/) Expressjs
