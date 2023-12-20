import LOGO from "../assets/logo.png";

function Nav() {
    return (
        <nav
            className="navbar sticky-top"
            style={{
            background: "transparent"
        }}
            data-bs-theme="light">
            <div className="container my-3 d-flex">
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-start">
                        <div className="logo-holder">
                            <div
                                style={{
                                backgroundImage: `url(${LOGO})`
                            }}
                                className="logo-img"
                                alt=""></div>
                        </div>
                    </div>
                </div>

                <w3m-core-button />

            </div>
        </nav>
    );
}

export default Nav;