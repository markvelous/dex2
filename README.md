# SIMPLED DEX

`SGBT4 PT7210027 Mark Tan for the final asssignment of the Intermediate Blockchain module`
This project is still buggy and require more work for a better UX

## Quickstart ⏱ 

Install the following dependencies
- [NodeJS>=10](https://nodejs.org/en/download/) 
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 
- [Git](https://git-scm.com/downloads)

Clone or fork the repo and install it

`### yarn install`

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


📝 Edit your smart contract `SmartContractWallet.sol` in `packages/buidler/contracts`

> 🤡 There is a spelling error in `packages/buidler/contracts/SmartContractWallet.sol`! <br/><br/>🤔 Can you fix it and deploy the contract locally?

![Deployed Contract](https://user-images.githubusercontent.com/2653167/81483187-8146b380-91f9-11ea-80f0-3a8e1e3225dd.png)

> ☢️ **Warning**: It is very important that you find `SmartContractWallet.sol` in `packages/buidler/contracts` because there are other contract folders and it can get confusing.

🔬Test your contracts by editing `myTest.js` in `packages/buidler/contracts`:

```bash
yarn run test
```

🗝 List your local accounts:

```bash
yarn run accounts
```

💰 Check account balance:

```bash
yarn run balance **YOUR-ADDRESS**
```

💸 Send ETH:

```bash
yarn run send --from 0 --amount 0.5 --to **YOUR-ADDRESS**
```

> 🔧 Configure 👷[Buidler](https://buidler.dev/config/) by editing `buidler.config.js` in `packages/buidler`

---

✨ The [BuidlerEVM](https://buidler.dev/buidler-evm/) provides _stack traces_ and _console.log_ debugging for our contracts ✨

---


## 🔏 Web3 Providers:

The frontend has three different providers that provide different levels of access to different chains:

`mainnetProvider`: (read only) [Infura](https://infura.io/) connection to main [Ethereum](https://ethereum.org/developers/) network (and contracts already deployed like [DAI](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#code) or [Uniswap](https://etherscan.io/address/0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667)).

`localProvider`: local [Buidler](https://buidler.dev/) accounts, used to read from _your_ contracts (`.env` file points you at testnet or mainnet)

`injectedProvider`: your personal [MetaMask](https://metamask.io/download.html), [WalletConnect](https://walletconnect.org/apps) via [Argent](https://www.argent.xyz/), or other injected wallet (generates [burner-provider](https://www.npmjs.com/package/burner-provider) on page load)


📡 `<Provider />`: You can choose to display the provider connection status to your users with:

```jsx
<Provider name={"mainnet"} provider={mainnetProvider} />
<Provider name={"local"} provider={localProvider} />
<Provider name={"injected"} provider={injectedProvider} />
```

![providere](https://user-images.githubusercontent.com/2653167/80524033-3781e180-894c-11ea-8965-98eb5e2e5e71.gif)


---

## 📄 Smart Contract Wallet:

📝 Edit your smart contract `SmartContractWallet.sol` in `packages/buidler/contracts`

📝 Then edit the `SmartContractWallet.js` React component in `packages/react-app/src`

▶️ Run `yarn run compile` and `yarn run deploy` or just `yarn run watch`

![smortcontractwallet](https://user-images.githubusercontent.com/2653167/80741479-ece0a080-8ad6-11ea-9850-f576f7be2b85.gif)

> 🛠 Run [this eth.build](https://eth.build/build#32f1ecd6d90518387f2f34c47176bf67fdf55c855bff39f85de08d76696b850f) with your contract address to ask it who its owner is.

---

📚 OpenZeppelin Contracts 

Import any of the [OpenZeppelin contracts](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts)

```jsx
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
```


## 🛳 Ship it!

Deploy the static site and go live with the DApp!

```bash
yarn run build

yarn run ship
```
