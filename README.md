# evolving-urls

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This is a url shortener for creating branded url's to share on social media.

This project will allow a user to sign in and add url's that they want to share.

As a bonus this application also keeps basic analytics on the url's and will eventually allow you to integrate with an ad platform (Like Facebook) and allow you to create custom audiences from those who click your url.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

#### [NodeJS](https://nodejs.org/en/)

```
https://nodejs.org/en/download/
```

#### [PNPM](https://pnpm.io/")

```
npm install -g pnpm
```



### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
git clone https://github.com/evolvingsoftware/evolving-urls
```

Navigate to directory

```
cd evolving-urls
```

Install Dependencies

```
yarn
```

#### Add Environment Variables

Add Mongo Connection URI

```
mongoURI="mongodb://127.0.0.1/url-shortener"
```
Update BaseURL
```
baseUrl="shorter.mydomain.com"
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.
