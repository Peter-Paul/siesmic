import TokenInfo from "./tokenInfo";

function TokenList({allTokens, setSelectedToken, handleClose}) {

    return (
        <div>
            {allTokens.filter(t => t.name !== "SCB").map(t => {
                return (
                    <div key={t.name}>
                        <TokenInfo
                            token={t}
                            setSelectedToken={setSelectedToken}
                            handleClose={handleClose}/>
                    </div>
                )
            })}
        </div>
    );
}

export default TokenList;