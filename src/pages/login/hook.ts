import { USER_LOGIN } from "../../config/index";
import { useState } from "react";
import { TError, TLogin, TUseLoginProps } from "./types";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";

export const useLogin = (): TUseLoginProps => {
  const [from, setForm] = useState<TLogin>({
    email: "",
    password: "",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m3on32ln4jw598_tn",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<TError>({
    email: "",
    password: "",
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
    switch (field) {
      case from.email:
        if (!value) return "Email không được để trống. ";
        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if (!regex.test(value)) return "Email chưa đúng định dạng";
        break;

      default:
        break;
    }
    return null;
  };

  /**
   * Handle Change Input Value
   * @param field: keyof TLogin @param value: string
   *
   */
  const handleChange = (field: keyof TLogin, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    const check = validate(field, value);
    if (check === null && isDisabledCheck == false && value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setError((prev) => ({
      ...prev,
      [field]: check || null,
    }));
  };

  /**
   * Handle Check Value After Submit
   *
   */
  const handleSubmit = () => {
    if (
      USER_LOGIN.findIndex(
        (item) => item.email === from.email && item.password === from.password
      ) !== -1
    ) {
      setForm({ ...from, password: "" });
      localStorage.setItem("profileData", JSON.stringify(from));
      navigator(Route(ROUTE_CONFIG.PRODUCT));
    } else {
      setForm({ ...from, password: "" });
      setError({
        email: "",
        password: "",
        Error: "Lỗi email or password không đúng",
      });
      setIsDisabled(true);
    }
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
