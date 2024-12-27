import { useEffect, useState } from "react";
import { TProfileData, TUseProfileProps } from "./types";
import { Toast } from "../../Common/toast";
import { validationFileUpload } from "../../Common/validation-upload-file";

export const useProfile = (): TUseProfileProps => {
  const [profileData, setProfileData] = useState<TProfileData>({
    userName: "",
    email: "",
    gender: "",
    image: "",
    birthDay: 1,
    birthMonth: 1,
    birthYear: 1,
    fullName: "",
    numberPhone: "",
  });
  const [isActiveNumber, setIsActiveNumber] = useState(false);
  const [isActiveEmail, setIsActiveEmail] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessageUploadFile, setErrorMessageUploadFile] = useState("");
  const user = JSON.parse(localStorage.getItem("profileData") as string);

  useEffect(() => {
    setSuccessMessage("");
    try {
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
        if (birthday) {
          const [day, month, year] = birthday?.split("-").map(Number);
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
          gender: gender || "",
          birthDay: 1,
          birthMonth: 1,
          birthYear: 1,
          fullName: fullName || "",
          image: image || "",
          numberPhone: numberPhone || "",
        });
      }
    } catch (err) {
      console.error("Error parsing user data:", err);
    }
  }, []);

  /**
   * Handle Change Images
   * @param event: React.ChangeEvent<HTMLInputElement>
   *
   */
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    if (file) {
      const validation = validationFileUpload(event);
      if (validation?.isValid) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileData((prevData) => ({
            ...prevData,
            image: reader.result,
          }));
        };
        reader.readAsDataURL(file);
        setErrorMessageUploadFile(validation?.message as string);
      } else {
        setErrorMessageUploadFile(validation?.message as string);
      }
    }
  };

  /**
   * Handle Change Fields
   *
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handle Change Birthday
   * @param value: number @param id: string
   *
   */
  const handleChangeBirthday = (value: number, id: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  /**
   * Handle Delete Field
   * @param name: string
   *
   */
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

  /**
   * Handle Change Gender
   * @param gender: string
   *
   */
  const handleChangeGender = (gender: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      gender,
    }));
  };

  /**
   * Handle Submit Information Profile
   * @param event: React.MouseEvent<HTMLDivElement>
   *
   */
  const handleSubmit = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (user) {
      const updatedProfileData = {
        ...profileData,
        birthday: `${profileData.birthDay}-${profileData.birthMonth}-${profileData.birthYear}`,
      };
      Toast("success", "Hồ sơ đã được lưu thành công!");
      localStorage.setItem("profileData", JSON.stringify(updatedProfileData));
    } else {
      Toast("error", "Vui lòng đăng nhập để thực hiện!");
    }
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
    successMessage,
    handleChangeBirthday,
    errorMessageUploadFile,
  };
};
