import {Navigate} from "react-router-dom";
import WalletLayout from "../components/wallet/layout";
import {useState} from "react";
import Admin from "./admin";

function Home({isDisconnected, allTokens, selectedToken, setSelectedToken}) {

    const [view,
        setView] = useState("wallet");

    if (isDisconnected) {
        return <Navigate to="/"/>
    }

    return (
        <div>

            {view === "wallet" && <div
                className="centered"
                style={{
                minHeight: "60vh"
            }}>

                <WalletLayout
                    allTokens={allTokens}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}/>
                {/* <div class="position-absolute bottom-0 end-0 me-5 mb-5">
                    <button
                        className="btn btn-custom"
                        onClick={ () => setView("admin")}
                        style={{
                        fontWeight: "bold"
                    }}>
                        <i className="fa fa-gear me-1"></i>
                        Settings
                    </button>
                </div> */}

            </div>
}
            {view === "admin" && <div
                className="centered"
                style={{
                minHeight: "60vh"
            }}>
                <Admin allTokens={allTokens}/>

                <div class="position-absolute bottom-0 end-0 me-5 mb-5">
                    <button
                        className="btn btn-custom"
                        onClick={ () => setView("wallet")}
                        style={{
                        fontWeight: "bold"
                    }}>
                        <i className="fa fa-arrow-left me-1"></i>
                        Deposit
                    </button>
                </div>
            </div>
}
        </div>
    );
}

export default Home;