const express = require("express");
const axios = require("axios");
const {AbiCoder, Interface} = require("ethers");
const {DEPOSIT_EVENT_ABI} = require("./abis.js")

const app = express();

const queryURL = "https://api.thegraph.com/subgraphs/name/rohallah12/scb-indexer";

const port = process.env.PORT || 8000;
const abiCoder = new AbiCoder();
const vaults = {
    "bsc": {
        "testnet": "0x6AD0f723668F1f85fdf69342665d6Ed6267A73C9",
        "mainnet": "0x6AD0f723668F1f85fdf69342665d6Ed6267A73C9"
    },
    "eth": {
        "testnet": "0x6AD0f723668F1f85fdf69342665d6Ed6267A73C9",
        "mainnet": "0x6AD0f723668F1f85fdf69342665d6Ed6267A73C9"
    }
}

const tokens = {
    "usdt": {
        "address": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        "topic0": "0x1ab1cbe13cd8600861750d1e66621badf6b7b2d1443493b5e7845da6f35757b7"
    }
}

//get deposits for an address
app.get("/getDepositsBUSD/:chain/:state/:address", async(req, res) => {
    let {chain, state, address} = req.params;
    let topic1 = abiCoder.encode(["address"], [address]);
    let topic0 = "0x766074b3b23bdd14a4a4563f120565b3a267ca55a213352273991702b6e1cc5e"
    const scbUnitDecimals = 1 * 10 ** 18
    const busdUnitDecimals = 1 * 10 ** 18
    let url;

    if (chain === "bsc") {
        if (state === "testnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        } else if (state === "mainnet") {
            url = `https://api.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}&apikey=${process.env.BSC_API_KEY}`
        }
    } else if (chain === "eth") {
        if (state === "testnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        } else if (state === "mainnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        }
    }

    console.log("getting busd deposits for " + address);
    try {
        const {data} = await axios.get(url)
        const {result} = data
        const iface = new Interface(DEPOSIT_EVENT_ABI)
        const mappedResult = result.map((item) => {
            const decodedResult = iface.parseLog(item)
            const {depositor, depositTime, scbFee, depositedBUSD, busdReceived} = decodedResult.args

            return {
                id: result.indexOf(item),
                user: depositor,
                time: new Date(parseInt(depositTime) * 1000).toLocaleString(),
                fee: (parseInt(scbFee) / scbUnitDecimals).toFixed(4),
                deposited: (parseInt(depositedBUSD) / busdUnitDecimals).toFixed(4),
                busd: (parseInt(busdReceived) / busdUnitDecimals).toFixed(4)
            }

        })

        res.send({result: mappedResult});
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

app.get("/getDepositsETH/:chain/:state/:address", async(req, res) => {
    let {chain, state, address} = req.params;
    let topic1 = abiCoder.encode(["address"], [address]);
    let topic0 = "0x7805cf276f2510fb0a2706973c477dda0df8017ba2a2f7e79534df94097a7c3a"
    const scbUnitDecimals = 1 * 10 ** 18
    const busdUnitDecimals = 1 * 10 ** 18
    const ethUnitDecimals = 1 * 10 ** 18
    let url;

    if (chain === "bsc") {
        if (state === "testnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        } else if (state === "mainnet") {
            url = `https://api.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}&apikey=${process.env.BSC_API_KEY}`
        }
    } else if (chain === "eth") {
        if (state === "testnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        } else if (state === "mainnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        }
    }

    console.log("getting eth deposits for " + address);
    try {

        const {data} = await axios.get(url)
        const {result} = data
        const iface = new Interface(DEPOSIT_EVENT_ABI)
        const mappedResult = result.map((item) => {
            const decodedResult = iface.parseLog(item)
            const {depositor, depositTime, scbFee, depositedETH, busdReceived} = decodedResult.args

            return {
                id: result.indexOf(item),
                user: depositor,
                time: new Date(parseInt(depositTime) * 1000).toLocaleString(),
                fee: (parseInt(scbFee) / scbUnitDecimals).toFixed(4),
                deposited: (parseInt(depositedETH) / ethUnitDecimals).toFixed(4),
                busd: (parseInt(busdReceived) / busdUnitDecimals).toFixed(4)
            }

        })

        res.send({result: mappedResult});
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

app.get("/getDepositsToken/:token/:chain/:state/:address", async(req, res) => {
    let {chain, state, address, token} = req.params;
    let topic1 = abiCoder.encode(["address"], [address]);
    const scbUnitDecimals = 1 * 10 ** 18
    const busdUnitDecimals = 1 * 10 ** 18
    const ethUnitDecimals = 1 * 10 ** 18
    let url,
        topic0;

    try {
        topic0 = tokens[token].topic0;
    } catch(e) {
        console.log(e);
        res.send(e);
    }

    if (chain === "bsc") {
        if (state === "testnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        } else if (state === "mainnet") {
            url = `https://api.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}&apikey=${process.env.BSC_API_KEY}`
        }
    } else if (chain === "eth") {
        if (state === "testnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        } else if (state === "mainnet") {
            url = `https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=${topic0}&topic0_1_opr=and&topic1=${topic1}&address=${vaults[chain][state]}`
        }
    }

    console.log("getting token deposits for " + address);
    try {

        const {data} = await axios.get(url)
        const {result} = data
        const iface = new Interface(DEPOSIT_EVENT_ABI)
        const mappedResult = result.map((item) => {
            const decodedResult = iface.parseLog(item)
            const {depositor, depositTime, scbFee, depositedETH, busdReceived} = decodedResult.args

            return {
                id: result.indexOf(item),
                user: depositor,
                time: new Date(parseInt(depositTime) * 1000).toLocaleString(),
                fee: (parseInt(scbFee) / scbUnitDecimals).toFixed(4),
                deposited: (parseInt(depositedETH) / ethUnitDecimals).toFixed(4),
                busd: (parseInt(busdReceived) / busdUnitDecimals).toFixed(4)
            }

        })

        res.send({result: mappedResult});
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});
