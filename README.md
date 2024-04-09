1) You can import the script via the client: `<script src="https://makimav.github.io/web3/web3modal.js" defer></script>`
2) Sample code on the client.
```js
var projectId = "projectID"; //Here you can get your project ID: https://cloud.walletconnect.com/?utm_source=website&utm_medium=docs&utm_campaign=walletconnectdocs

var $account, wagmiConfig; //Some imports to use web3

var address = "Your wallet address"; //Your wallet address

if (!$account.address) { //Checking that the user has linked his account to the modal window.
  throw Error("Wallet disconnected");
}

var weiAmount = new BigNumber(amount).times(new BigNumber(10).pow(18)).integerValue().toString(); //Calculate the amount of cryptocurrency sent.
var _hash = await sendTransaction(wagmiConfig, { //Sending the transaction to the wallet you specified.
   "to": address, 
   "value": BigInt(weiAmount),
   "data": address
});

if (_hash !== "null") {
  console.log(_hash); //Retrieving the Transaction Hash.
}

window.addEventListener("DOMContentLoaded", () => {
  wagmiConfig = defaultWagmiConfig({
    "chains": [polygon], //The network you will connect to.
    "enableCoinbase": !1,
    "enableInjected": !1,
    projectId
  });
  reconnect(wagmiConfig);
  createWeb3Modal({ //Create a modal window.
    "themeMode": "dark",
    "featuredWalletIds": [],
    "enableAnalytics": !0,
    wagmiConfig, projectId
  });
});
```
