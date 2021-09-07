# A SIMPLE DEX

SGBT4 PT7210027 Mark Tan for the final asssignment of the Intermediate Blockchain module<br/>
This project is still buggy and require more work for a better UX

### Dependencies 

- [NodeJS>=10](https://nodejs.org/en/download/) 
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 
- [Git](https://git-scm.com/downloads)

### Quickstart

Clone or fork the repo and install it

```bash
yarn install
```

Edit your frontend at `App.js` under `packages/react-app/src`

Open a new terminal and start the local blockchain using [Buidler](https://buidler.dev/tutorial/)

```bash
yarn run chain
```

Run the frontend at [local host](http://localhost:3000)

```bash
yarn start
```

Open a new terminal to compile and deploy the contracts:

```bash
yarn run compile

yarn run deploy
```