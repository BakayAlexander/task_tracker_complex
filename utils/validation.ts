export interface FormikValues {
  email: string;
  password: string;
}

export interface FormikValuesRegister extends FormikValues {
  first_name: string;
  last_name: string;
  avatar?: string;
}

type FormikErrors = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
};

export const validation = (values: FormikValues) => {
  const errors: FormikErrors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }
  return errors;
};

export const validationRegister = (values: FormikValuesRegister) => {
  const errors: FormikErrors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }
  if (!values.first_name) {
    errors.first_name = 'Required';
  } else if (!values.password.trim().length) {
    errors.first_name = 'Name could not be empty';
  }
  if (!values.last_name) {
    errors.last_name = 'Required';
  } else if (!values.password.trim().length) {
    errors.last_name = 'Name could not be empty';
  }
  if (values.avatar) {
    if (
      !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
        values.avatar
      )
    ) {
      errors.avatar = 'Please put URL';
    }
  }
  return errors;
};
