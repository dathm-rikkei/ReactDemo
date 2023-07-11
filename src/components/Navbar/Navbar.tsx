import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container-fluid">
                <a className="navbar-brand">BM Star AI診断（ベータ版）</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav flex-grow-1">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/upload">
                            診断画面
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/list">
                            テキスト
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">
                            テキスト
                        </Link>
                    </li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <Button variant="contained">
                        <a className="navbar-brand nav_guide text-white" rel="noopener noreferrer" style={{ display: "inline" }}>
                            <img src="/contents/manual_img.png" width="20" height="30" className="d-inline-block align-top wakaba" alt="" />
                            利用ガイド
                        </a>
                    </Button>
                    <li className="nav-item">
                        <a className="nav-link">ログアウト</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
