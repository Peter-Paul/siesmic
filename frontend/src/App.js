import './App.css';
// import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react'
import {Web3Modal} from "@web3modal/react";
import {EthereumClient, w3mConnectors, w3mProvider} from "@web3modal/ethereum";
import {configureChains, createConfig, WagmiConfig} from "wagmi";
import {bscTestnet} from 'wagmi/chains'
import AppLayout from './pages/layout';

const chains = [bscTestnet];
const projectId = "a8e7fdc13c07f4f0c8dfc3fbedc2583f";

const {publicClient} = configureChains(chains, [w3mProvider({projectId})]);
const wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({projectId, chains}),
    publicClient
});

function App() {
    const ethereumClient = new EthereumClient(wagmiConfig, chains);
    // const account = ethereumClient.getAccount();
    return (
        <div className="bg-image">
            <div className='container-fluid'>

                <WagmiConfig config={wagmiConfig}>
                    <AppLayout/>
                </WagmiConfig>

                <Web3Modal
                    projectId={projectId}
                    ethereumClient={ethereumClient}
                    themeMode="dark"
                    enableExplorer={true}
                    enableNetworkView={true}
                    explorerRecommendedWalletIds={["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369", "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0"]}/>
            </div>
        </div>
    );
}

export default App;
