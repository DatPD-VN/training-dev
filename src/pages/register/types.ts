type TLoginProps = {
  text: string;
};

type TLoginConfig = {
  id: number;
  email: string;
  password: string;
  type: string;
};
type TLogin = {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
  image: string;
};

type TError = {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
  Error: string;
};
type TIsDisabled = {
  isDisabled: boolean;
};

type TUseLoginProps = {
  email: string;
  password: string;
  isDisabled: boolean;
  error: TError;
  handleChange: (field: keyof TLogin, value: string) => void;
  handleSubmit: () => void;
};

export type {
  TLoginProps,
  TUseLoginProps,
  TLogin,
  TError,
  TIsDisabled,
  TLoginConfig,
};
