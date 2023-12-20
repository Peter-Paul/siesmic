import {useCallback, useEffect, useState} from "react";
import TokenModal from "./tokenModal";
import Web3Utils from "../../utils";
import {useAccount} from 'wagmi'
import {tokens} from "../../utils/constants";
import {useBalance} from 'wagmi'
import DepositButton from "./depositButton";
import TransactionsModal from "../transactions/transactionsModal";
import { getNetwork } from "@wagmi/core";

function WalletLayout({selectedToken, allTokens, setSelectedToken}) {
    const {address, isConnected} = useAccount()
    const [balance,
        setBalance] = useState(undefined);
    const {data} = useBalance({address})
    const [show,
        setShow] = useState(false);
    const [showTransactions,
        setShowTransactions] = useState(false);

    const [swapAmount,
        setSwapAmount] = useState(0.0)

    const [rate,
        setRate] = useState(undefined)

    const [network,
            setNetwork] = useState(undefined)

    // const [converted,
    //     setConverted] = useState(undefined)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseTransactions = () => setShowTransactions(false);
    const handleShowTransactions = () => setShowTransactions(true);

    const getRate = useCallback(async(token1, token2) => {
        console.log(swapAmount)
        const utils = new Web3Utils(address);

        setRate(await utils.getSwapPrice(1, [token1, token2]))
        // setConverted(await utils.getSwapPrice(swapAmount, [token1, token2]));
    }, [address, swapAmount])

    const getSelectedBalance = useCallback(async() => {
        const {name, address: erc20Address} = selectedToken
        const {formatted} = data
        const utils = new Web3Utils(address);
        if (name === 'BNB') {
            setBalance(parseFloat(formatted).toFixed(3))
        } else {
            setBalance(await utils.getERC20Balance(erc20Address, address))
        }

    }, [address, selectedToken, data])

    useEffect(() => {
        if (isConnected) {
            getRate(selectedToken.address, tokens[1].address)
            getSelectedBalance()
            setNetwork(getNetwork())
        }
    }, [getRate, getSelectedBalance, selectedToken, isConnected]);

    return (

        <div
            className="card col-12 col-md-4"
            style={{
            borderRadius: "20px"
        }}>
            <div
                className="card-header py-3 custom-light-bg"
                style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
            }}>
                <h4>Deposit</h4>
                <p>Deposit stable token to your SCB Wallet</p>

                <div className="d-flex justify-content-end ">
                    <i
                        onClick={handleShowTransactions}
                        className="fa fa-list"
                        style={{
                        fontSize: "20px"
                    }}></i>
                </div>
            </div>

            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start">
                        <div className="token-holder">
                            <div
                                style={{
                                backgroundImage: `url(${selectedToken.logo})`
                            }}
                                className="token-img"
                                alt=""></div>
                        </div>

                        <h5 className="ms-2">{selectedToken.name}</h5>

                        <i
                            onClick={handleShow}
                            className="fa fa-chevron-down ms-2"
                            style={{
                            fontSize: "20px"
                        }}></i>
                    </div>
                    <div>
                        Balance: {balance}
                    </div>
                </div>

                <div className="my-3">
                    <input
                        onChange={(e) => setSwapAmount(e.target.value)}
                        value={swapAmount}
                        style={{
                        height: "80px",
                        textAlign: "right",
                        fontWeight: "bold"
                    }}
                        type="text"
                        className="form-control"
                        placeholder="0.0"
                        aria-describedby="help"/>

                    <div hidden={balance < swapAmount && swapAmount > 0}>
                        {/* <div id="help" className="form-text">Expected to receive: {converted} SCB</div> */}
                        <h6>{`1 ${selectedToken.name} = ${rate} SCB`}</h6>
                    </div>
                </div>

                <DepositButton
                    balance={balance}
                    swapAmount={swapAmount}
                    token={selectedToken}
                    amount={swapAmount}
                    address={address}/>

            </div>
            <TokenModal
                show={show}
                handleClose={handleClose}
                allTokens={allTokens}
                setSelectedToken={setSelectedToken}/>
            <TransactionsModal
                showTransactions={showTransactions}
                handleCloseTransactions={handleCloseTransactions}
                token={selectedToken}
                network={network}
                address={address}/>
        </div>

    );
}

export default WalletLayout;