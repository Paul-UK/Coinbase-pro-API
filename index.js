//Paul Tancre - code sample API 2020

const { CoinbasePro } = require("coinbase-pro-node");

//auth

const client = new CoinbasePro(auth);

// API Keys can be generated here:
// https://pro.coinbase.com/profile/api
// https://public.sandbox.pro.coinbase.com/profile/api
const auth = {
  apiKey: "",
  apiSecret: "",
  passphrase: "",
  // The Sandbox is for testing only and offers a subset of the products/assets:
  // https://docs.pro.coinbase.com/#sandbox
  useSandbox: true,
};


client.rest.account.listAccounts().then((accounts) => {
  const message = `You can trade "${accounts.length}" different pairs.`;
  console.log(message);
});
