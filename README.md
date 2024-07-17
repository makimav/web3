You can import the script via the client: `<script src="https://web3.makima.dev/web3modal.js" defer></script>`

And then you can use global variables like `sendTransaction`, `getAccount`, `defaultWagmiConfig`, `reconnect`, `createWeb3Modal`, `polygon`, etc.
Also there's `BigNumber` library which you can also use for calculating WEI.

Basic code sample:
```js
var wagmiConfig;
var projectId = "123"; // Replace with your project ID (https://cloud.walletconnect.com/).

window.addEventListener("DOMContentLoaded", () => {
  wagmiConfig = defaultWagmiConfig({
    "chains": [polygon], // The network you use.
    "enableCoinbase": !1,
    "enableInjected": !1,
    projectId
  });
  reconnect(wagmiConfig);
  createWeb3Modal({ // Create a modal window.
    "themeMode": "dark",
    "featuredWalletIds": [],
    "enableAnalytics": !0,
    wagmiConfig, projectId
  });
});
```

Example of sending transactions:
```javascript
var $account = getAccount(wagmiConfig);
if (!$account.address) { // Checking that the user has linked his account.
  throw new Error("Wallet disconnected.");
}
var amount = 12; // Amount to send.
var address = "0x12345"; // Where to send.
var weiAmount = new BigNumber(amount.toString()).times(new BigNumber(10).pow(18)).integerValue().toString(); // Calculate the amount of WEI.
var hash = await sendTransaction(wagmiConfig, {
   "to": address, 
   "value": BigInt(weiAmount),
   "data": address
});
if (hash === "null") {
  throw new Error("Transaction declined.");
}
console.log(hash); // Got hash of transaction.
```
