import styled from "@emotion/styled";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../../src/components/common/button";
import LinkButton from "../../src/components/common/linkButton";
import InputBox from "../../src/components/common/Input";
import { InputLabel } from "../../src/components/common/Input/index.css"

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data))
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input {...register("email")} /> */}
        {/* <input {...register("password")} /> */}
        {/* <InputBox icon="email" type="text" 
          {...register("email", {
            required: true,
          })} 
        />
        {errors?.email?.type === 'required' && <p>이메일을 입력하세요.</p>}
        <InputBox icon="password" type="password"
          {...register("password", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })} 
         />
         {errors?.password?.type === 'pattern' && <p>영문/숫자/특수문자 2가지 이상 조합 (8~20자)</p>} */}
         
        <InputLabel>
          <span className="icon_label">
            <i className={`sprite email`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="text" 
              {...register("email", {
                required: true,
              })}
            />
          </span>
        </InputLabel>
        {errors?.email?.type === 'required' && <p>이메일을 입력하세요.</p>}

        <InputLabel>
          <span className="icon_label">
            <i className={`sprite password`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="password" 
              {...register("password", {
                required: true,
                maxLength: 20,
                pattern: /^(?=.*[a-z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,20}$/i,
              })} 
            />
          </span>
        </InputLabel>
        {errors?.password?.type === 'pattern' && <p>영문/숫자/특수문자 2가지 이상 조합 (8~20자)</p>}
        {/* {errors?.password?.type === 'pattern' && <p>3개 이상 연속되거나 동일한 문자/숫자 제외</p>} */}
        {/* {errors?.password?.type === 'pattern' && <p>아이디(이메일) 제외</p>} */}

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
