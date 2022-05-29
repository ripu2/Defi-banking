import { ethers } from "ethers";
import { useEffect } from "react";
import Web3Modal from "web3modal";
import { providerOptions } from "../hooks/providers";


export function useWalletConnect() {
    // let instance: any
    let web3Modal: any
    // let provider: any

    useEffect(() => {
        web3Modal = new Web3Modal({
            providerOptions,
            theme: 'dark',
            cacheProvider: true,
        });
    })

    const setLoginCredentials = async (prov: any) => {
        const signer = await prov?.getSigner();
        const address = await signer.getAddress()
        localStorage.setItem("@address", address)
    }

    const connectWallet = async () => {
        // localStorage.clear()
        try {
            await web3Modal.clearCachedProvider()
            const instance = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(instance);
            setLoginCredentials(provider)
        } catch (error: any) {
            alert(error.message)
        }
    }

    const disconnetWallet = async () => {
        web3Modal.clearCachedProvider();
    }

    const isConnected = async () => {

    }
    return { connectWallet, disconnetWallet, isConnected }
}