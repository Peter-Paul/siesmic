function TransactionList({name, transaction}) {
    return (
        <div>
            <div className="d-flex justify-content-between my-2 p-3 modal-list">
                <div className="col-1" style={{fontSize:"10px",fontWeight: "bold"}}>{transaction.time}</div>
                <div className="col-1">{transaction.deposited}</div>
                <div className="col-1">{transaction.busd}</div>
                <div className="col-1">{transaction.fee}</div>
                <div
                    className="col-6"
                    style={{
                    fontSize: "13px",
                    fontWeight: "bold"
                }}>{transaction.user}</div>
            </div>

        </div>
    );
}

export default TransactionList;