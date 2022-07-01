import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Button from "../../src/components/common/button";

export default function LoginPage() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = () => {};

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <input {...register("password")} />
        <button type="submit">로그인</button>
        <a href="/auth/signup">회원가입</a>
        <Button title="test" size="sm" />
        <Button variant="primary" title="test" />
        <Button variant="secondary" size="lg" title="test" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
