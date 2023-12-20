import { tokenStates } from "../utils/constants";
import Form from 'react-bootstrap/Form';

function Admin() {
    return (
        <div
            className="card col-12 col-md-5"
            style={{
            borderRadius: "20px"
        }}>
            <div
                className="card-header py-3 custom-light-bg"
                style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
            }}>
                <h4 className="text-center">Select Stable Coins</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    {tokenStates.map(token => {
                        return (
                            <div key={token.name} className="col-4">
                                <Form.Check // prettier-ignore
                                    type="checkbox"
                                    id={token.name}
                                    label={token.name}
                                    checked={token.active}
                                />
                            </div>
                        )
                    })}
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column"><span style={{fontWeight:"bold"}}>Tax Wallet:</span><span>{` 2000 BUSD`}</span></div>
                    <div className="d-flex flex-column"><span style={{fontWeight:"bold"}}>Community Wallet:</span><span>{` 50000 BUSD`}</span></div>
                    <div className="d-flex flex-column"><span style={{fontWeight:"bold"}}>Vault Wallet:</span><span>{` 50000 BUSD`}</span></div>
                </div>

            </div>

            <div className="card-footer ">
                <div className="d-grid gap-2 my-3">
                    <button
                        className={`btn btn-custom btn-lg`}
                        type="button"
                        style={{
                        fontWeight: "bold"
                    }}>Re Distribute</button>
                </div>
            </div>

        </div>
    );
}

export default Admin;