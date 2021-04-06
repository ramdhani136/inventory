import { formatMs } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormAsset, TitleComponent, Wrapper } from "../../../components";
import { setleftContent } from "../../../features/dataSlice";
import "./createasset.scss";

const CreateAsset = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(
    //         setleftContent({
    //             aktif: true,
    //             filters: [
    //                 {
    //                     id:1,
    //                     nama: "Kategori",
    //                     data: kategori,
    //                 },
    //                 {
    //                     id:2,
    //                     nama: "Tanggal",
    //                     data: kategori,
    //                 },
    //             ],
    //         })
    //     );

    // },[kategori]);

    return (
        <div>
            <TitleComponent name="Save" title="Input Asset" />
            <Wrapper />
        </div>
    );
};

export default CreateAsset;
