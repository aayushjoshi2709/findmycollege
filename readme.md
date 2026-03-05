# Find My College

Find my college is a college finding application to find college based on location, college carriculam and entrance exams

# How to setup

To setup this service you will need a postgres database instance and then you need to setup the server and client applications

## Setting up the server

1. To setup and run the server, Navigate to the server folder
2. Create a .env file with the following information

    ```
    DB_URL=<postgres database url>
    DB_USER=<username for the database to access>
    DB_PASS=<password for the database used>
    PORT=<port to run the application>
    KEYS=<secret key for the cookie used>
    ```
3. Then you can either run the docker command to build from docker file
    ```
    docker build  -t findmycollege-server . 
    ```
    or

    Build and run using npm
    ```
    npm run build
    npm run start:prod
    ```


## Setting up the client

1. To setup client, Navigate to the client folder

2. Create a .env file with the following information

    ```
    NODE_ENV=production
    ```
3. Then you can either run the docker command to build from docker file
    ```
    docker build  -t findmycollege-client . 
    ```
    or

    Build and run using npm
    ```
    npm run build
    ```
    Now you have static react files you can serve it using a web server like apache or nginx