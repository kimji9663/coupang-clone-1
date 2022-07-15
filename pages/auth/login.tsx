
import React, { useRef, useEffect } from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"
import Button from "../../src/components/common/button"
import LinkButton from "../../src/components/common/linkButton"
//import InputBox from "../../src/components/common/Input"
import { InputLabel } from "../../src/components/common/Input/index.css"
import { CheckboxItem, Message } from "../../src/components/common/Checkbox/index.css"


interface IFormInput {
  email: string
  password: string
  password_confirm: string
  name: string
  phone: string
}

export default function LoginPage() {
  const { 
    register, 
    handleSubmit, 
    watch, 
    setFocus,
    formState: { errors } 
  } = useForm<IFormInput>({ mode: "onChange" })

  const password = useRef({})
  password.current = watch("password", '')
  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data))
  }
  //console.log(watch('email'))

  useEffect(() => {
    setFocus("email")
  }, [setFocus])

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>         
        <InputLabel hasError={errors.email} className={`${errors.email ? "error" : null}`}>
          <span className="icon_label">
            <i className={`sprite email`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="text" placeholder="아이디(이메일)"
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "이메일을 올바르게 입력해주세요."
                }
              })}
            />
          </span>
        </InputLabel>
        {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}

        <InputLabel hasError={errors.password} className={`${errors.password ? "error" : null}`}>
          <span className="icon_label">
            <i className={`sprite password`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="password" placeholder="비밀번호"
              {...register("password", {
                required: "비밀번호를 입력하세요.",
                pattern: {
                  value: /^(?=.*[a-z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,20}$/i,
                  message: "영문/숫자/특수문자 2가지 이상 조합 (8~20자)",
                },
              })} 
            />
          </span>
        </InputLabel>
        {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}

        <Button type="submit" variant="contained" color="primary" title="로그인" />
        <LinkButton href="/auth/signup" variant="outlined" color="primary" title="회원가입" />
        {/* <Button type="submit" variant="contained" color="primary"  title="동의하고 가입하기" /> */}
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
