import "./style.module.css";
import React, { useState } from "react";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import { useNavigate } from "react-router-dom";
import { Backdrop, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

const Upload: React.FC = () => {
    const [imageUrlChild, setImageUrlChild] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isShowButton, setIsShowButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const items = [
        { value: "1", key: "選択してください" },
        { value: "2", key: "分類に関係なし" },
        { value: "2", key: "鉄筋コンクリート（RC）" },
        { value: "2", key: "プレストレストコンクリート（PrPC）" },
        { value: "2", key: "プレストレストコンクリート（PoPC）" },
        { value: "2", key: "コンクリート（その他）" },
        { value: "2", key: "SS41、SS50" },
    ];
    const navigate = useNavigate();
    const readUrl = (e: any) => {
        const input = e.target.files?.[0];
        if (input) {
            let reader = new FileReader();
            reader.onload = (a) => {
                let imgName = input.name;
                e.target.setAttribute("data-title", imgName);
                let image = new Image();
                image.src = a.target?.result as string;
                const imageUrl = URL.createObjectURL(input);
                setImageUrl(imageUrl);
            };
            reader.readAsDataURL(input);
            console.log(input);
            setIsShowButton(true);
            const formData = new FormData();
            formData.append("image", input);

            fetch("http://localhost:8000/upload", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    setImageUrlChild(data.fileSave);
                })
                .catch((error) => {
                    // Xử lý lỗi
                });
        }
    };

    const submitImage = () => {
        setIsLoading(true);
        var id = 1;
        setTimeout(() => {
            navigate(`/detail?id=${id}&name=${imageUrlChild}`);
        }, 3000);
    };
    const handleChange = (e: any) => {
        // setValue1item(e.target.value);
        console.log(e.target);
    };
    const handleClose = () => {
        setIsLoading(false);
    };
    const onSubmit = (e: any) => {
        e.preventDefault();
        alert(JSON.stringify(items));
    };

    return (
        <Paper className="p-3">
            <div className="container">
                <div className="container-fuild">
                    <div className="row">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor="">部材</label>
                                    <CustomDropdown onChange={handleChange} className="form-control" items={items} value="1" />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="">材質</label>
                                    <CustomDropdown className="form-control" items={items} value="1" onChange={handleChange} />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="">劣化機構</label>
                                    <CustomDropdown className="form-control" items={items} onChange={handleChange} value="1" />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="">画像までの概算距離</label>
                                    <CustomDropdown className="form-control" items={items} onChange={handleChange} value="1" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div className="form-group inputDnD">
                                        <input
                                            type="file"
                                            onChange={readUrl}
                                            className="form-control-file text-primary font-weight-bold"
                                            id="inputFile"
                                            accept="image/*"
                                            data-title="画像ドラッグ＆ドロップ"
                                            defaultValue=""
                                        />
                                        <input type="text" value="" name="width" id="width-image" hidden />
                                        <input type="text" value="" name="height" id="height-image" hidden />
                                        <input type="text" value="" name="name" id="name-image" hidden />
                                        <input type="text" value="" name="dateCreate" id="date-create-image" hidden />
                                        <input type="text" value="" name="imageBase64" id="base64-image" hidden />
                                        <div>
                                            {isShowButton && (
                                                <Button id="btn_submit" onClick={submitImage} variant="contained">
                                                    AI判定実行
                                                </Button>
                                            )}
                                        </div>
                                        <button type="submit" id="image-submit" hidden></button>
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
                                        <span className="">AI判定中...しばらくお待ちください。</span>
                                    </Backdrop>
                                </div>
                            )}

                            <div className="row">
                                <div className="col">
                                    <img className="uploaded_img_css" id="uploaded_img" src={imageUrl} alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default Upload;
