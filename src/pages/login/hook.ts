import { USER_LOGIN } from "../../config/index";
import { useMemo, useState } from "react";
import { TError, TIsDisabled, TLogin, TUseLoginProps } from "./types";
import { useNavigate } from "react-router-dom";

export const UseLogin = (): TUseLoginProps => {
  const [from, setForm] = useState<TLogin>({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<TError>({ email: "", password: "" ,Error : "" });
  // const [error, setError] = useState<string | null>(null);
  const navigator = useNavigate();

  // const isDisabled = useMemo(() => !from.email || !from.password, [from]);

  const validate = (field: keyof TLogin, value: string) : string | null => {
    switch (field) {
      case "email" :
        if (!value) return "Email không được để trống. "
        const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if (!regex.test(value)) return "Email chưa đúng định dạng"
        break;
      case "password" :
        if (!value) return "Password không được để trống. "
        if (value.length  < 8) return "Password phải có hơn 8 kí tự"
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (!regularExpression.test(value)) return "Password cần phải chứa chữ hoa, chữ thường, số, kí tự đặc biệt "
        break;

      default:
        break;

    }

    return null;
      
  } 

  const handleChange = (field: keyof TLogin, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    const check = validate(field,value);
    if (check == null) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
    setError((prev) => ({
      ...prev,
      [field] : check || null
    }));

    () => {

    }


  };

  const handleSubmit = () => {
 
    if (
      USER_LOGIN.findIndex(
        (item) => item.email === from.email && item.password === from.password
      ) !== -1
    ) {
      setForm({email : "" ,password : ""})
      navigator("/training-dev/ec/dashboard");
    } else {
      setForm({email : "" ,password : ""})
      setError({email : "" ,password : "" ,Error :"Lỗi email or password không đúng"});
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
