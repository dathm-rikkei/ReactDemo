import React, { Fragment, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MediaCard from "../../components/CustomCard/CustomCard";
import { Button, withStyles } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import TableContainer from "@mui/material/TableContainer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

class Child1 {
    id: number | undefined;
    value1: string | undefined;
    value2: string | undefined;
    value3: string | undefined;
    value4: string | undefined;
    value5: string | undefined;
    value6: string | undefined;
    value7: string | undefined;
}
class Child2 {
    id: number | undefined;
    value1: string | undefined;
    value2: string | undefined;
    value3: string | undefined;
}
class Parent {
    id: number | undefined;
    image: string | undefined;
    child1 = new Child1();
    child2 = new Child2();
    child3: Child3[] = [];
}

class Child3 {
    id: number | undefined;
    value1: string | undefined;
    value2: string | undefined;
    value3: string | undefined;
    value4: string | undefined;
    value5: string | undefined;
}

const data: Parent[] = [
    {
        id: 1,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
            {
                id: 2,
                value1: "a2",
                value2: "a2",
                value3: "a2",
                value4: "a2",
                value5: "a2",
            },
            {
                id: 3,
                value1: "a3",
                value2: "a3",
                value3: "a3",
                value4: "a3",
                value5: "a3",
            },
            {
                id: 4,
                value1: "a4",
                value2: "a4",
                value3: "a4",
                value4: "a4",
                value5: "a4",
            },
            {
                id: 5,
                value1: "a5",
                value2: "a5",
                value3: "a5",
                value4: "a5",
                value5: "a5",
            },
            {
                id: 6,
                value1: "a6",
                value2: "a6",
                value3: "a6",
                value4: "a6",
                value5: "a6",
            },
            {
                id: 7,
                value1: "a7",
                value2: "a7",
                value3: "a7",
                value4: "a7",
                value5: "a7",
            },
            {
                id: 8,
                value1: "a8",
                value2: "a8",
                value3: "a8",
                value4: "a8",
                value5: "a8",
            },
        ],
    },
    {
        id: 2,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
    {
        id: 3,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
    {
        id: 4,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
    {
        id: 5,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
    {
        id: 6,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
    {
        id: 7,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "http://localhost:8000/images/1688728414406-unnamed%20(1).gif",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
    {
        id: 8,
        child1: {
            id: 1,
            value1: "24.26%",
            value2: "24.22%",
            value3: "0.00%",
            value4: "0.08%",
            value5: "0.00%",
            value6: "0.08%",
            value7: "0.00%",
        },
        child2: { id: 1, value1: "a", value2: "a", value3: "a" },
        image: "https://mui.com/static/branding/store-templates/template-5dark.jpg",
        child3: [
            {
                id: 1,
                value1: "a",
                value2: "a",
                value3: "a",
                value4: "a",
                value5: "a",
            },
        ],
    },
];

const classHeader = {
    fontWeight: 600,
};
const itemsPaging = [
    { value: 5, key: "5 項目" },
    { value: 10, key: "10 項目" },
    { value: 20, key: "20 項目" },
];
export default function List() {
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [items, setItems] = useState(data);
    const formRef = useRef<HTMLFormElement>(null);
    const handleChange = () => {
        formRef.current?.submit();
    };

    const [currentPage, setCurrentPage] = useState(1);

    var indexOfLastItem = currentPage * rowsPerPage;
    var indexOfFirstItem = indexOfLastItem - rowsPerPage;
    var currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    var countpage = Math.round(items.length / currentItems.length);
    const [pagecount, setPagecount] = React.useState(countpage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
        setPagecount(Math.round(Math.max(items.length / parseInt(event.target.value), 1)));
    };
    const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        indexOfLastItem = currentPage * rowsPerPage;
        indexOfFirstItem = indexOfLastItem - rowsPerPage;
        currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    };

    return (
        <Paper className="p-3">
            <form ref={formRef}>
                <div className="form-actions no-color mt-3">
                    <p>
                        <span>登録日</span>
                        <label htmlFor="">登録日</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="MM/DD/YYYY" format="MM/DD/YYYY" />
                        </LocalizationProvider>
                        <Button className="m-1" variant="contained">
                            検索
                        </Button>
                        <Button className="m-1" variant="contained">
                            戻る
                        </Button>
                    </p>
                </div>
                <div className="col-2">
                    <label htmlFor="">部材(デモ用)</label>
                    <CustomDropdown onChange={handleChangeRowsPerPage} className="form-control" items={itemsPaging} value={rowsPerPage} />
                </div>
            </form>
            <Table style={{ border: "solid 1px" }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={classHeader}>No</TableCell>
                        <TableCell style={classHeader}> Raw画像</TableCell>
                        <TableCell style={classHeader}>画像全体に対するPixel割合</TableCell>
                        <TableCell style={classHeader}>健全度（AI算出）</TableCell>
                        <TableCell style={classHeader}>健全度（確定）</TableCell>
                        <TableCell style={classHeader}>うき</TableCell>
                        <TableCell style={classHeader}>抜け落ち</TableCell>
                        <TableCell style={classHeader}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentItems.map((item, index) => (
                        <Fragment key={item.id}>
                            <TableRow>
                                <TableCell rowSpan={1}>{index + 1}</TableCell>
                                <TableCell rowSpan={1}>
                                    {" "}
                                    <MediaCard imageSource={item.image} />
                                </TableCell>
                                <TableCell width={255}>
                                    <TableRow>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={classHeader}>はく離・鉄筋露出c</TableCell>
                                                    <TableCell style={classHeader}>はく離・鉄筋露出d</TableCell>
                                                    <TableCell style={classHeader}>はく離・鉄筋露出e</TableCell>
                                                    <TableCell style={classHeader}>ひびわれ</TableCell>
                                                    <TableCell style={classHeader}>漏水・遊離石灰c</TableCell>
                                                    <TableCell style={classHeader}>漏水・遊離石灰d</TableCell>
                                                    <TableCell style={classHeader}>漏水・遊離石灰e</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <Fragment>
                                                    <TableRow>
                                                        <TableCell>{item.child1.value1}</TableCell>
                                                        <TableCell>{item.child1.value2}</TableCell>
                                                        <TableCell>{item.child1.value3}</TableCell>
                                                        <TableCell>{item.child1.value4}</TableCell>
                                                        <TableCell>{item.child1.value5}</TableCell>
                                                        <TableCell>{item.child1.value6}</TableCell>
                                                        <TableCell>{item.child1.value7}</TableCell>
                                                    </TableRow>
                                                </Fragment>
                                            </TableBody>
                                        </Table>
                                    </TableRow>
                                    <TableRow>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={classHeader}>id</TableCell>
                                                    <TableCell style={classHeader}>value1</TableCell>
                                                    <TableCell style={classHeader}>value2</TableCell>
                                                    <TableCell style={classHeader}>value3</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <Fragment>
                                                    <TableRow>
                                                        <TableCell>{item.child2.id}</TableCell>
                                                        <TableCell>{item.child2.value1}</TableCell>
                                                        <TableCell>{item.child2.value2}</TableCell>
                                                        <TableCell>{item.child2.value3}</TableCell>
                                                    </TableRow>
                                                </Fragment>
                                            </TableBody>
                                        </Table>
                                    </TableRow>
                                </TableCell>
                                <TableCell colSpan={4} rowSpan={1}>
                                    <TableContainer sx={{ maxHeight: 100 }}>
                                        {item.child3.map((child3Item) => (
                                            <Table>
                                                <TableBody>
                                                    <Fragment>
                                                        <TableRow>
                                                            <TableCell>{child3Item.value1}</TableCell>
                                                            <TableCell>{child3Item.value2}</TableCell>
                                                            <TableCell>{child3Item.value3}</TableCell>
                                                            <TableCell>{child3Item.value4}</TableCell>
                                                            <TableCell>{child3Item.value5}</TableCell>
                                                        </TableRow>
                                                    </Fragment>
                                                </TableBody>
                                            </Table>
                                        ))}
                                    </TableContainer>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <Button className="m-1" variant="contained">
                                                    1
                                                </Button>
                                                <Button className="m-1" variant="contained">
                                                    2
                                                </Button>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => console.log("hihi")}>
                                        <DeleteIcon />
                                    </Button>
                                    <Button>
                                        <EditIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
            <Stack spacing={2}>
                <Pagination count={pagecount} onChange={changePage} variant="outlined" shape="rounded" />
            </Stack>
        </Paper>
    );
}
