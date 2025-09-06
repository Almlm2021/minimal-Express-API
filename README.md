<h1 align="center">Welcome to  minimal-Express-API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Minimal Node.js + Express API that fetches JSONPlaceholder posts and returns two grouped views (long/short) with simple, robust error handling.

### ✨ [Demo](https://github.com/Almlm2021/minimal-Express-API)

## Install

```sh
npm install
```

## Usage

```sh
npm i express axios
```

## Run tests

```sh
# expect: ["long","short"]
curl -s http://localhost:3000/api/posts | jq 'keys'

# long: body length desc
curl -s http://localhost:3000/api/posts \
| jq '.long[:3] | map({title, bodyLen: (.body | length)})'

# short: title length desc
curl -s http://localhost:3000/api/posts \
| jq '.short[:3] | map({title, titleLen: (.title | length)})'

```

## Author

👤 **Alma Allaimouni**

* Website: https://github.com/Almlm2021
* Github: [@Almlm2021](https://github.com/Almlm2021)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/alma-allaimouni\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/alma-allaimouni\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_