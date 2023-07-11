/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MediaCard from "../../components/CustomCard/CustomCard";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

interface RowData {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}
const createData = (name: string, calories: number, fat: number, carbs: number, protein: number): RowData => {
    return { name, calories, fat, carbs, protein };
};

const Detail: React.FC<{ id: number }> = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const imageName = "http://localhost:8000/images/" + searchParams.get("name");
    console.log(location.search);
    const a = [
        { imageSource: imageName },
        { imageSource: imageName },
        { imageSource: imageName },
        { imageSource: imageName },
        { imageSource: imageName },
        { imageSource: imageName },
        { imageSource: imageName },
        { imageSource: imageName },
    ];
    const halfButtonStyle = {
        width: "50%",
    };

    const toggleLabel = (input: React.MouseEvent<HTMLButtonElement>) => {
        console.log(input);
        var text = input.currentTarget.innerHTML;
        if (text === "-") {
            input.currentTarget.innerHTML = "〇";
        } else {
            input.currentTarget.innerHTML = "-";
        }
    };

    const rows: RowData[] = [
        createData("⑥ひびわれ", 159, 6.0, 24, 4.0),
        createData("⑦はく離・鉄筋露出", 237, 9.0, 37, 4.3),
        createData("⑧漏水・遊離石灰", 262, 16.0, 24, 6.0),
        createData("⑨抜け落ち", 305, 3.7, 67, 4.3),
        createData("⑪床板ひびわれ", 356, 16.0, 49, 3.9),
    ];
    const navigate = useNavigate();
    const linkList = () => {
        setIsLoading(true);
        var id = 1;
        setTimeout(() => {
            navigate(`/list`);
        }, 3000);
    };
    const handleClose = () => {
        setIsLoading(false);
    };
    const classHeader = {
        fontWeight: 600,
    };

    return (
        <Paper className="p-3">
            <div className="container">
                <div className="container-fuild">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-2">
                                <MediaCard imageSource={a[0].imageSource} />
                            </div>
                            <div className="row col-md-10">
                                {a.map((item) => {
                                    return (
                                        <div className="col-md-3 mb-2">
                                            <MediaCard imageSource={item.imageSource} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="row col-md-10">
                                <div className="col-md-3 card card-image m-2">
                                    <h5 className="card-title text-center">うき</h5>
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                            あり/なし
                                        </label>
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                                <div className="col-md-3 card card-image m-2">
                                    <h5 className="card-title text-center">うき</h5>
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                            あり/なし
                                        </label>
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                                <div className="col-md-2 card card-image m-2">
                                    <h5 className="card-title text-center">うき</h5>
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                            あり/なし
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-2 card card-image m-2">
                                    <h5 className="card-title text-center">うき</h5>
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                            あり/なし
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <hr />
                            <div className="row">
                                <div className="col-10">
                                    <h2>健全度診断（AIが判定した損傷種類を必要に応じて修正してください）</h2>
                                </div>
                                <div className="col-2">
                                    <input
                                        id="kenzendo_btn"
                                        type="button"
                                        className="btn btn-primary form-control "
                                        onClick={() => {
                                            console.log("");
                                        }}
                                        value="健全度AI算出"
                                    />
                                </div>
                            </div>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={classHeader}>損傷種類</TableCell>
                                            <TableCell style={classHeader} align="center">
                                                a
                                            </TableCell>
                                            <TableCell style={classHeader} align="center">
                                                b
                                            </TableCell>
                                            <TableCell style={classHeader} align="center">
                                                c
                                            </TableCell>
                                            <TableCell style={classHeader} align="center">
                                                d
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{
                                                    "&:last-child td, &:last-child th": { border: 0 },
                                                }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <button type="button" id={"a" + index} className="btn btn-light" onClick={toggleLabel} style={halfButtonStyle}>
                                                        -
                                                    </button>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <button type="button" id={"b" + index} className="btn btn-light" onClick={toggleLabel} style={halfButtonStyle}>
                                                        -
                                                    </button>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <button type="button" id={"c" + index} className="btn btn-light" onClick={toggleLabel} style={halfButtonStyle}>
                                                        -
                                                    </button>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <button type="button" id={"d" + index} className="btn btn-light" onClick={toggleLabel} style={halfButtonStyle}>
                                                        -
                                                    </button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <form method="post">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="kenzendo_btn">　</label>
                                        <input
                                            id="kenzendo_btn"
                                            type="button"
                                            className="btn btn-primary form-control"
                                            onClick={() => {
                                                console.log("");
                                            }}
                                            value="健全度AI算出"
                                        />
                                    </div>
                                    <div className="col-5" style={{ textAlign: "left" }}>
                                        <label htmlFor="kenzendo">健全度（AI算出）:</label>
                                        <input type="number" className="form-control" id="lblKenzendoAi" defaultValue={0} min="0" max="100" />
                                    </div>
                                </div>
                                <input type="hidden" name="listButton" id="listButton" />
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-5" style={{ textAlign: "left" }}>
                                        <label htmlFor="kenzendo">健全度→健全度（点検者による修正［必要に応じ］）:</label>
                                        <input type="number" className="form-control" id="lblKenzendoUser" defaultValue={0} min="'0'" max="100" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="kenzendo_btn">　</label>
                                        <input type="button" className="btn btn-success form-control" onClick={linkList} value="健全度確定" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && (
                <div id="loader">
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={isLoading}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                        <span className="">健全度を確定しています。しばらくお待ちください。</span>
                    </Backdrop>
                </div>
            )}
        </Paper>
    );
};

export default Detail;
