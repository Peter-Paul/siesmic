import { Navigate } from "react-router-dom";

function Auth({isConnected}) {

    if( isConnected  ){
        return <Navigate to="/home" />
    }

    return ( 
        <div className="centered" style={{height:"78vh"}}>
            <div className="card col-12 col-md-6 centered custom-light-bg " style={{height:"40vh", borderRadius:"20px"}}>
                <div className="card-body d-flex flex-column">
                    <h1 className="card-title text-center">Welcome!</h1>
                    <h4 className="card-text text-center">Swap your stable coin for Siesmic token</h4>
                    <div className="d-flex justify-content-center mt-auto">
                        <w3m-button />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Auth;