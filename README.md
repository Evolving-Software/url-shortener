<!-- @format -->

<p align="center">
  <a href="" rel="noopener">

<img width=200px height=200px src="https://i.imgur.com/oREkHSw.jpg" alt="Project logo">

</a>

</p>

<h3 align="center">NodeJS URL Shortener</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/RileySeaburg/url-shortener.svg)](https://github.com/RileySeaburg/url-shortener/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/RileySeaburg/url-shortener.svg)](https://github.com/RileySeaburg/url-shortener/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">This is a basic NodeJs url shortener.
    <br> 
    So you don't have to keep using bitly
    <br>
    Also because Branding...
</p>

## 📝 Table of Contents

- [About](#about)
- [License](#license)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project was built from a [Traversy Media](https://www.youtube.com/watch?v=Z57566JBaZQ) turtorial on youtube. It is a part of my portfolio but you are free to use it for you purposes as well.

## License <a name ="License"></a>

This project is MIT Licensed.

<p align="center" >

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</p>

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Here's what you need to get started

Runtime

```
Nodejs V8+
```

Database

```
MongoDB Atlas
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Create a database on [MongoDB Atlas](mongodb.com)

```
Create a connection string
```

Clone the repository

```
git clone https://github.com/RileySeaburg/url-shortener.git
```

Navigate to cloned project

```
cd url-shortener
```

Replace baseUrl with your localhost url & mongoUri with your mongoDB connection string.

```
vi config/default.json
```

Save file

```
:wq
```

Run Server

```
npm start
```

## 🔧 Running the tests <a name = "tests"></a>

This is just the backend so the best bet is to test with postman.

### Test the urlshortener

Call the api and enter your url to shorten.

```
POST http://baseUrl/api/url/shorten
Content-Type: application/json

{
    "longUrl": "insert link here."
}
```

### Test New Url

After you create the url it should be available to test.

```
Navigate to "shortUrl"
```

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@rileyseaburg](https://github.com/rileyseaburg) - Project Author

See also the list of [contributors](https://github.com/RileySeaburg/url-shortener/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Original Code [Traversy Media](https://github.com/bradtraversy)
