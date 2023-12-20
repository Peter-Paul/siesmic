import {useCallback, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Web3Utils from '../../utils';
import TransactionList from './transactionList';

function TransactionsModal({showTransactions, handleCloseTransactions, token, network, address}) {

    const [transactions,
        setTransactions] = useState(undefined)

    const mapTransactions = useCallback(async() => {
        const web3Utils = new Web3Utils(address);
        if (network) {
            const {chain} = network
            const {id} = chain
            const {name} = token
            let logs
            if (name === "BNB") {
                logs = await web3Utils.getDepositETHLogs(id)
            } else if (name === "BUSD") {
                logs = await web3Utils.getDepositBUSDLogs(id)
            } else {
                logs = await web3Utils.getDepositTokenLogs(id)
            }
            setTransactions(logs.reverse())
        }
    }, [network, token, address])

    useEffect(() => {
        mapTransactions()
    }, [mapTransactions])
    return (
        <Modal
            size="lg"
            scrollable={true}
            show={showTransactions}
            backdrop="static"
            onHide={handleCloseTransactions}
            className='modal-custom'>

            <div className="modal-header">
                <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">{`${token.name} Transaction History`}</h1>
                <button
                    onClick={handleCloseTransactions}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>

            <div className='modal-body'>
                {console.log(transactions && transactions.length)}
                {transactions && transactions.length > 0
                    ? <div>
                            <div>
                                <div className="d-flex justify-content-between" style={{fontWeight:"bold"}}>
                                    <div className='col-1'>Date</div>
                                    <div className='col-1'>Deposited</div>
                                    <div className='col-1'>BUSD</div>
                                    <div className='col-1'>Fee</div>
                                    <div className='col-5'>User</div>
                                </div>
                                <hr className=' mb-3'/>
                            </div>

                            {transactions.map((transaction) => {
                                return (
                                    <div key={transaction.id}>
                                        <TransactionList name={token.name} transaction={transaction}/>

                                    </div>
                                )
                            })}
                        </div>
                    : <div className='text-center'>
                        <h3>No Transactions</h3>
                    </div>
}
            </div>

            <div className='modal-footer d-flex justify-content-center'>
                <button className="btn btn-custom" style={{fontWeight:"bold"}} onClick={handleCloseTransactions}>
                    Close
                </button>
            </div>

        </Modal>
    );
}

export default TransactionsModal;