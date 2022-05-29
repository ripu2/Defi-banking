import WalletConnectProvider from '@walletconnect/web3-provider';
import { WalletLink } from 'walletlink';
import { IProviderOptions } from 'web3modal';
import Torus from "@toruslabs/torus-embed";


interface ConnectorOptions {
  appName: string;
  networkUrl: string;
  chainId: number;
}

export const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: process.env.NEXT_PUBLIC_SECRET,
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://avatars.githubusercontent.com/u/1885080?s=280&v=4',
      name: 'Coinbase',
      description: 'Scan with Coinbase wallet to connect',
    },
    options: {
      appName: 'Defi Solution',
    },
    package: WalletLink,
    connector: async (
      PackageObject: typeof WalletLink,
      options: ConnectorOptions,
    ) => {
      const { appName } = options;
      const walletLink = new PackageObject({
        appName,
      });
      // @ts-expect-error
      const provider = walletLink.makeWeb3Provider({}, 0);
      await provider.enable();
      return provider;
    },
  },
  binancechainwallet: {
    package: true
  },
  torus: {
    package: Torus, 
  }
};
