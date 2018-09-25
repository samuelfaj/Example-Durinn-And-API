<img src="https://github.com/samuelfaj/Durinn/raw/master/icon.png?raw=true" align=left>

# Durinn

A Node.js typed object-oriented programming framework.

![License](https://img.shields.io/github/license/samuelfaj/Durinn.svg) ![Node Version](https://img.shields.io/badge/node-%3E%3D8.10-brightgreen.svg) ![Typescript Ready](https://img.shields.io/badge/typescript%203-ready-blue.svg) ![MySQL Ready](https://img.shields.io/badge/MySQL-ready-ff69b4.svg)

<br clear="all">

## Real-time Analysis

<details>
  <summary><b>Expands a GIF</b> - You write and Durinn analyzes it in real time. </summary>
<p align=center><br><img src="https://user-images.githubusercontent.com/12994414/45913707-46b6ba00-be0e-11e8-9f09-256650335dd4.gif" align=center></p>
</details>

## Querying

<details>
  <summary><b>Expands CODE</b> - It's easy to connect to Mysql and execute your queries, safely!</summary>
  
```javascript

import Durinn from "durinn";

let query = (new Durinn.query())
.table('person')
.where('name','like','Samuel')
.orderBy('name','desc')
.groupBy('name')
.select(function(result, response){
console.log(result, response.rows);
});

query.then(([result, response, error]) => {
console.log(result);
console.log(response);
console.log(error);
});

````
</details>


## Database CRUD in seconds

<details>
  <summary><b>Expands CODE</b> - Extends RelationalObject to build a database connected object in seconds!</summary>

```javascript
import RelationalObject from 'durinn/relational-object';

class Person extends RelationalObject{
    constructor(id: number){
        super(/* Database table */ 'person', /* Primary Key */ {'id': id})
    }
}

// Get data from cache (if was stored previously) or from database

(new Person(1)).data.then((result) => {
    console.log(result);
    /*
        {
          id: 1,
          register_date: '2018-09-22 21:19:57',
          name: 'Samuel Fajreldines'
        }
    */
});

// Always get data from database

(new Person(1)).get().then((result) => {
    console.log(result);
    /*
        {
          id: 1,
          register_date: '2018-09-22 21:19:57',
          name: 'Samuel Fajreldines'
        }
    */
});
````

</details>

## Libraries

-   [TypeScript](https://www.typescriptlang.org)
-   [Mocha](https://github.com/mochajs/mocha)
-   [Chai](https://github.com/chaijs/chai)
-   [Lint-Staged](https://github.com/okonet/lint-staged)
-   [ESLint](https://github.com/eslint/eslint)
-   [Prettier](https://github.com/prettier/prettier)
