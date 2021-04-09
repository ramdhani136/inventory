import { useSelector } from "react-redux";
import { TitleComponent, Wrapper } from "../../../components";
import { selectValue } from "../../../features/valueSlice";
import "./createasset.scss";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import axios from "axios";
import { API_URL } from "../../../utils/Utils";

const CreateAsset = () => {
    const value = useSelector(selectValue);
    const history = useHistory();

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
                        axios
                            .post(API_URL + "items", value.asset)
                            .then((res) => {
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
