export const ConnectWallet = () => {
  if (typeof window.ethereum !== undefined) {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    console.log("no wallet");
  }
};
