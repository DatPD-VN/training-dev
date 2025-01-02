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
