import { USER_LOGIN } from "../../config/index";
import { useState } from "react";
import { TError, TLogin, TUseLoginProps } from "./types";
import { useNavigate } from "react-router-dom";
import Route, { ROUTE_CONFIG } from "../../app/route";

export const useLogin = (): TUseLoginProps => {
  const [from, setForm] = useState<TLogin>({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<TError>({
    email: "",
    password: "",
    Error: "",
  });
  const navigator = useNavigate();

  const isDisabledCheck = !from.email && !from.password;

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

  const handleSubmit = () => {
    if (
      USER_LOGIN.findIndex(
        (item) => item.email === from.email && item.password === from.password
      ) !== -1
    ) {
      setForm({ email: "", password: "" });
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
