import { FieldValues, useForm } from "react-hook-form";
import { Form } from "antd";
import PasswordInput from "../Inputs/InputsOptions/PasswordInput";
import EmailInput from "../Inputs/InputsOptions/EmailInput";
import SubmitButton from "../../../shared/SubmitButton/SubmitButton";
import styles from "./LoginForm.module.scss";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { loginActions } from "../../../redux/slices/login/login.slice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (userData: FieldValues) => {
    const loginAction = loginActions.login({
      request: {
        email: userData.email,
        password: userData.password,
      },
    });
    dispatch(loginAction);
  };

  return (
    <div>
      <Form
        className={styles.form}
        role="form"
        onFinish={handleSubmit(onSubmit)}
      >
        <EmailInput control={control} />
        <PasswordInput
          name="password"
          placeholder="Password"
          control={control}
        />
        <SubmitButton text="Login" disabled={isValid} />
      </Form>
    </div>
  );
};

export default LoginForm;