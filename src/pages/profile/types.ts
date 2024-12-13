type TUseProfileProps = {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleDelete: (name: string) => void;
  handleChangeGender: (gender: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLDivElement>) => void;
  profileData: TProfileData;
  isActiveNumber: boolean;
  isActiveEmail: boolean;
  successMessage: string;
};
type TProfileData = {
  userName: string;
  email: string;
  gender: string;
  image: string | ArrayBuffer | null;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  fullName: string;
  numberPhone: string;
};

export type { TUseProfileProps, TProfileData };
