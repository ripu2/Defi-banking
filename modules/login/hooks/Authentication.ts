import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Web3Modal from "web3modal";
import { providerOptions } from "../hooks/providers";
declare var window: any


export function useWalletConnect() {
    const router = useRouter()
    // let instance: any
    let web3Modal: any
    // let provider: any

    useEffect(() => {
        console.log('call')
        web3Modal = new Web3Modal({
            providerOptions,
            theme: 'dark',
            cacheProvider: true,
        });
    }, [])

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
            console.log('web3Modal', web3Modal)
            const provider = new ethers.providers.Web3Provider(instance);
            setLoginCredentials(provider)
            if(provider) return true
            else return false
        } catch (error: any) {
            alert(error.message)
        }
    }

    const disconnetWallet = async () => {
        await web3Modal?.clearCachedProvider()
        localStorage.clear()
        router.push("/")
    }

    return { connectWallet, disconnetWallet }
}