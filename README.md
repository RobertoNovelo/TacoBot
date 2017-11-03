# Example Food Selling Bot Serverless Project

## Getting started: 

* Create a copy of ```serverless.example.env.yml``` and call it ```serverless.env.yml``` (Make sure you don't either track this file nor lose it sinc it is your private project configuration).

* Install dependencies:

```npm install```

* Initialize the server:

```npm run start```

or 

```npm run debug``` for a verbose output.

* Open your browser @ ```http://localhost:9000/hello``` and you should be able to see the word ```world```.

Read ```./serverless.yml``` for more details.

## Deploying to AWS

* Create an [AWS Account](https://aws.amazon.com) and install the [AWS CLI](https://aws.amazon.com/cli/)

* Get your [account credentials](https://console.aws.amazon.com/iam/home?region=us-east-1#/security_credential)

* Configure your credentials:

```aws config```

* Create a role and configure it on your current environment on the ```PROVIDER_ROLE_ARN``` key and run

```npm run deploy```

* Configure your DNS settings for a custom domain on API Gateway (optional).
