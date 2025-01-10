import { useState } from "react";
import { TError, TLogin, TUseLoginProps } from "./types";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";
import { registerUser } from "../../services/api-service";
import { Toast } from "../../Common/toast";
import { MESSAGE_SUCCESS_REGISTER_SUCCESS } from "../../const";

export const useRegister = (): TUseLoginProps => {
  const [from, setForm] = useState<TLogin>({
    username: "",
    email: "",
    password: "",
    repeat_password: "",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<TError>({
    username: "",
    email: "",
    password: "",
    repeat_password: "",
    Error: "",
  });
  const navigator = useNavigate();

  const isDisabledCheck = !from.email && !from.password;

  /**
   * Function validate field
   * @param field: keyof TLogin @param value: string
   *
   */
  const validate = (field: keyof TLogin, value: string): string | null => {
    console.log("validate",from)
    switch (field) {
      case "email":
        if (!value) return "Email không được để trống. ";
        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if (!regex.test(value)) return "Email chưa đúng định dạng";
        break;
      case "password":
        if (!value) return "Password không được để trống. ";
        if (value.length < 8) {
          return "Mật khẩu phải có ít nhất 8 ký tự.";
        } else if (!/[A-Z]/.test(value)) {
          return "Mật khẩu phải chứa ít nhất một ký tự viết hoa.";
        } else if (!/[0-9]/.test(value)) {
          return "Mật khẩu phải chứa ít nhất một số.";
        } else if (!/[^A-Za-z0-9]/.test(value)) {
          return "Mật khẩu phải chứa ít nhất một ký tự đặc biệt.";
        }
        break;
      case "repeat_password":
        if (!value) return "Repeat password không được để trống. ";
        if (from.password !== value)
          return "Repeat password chưa trùng khớp. ";
        break;
      case "username":
        if (!value) return "Username không được để trống. ";
        break;

      default:
        break;
    }
    return null;
  };
  console.log(from);
  /**
   * Handle Change Input Value
   * @param field: keyof TLogin @param value: string
   *
   */
  const handleChange = (field: keyof TLogin, value: string) => {
    console.log("value", value);
    setForm((prev) => ({ ...prev, [field]: value }));
    const check = validate(field, value);
    setError((prev) => ({
      ...prev,
      [field]: check || null,
    }));
    if (check === null && isDisabledCheck == false && value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  /**
   * Handle Check Value After Submit
   *
   */
  const handleSubmit = async () => {
    try {
      const value = {
        username: from.username,
        email: from.email,
        password: from.password,
      };
      const response = await registerUser(value);
      if (response?.status == 200) {
        setForm({ ...from, password: "" });
        Toast("success", MESSAGE_SUCCESS_REGISTER_SUCCESS);
        setTimeout(() => {
          navigator(Route(ROUTE_CONFIG.LOGIN));
        }, 2000);
      } else {
        setForm({ ...from, password: "" });
        setError({
          username: "",
          email: "",
          password: "",
          repeat_password: "",
          Error: "Lỗi email or password không đúng",
        });
        setIsDisabled(true);
      }
    } catch (err) {}
  };
  return {
    email: from.email,
    password: from.password,
    isDisabled,
    error,
    handleChange,
    handleSubmit,
  };
};
