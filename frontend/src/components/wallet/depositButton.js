import {useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Web3Utils from "../../utils";

function DepositButton({balance, amount, address, token}) {
    const [display,
        setDisplay] = useState("deposit");
    const [progress,
        setProgress] = useState(10)
    const web3Utils = new Web3Utils(address);

    const makeDeposit = async() => {
        const allowance = await web3Utils.getAllowance(token.address, address)
        console.log(allowance,amount)
        if(token.name !== "BNB") {
            if (parseFloat(allowance) <= 0 ){
                await web3Utils.approveVault(token.address, amount)
            }else{
                
                if(allowance<amount){
                    await web3Utils.approveVault(token.address, "0")
                    setProgress(30)
                    await web3Utils.approveVault(token.address, amount)
                }
            }
        }
        setProgress(50)
        if (token.name === "BNB") {
            await web3Utils.deposit(amount)
        } else if (token.name === "BUSD") {
            await web3Utils.deposit(amount, token.address, true)
        } else {
            await web3Utils.deposit(amount, token.address, false)
        }
        setProgress(100)

        await setTimeout(() => {setProgress(100)}, 5000);

        setProgress(0)

        setDisplay("deposit")
    }

    return (
        <div>
            {display === "deposit" && <div className="d-grid gap-2">
                <button
                    className={`btn btn-${balance < amount
                    ? "danger"
                    : "custom"} btn-lg`}
                    disabled={amount <= 0 || balance < amount}
                    type="button"
                    onClick={() => {
                    setDisplay("progress");
                    makeDeposit()
                }}
                    style={{
                    fontWeight: "bold"
                }}>{balance < amount
                        ? "Insufficient Amount"
                        : "Deposit"}</button>
            </div>
}
            {display === "progress" && <ProgressBar variant="warning" animated now={progress}/>
}
        </div>
    );
}

export default DepositButton;