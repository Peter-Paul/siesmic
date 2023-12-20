export const DEPOSIT_ABI = [
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]
export const DEPOSIT_TOKEN_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }, {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            }
        ],
        "name": "depositToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const DEPOSIT_BUSD_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "depositBUSD",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]

export const GET_AMOUNTS_OUT_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }, {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
            }
        ],
        "name": "getAmountsOut",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const DECIMALS_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

export const BALANCE_OF_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const APPROVE_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export const ALLOWANCE_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const DEPOSIT_EVENT_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "depositor",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "uint256",
                "name": "depositTime",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "scbFee",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "depositedBUSD",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "busdReceived",
                "type": "uint256"
            }
        ],
        "name": "DepositBUSD",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "depositor",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "uint256",
                "name": "depositTime",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "scbFee",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "depositedETH",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "busdReceived",
                "type": "uint256"
            }
        ],
        "name": "DepositETH",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "depositor",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "uint256",
                "name": "depositTime",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "scbFee",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "depositedETH",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "busdReceived",
                "type": "uint256"
            }, {
                "indexed": false,
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "DepositToken",
        "type": "event"
    }
]