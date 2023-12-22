import './App.css';
import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react'
import {WagmiConfig} from 'wagmi'
import {bscTestnet} from 'wagmi/chains'
import AppLayout from './pages/layout';

// 1. Get projectId
const projectId = 'a8e7fdc13c07f4f0c8dfc3fbedc2583f'

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [bscTestnet]
const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata})

// 3. Create modal
createWeb3Modal({wagmiConfig, projectId, chains})

function App() {
    
    return (
        <WagmiConfig config={wagmiConfig}>
            <AppLayout />
        </WagmiConfig>
    );
}

export default App;
