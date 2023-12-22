import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "../shared/nav";
import Home from './home';
import Auth from './auth';
import {useAccount} from 'wagmi';
import {useEffect, useState} from 'react';
import {tokens} from '../utils/constants';

function AppLayout() {
    const {isDisconnected, isConnected} = useAccount()
    const [selectedToken,
        setSelectedToken] = useState(tokens[0])
    const [allTokens,
        setAllTokens] = useState(tokens)

    useEffect(() => {
        setAllTokens(tokens)
    }, [setAllTokens])
    return (
        <Router>
            <div className="bg-image">
                <div className="container">
                    <div>
                        {/* NAVIGATION */}
                        <div className='sticky-top' hidden={isDisconnected}>
                            <Nav/>
                        </div>
                        {/* <br className='my-5'></br> */}
                        {/* BODY */}
                        <div >
                            <Routes>
                                <Route
                                    exact
                                    path="/home"
                                    element={< Home isDisconnected = {
                                    isDisconnected
                                }
                                setSelectedToken = {
                                    setSelectedToken
                                }
                                allTokens = {
                                    allTokens
                                }
                                selectedToken = {
                                    selectedToken
                                } />}/>
                                <Route
                                    exact
                                    path="/"
                                    element={< Auth isConnected = {
                                    isConnected
                                } />}/>
                            </Routes>
                        </div>
                        <br className='my-5'></br>
                        {/* FOOTER */}
                        <div className='mt-5'>
                            {/* <Footer /> */}
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default AppLayout;