import styled from "@emotion/styled";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../../src/components/common/button";
import LinkButton from "../../src/components/common/linkButton";
import InputBox from "../../src/components/common/Input";

export default function LoginPage() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = () => {
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("email")} /> */}
        {/* <input {...register("password")} /> */}
        <InputBox icon="email" type="text" {...register("email")} />
        <InputBox icon="password" type="text" {...register("password")} />
        <InputBox icon="name" type="text" />
        <InputBox icon="phone" type="text" />
        <Button type="submit" variant="contained" color="primary" title="로그인" />
        <LinkButton href="/auth/signup" variant="outlined" color="primary" title="회원가입" />
        <Button variant="contained" color="primary"  title="동의하고 가입하기" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 290px;
  max-width: 460px;
  margin: 0 auto;
  
  & form > * {
    display: block;
    width: 100%;
  }

  a, button, label {
    margin-top: 18px;
  }
`;
