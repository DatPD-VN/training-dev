type TLoginProps = {
  text: string;
};

type TLoginConfig = {
  email: string;
  password: string;
};
type TLogin = {
  email: string;
  password: string;
  image: string;
};

type TError = {
  email: string;
  password: string;
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
