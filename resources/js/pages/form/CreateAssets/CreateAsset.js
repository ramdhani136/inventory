import { useSelector } from "react-redux";
import { TitleComponent, Wrapper } from "../../../components";
import { selectValue } from "../../../features/valueSlice";
import "./createasset.scss";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import axios from "axios";
import { API_URL } from "../../../utils/Utils";
import { useEffect, useState } from "react";

const CreateAsset = () => {
    const value = useSelector(selectValue);
    const history = useHistory();
    const [data, setData] = useState({});

    useEffect(() => {
        if (value !== undefined) {
            setData({
                kode: value.asset.kode,
                item: value.asset.item,
                tanggal_item: value.asset.tanggal_item,
                merk: value.asset.merk,
                type: value.asset.type,
                sn: value.asset.sn,
                qty: value.asset.qty,
                kondisi: value.asset.kondisi,
                pic: value.asset.pic,
                garansi: value.asset.garansi,
                tgl_garansi: value.asset.tgl_garansi,
                keterangan: value.asset.keterangan,
                id_kategori: value.asset.id_kategori,
                id_satuan: value.asset.id_satuan,
            });
        }
        return () => {
            setData({});
        };
    }, [value]);

    const validasi = () => {
        if (
            value.asset.item === "" ||
            value.asset.item === undefined ||
            value.asset.id_kategori === "" ||
            value.asset.id_kategori === undefined ||
            value.asset.id_satuan === "" ||
            value.asset.id_satuan === undefined
        ) {
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn ml-2 btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Apakah anda yakin?",
                text: "Ingin menambahkan asset ini!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Iya, Yakin!",
                cancelButtonText: "Tidak!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    if (validasi()) {
                        axios.post(API_URL + "items", data).then((res) => {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 1500,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener(
                                        "mouseenter",
                                        Swal.stopTimer
                                    );
                                    toast.addEventListener(
                                        "mouseleave",
                                        Swal.resumeTimer
                                    );
                                },
                            });

                            Toast.fire({
                                icon: "success",
                                title: "Saving ..",
                            }).then((res) => {
                                history.push("/asset");
                            });
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            showConfirmButton: false,
                            text: "Periksa kembali data anda!",
                            timer: 1200,
                        });
                    }
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire({
                        icon: "error",
                        title: "Canceled",
                        showConfirmButton: false,
                        text: "Batal menyimpan data!",
                        timer: 1200,
                    });
                }
            });
    };

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
            <TitleComponent
                handleSubmit={handleSubmit}
                btnName={{ submit: "save" }}
                title="Input Asset"
            />
            <Wrapper page="FormAsset" />
        </div>
    );
};

export default CreateAsset;
