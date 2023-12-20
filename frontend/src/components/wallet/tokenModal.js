import Modal from 'react-bootstrap/Modal';
import TokenList from './tokenList';

function TokenModal({show, handleClose, allTokens, setSelectedToken}) {

    return (

        <Modal // size="sm" 
    variant={"dark"}  show={show} backdrop="static" onHide={handleClose} className='modal-custom'>

            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Select A Token</h1>
                <button
                    onClick={handleClose}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input
                    style={{
                    fontWeight: "bold"
                }}
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search name or paste address"/>
                <TokenList
                    allTokens={allTokens}
                    setSelectedToken={setSelectedToken}
                    handleClose={handleClose}/>
            </div>
            <div className='modal-footer d-flex justify-content-center'>
                <button className="btn btn-custom" style={{fontWeight:"bold"}} onClick={handleClose}>
                    Close
                </button>
            </div>

        </Modal>
    );
}

export default TokenModal;