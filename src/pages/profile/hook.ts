import { useEffect, useState } from "react";
import { TProfileData, TUseProfileProps } from "./types";

export const useProfile = (): TUseProfileProps => {
  const [profileData, setProfileData] = useState<TProfileData>({
    userName: "",
    email: "",
    gender: "",
    image: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    fullName: "",
    numberPhone: "",
  });
  const [isActiveNumber, setIsActiveNumber] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("profileData") as string);
      if (user) {
        const {
          birthday,
          image,
          userName,
          email,
          gender,
          numberPhone,
          fullName,
        } = user;
        const [day, month, year] = birthday.split("-").map(Number);
        if (numberPhone == "") {
          setIsActiveNumber(false);
        } else {
          setIsActiveNumber(true);
        }
        if (email == "") {
          setIsActiveEmail(false);
        } else {
          setIsActiveEmail(true);
        }
        setProfileData({
          userName: userName || "",
          email: email || "",
          birthDay: day || "",
          birthMonth: month || "",
          birthYear: year || "",
          gender: gender || "",
          fullName: fullName || "",
          image: image || "",
          numberPhone: numberPhone || "",
        });
      }
    } catch (err) {
      console.error("Error parsing user data:", err);
    }
  }, []);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = (name: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [name]: "",
    }));
    if (name == "numberPhone") {
      setIsActiveNumber(false);
    } else if (name == "email") {
      setIsActiveEmail(false);
    }
  };
  const handleChangeGender = (gender: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      gender,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const updatedProfileData = {  
      ...profileData,
      birthday: `${profileData.birthDay}-${profileData.birthMonth}-${profileData.birthYear}`,
    };
    setSuccessMessage('Hồ sơ đã được lưu thành công!');
    localStorage.setItem("profileData", JSON.stringify(updatedProfileData));
  };

  return {
    handleImageChange,
    handleChange,
    handleDelete,
    handleChangeGender,
    handleSubmit,
    profileData,
    isActiveNumber,
    isActiveEmail,
    successMessage

  };
};
