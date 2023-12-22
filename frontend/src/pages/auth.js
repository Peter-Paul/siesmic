import { Navigate } from "react-router-dom";

function Auth({isConnected}) {

    if( isConnected  ){
        return <Navigate to="/home" />
    }

    return ( 
        <div className="centered" style={{height:"70vh"}}>
            <div className="card col-12 col-md-6 centered" style={{height:"40vh"}}>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">Welcome!</h5>
                    <p className="card-text text-center">Swap your stable coin for Siesmic token</p>
                    <div className="d-flex justify-content-center mt-auto">
                        <w3m-button />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Auth;