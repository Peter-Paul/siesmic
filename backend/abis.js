const DEPOSIT_EVENT_ABI = [
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

module.exports = {
    DEPOSIT_EVENT_ABI
};