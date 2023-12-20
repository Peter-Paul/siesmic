import {useCallback, useEffect, useState} from "react";
import {useAccount, useBalance} from "wagmi";
import Web3Utils from "../../utils";
import Spinner from 'react-bootstrap/Spinner';

function TokenInfo({token,setSelectedToken,handleClose}) {
    const {address, isConnected} = useAccount()
    const {data} = useBalance({address})
    const [balance,
        setBalance] = useState(undefined);

    const getBalance = useCallback(async() => {
        const {name, address: erc20Address} = token
        const {formatted} = data
        const utils = new Web3Utils(address);
        if (name === 'BNB') {
            setBalance(parseFloat(formatted).toFixed(3))
        } else {
            console.log(await utils.getERC20Balance(erc20Address, address))
            setBalance(await utils.getERC20Balance(erc20Address, address))
        }

    }, [address, token, data])

    useEffect(() => {
        if (isConnected) {
            getBalance()
        }
    }, [getBalance, isConnected]);

    return (
        <div className="d-flex justify-content-between p-3 modal-list" onClick={ () =>{ setSelectedToken(token); handleClose()} }>
            <div className="d-flex justify-content-start">
                <div className="token-sm-holder">
                    <div
                        style={{
                        backgroundImage: `url(${token.logo})`
                    }}
                        className="token-sm-img"
                        alt=""></div>
                </div>
                <div
                    className="ms-2"
                    style={{
                    fontWeight: "bold",
                    fontSize: "13px"
                }}>{token.name}</div>
            </div>
            <div
                style={{
                fontWeight: "bold",
                fontSize: "13px"
            }}>
                {!balance
                    ? <Spinner animation="border" role="status" style={{height:"10px",width:"10px"}}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    : balance}
            </div>
        </div>
    );
}

export default TokenInfo;