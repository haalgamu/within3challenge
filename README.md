# Within3 Challenge
_Within3 Software Engineer Code Challenge_

### Installation

within3challenge requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd within3challenge
npm i
```

#### Building for source

For local env:

```sh
npm run build
```


#### Run the server

After build the project, execute this command:

```sh
npm run start
```
Finally, go to the page [https://localhost:4000/graphql](https://localhost:4000/graphql). It is a landing page where you can execute queries or mutations.

On there, you can ask for the query _getPostalCodeInfo_
```graphql
query postalCode($postalCode: String!, $countryCode: String!){
        getPostalCodeInfo(
            parameters: {
                postalCode: $postalCode,
                countryCode: $countryCode
            }
        ){
            postalCode
            country
        }
    }
```