import { toast } from "react-toastify";


// module.exports = Toast;

export const  Toast = () => {
    toast.success(" Thêm Thành Công!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
}