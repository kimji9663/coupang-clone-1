
import React, { useRef, useEffect, useState } from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"
import Button from "../../src/components/common/button"
import LinkButton from "../../src/components/common/linkButton"
import InputBox from "../../src/components/common/Input"
import { InputLabel } from "../../src/components/common/Input/index.css"
import { CheckboxItem, Message } from "../../src/components/common/Checkbox/index.css"
import Checkbox from "../../src/components/common/Checkbox"


interface IFormInput {
  email: string
  password: string
  password_confirm: string
  name: string
  phone: string
}

interface UserData {
  name: string
  label: string
  isChecked: boolean
  required: "[필수]" | "[선택]"
  arrow?: boolean
  user?: any
}

const userData: UserData[] = [
  { name:"agree1", label: "만 14세 이상입니다", isChecked: false, required: "[필수]" },
  { name:"agree2", label: "쿠팡 이용약관 동의", isChecked: false, required: "[필수]", arrow: true },
  { name:"agree3", label: "전자금융거래 이용약관 동의", isChecked: false, required: "[필수]", arrow: true },
  { name:"agree4", label: "개인정보 수집 및 이용 동의", isChecked: false, required: "[필수]", arrow: true },
  { name:"agree5", label: "개인정보 제3자 제공 동의", isChecked: false, required: "[필수]", arrow: true },
  { name:"agree6", label: "광고성 목적의 개인정보 수집 및 이용 동의", isChecked: false, required: "[선택]", arrow: true },
];

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


  const [users, setUsers] = useState([] as UserData[]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const onHandleChange = (e: any) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      console.log(name, checked);
    }
  };

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

        <InputLabel hasError={errors.password_confirm} className={`${errors.password_confirm ? "error" : null}`}>
          <span className="icon_label">
            <i className={`sprite password`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="password" placeholder="비밀번호 확인"
              {...register("password_confirm", {
                required: "확인을 위해 새 비밀번호를 다시 입력해주세요.",
                validate: (value) => value === password.current || "비밀번호가 일치하지 않습니다.",
              })} 
            />
          </span>
        </InputLabel>
        {errors.password_confirm && <p style={{color: "red"}}>{errors.password_confirm.message}</p>}

        <InputLabel hasError={errors.name} className={`${errors.name ? "error" : null}`}>
          <span className="icon_label">
            <i className={`sprite name`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="text" placeholder="이름"
              {...register("name", {
                required: "이름을 정확히 입력하세요.",
              })} 
            />
          </span>
        </InputLabel>
        {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}

        <InputLabel hasError={errors.phone} className={`${errors.phone ? "error" : null}`}>
          <span className="icon_label">
            <i className={`sprite phone`}></i>
          </span>
          <span className="validator">
            <i className="sprite valid"></i>
          </span>
          <span className="input_wrap">
            <input type="text" placeholder="전화번호"
              {...register("phone", {
                required: "휴대폰 번호를 정확하게 입력하세요.",
                pattern: {
                  value: /^\d{3}\d{3,4}\d{4}$/,
                  message: "휴대폰 번호를 정확하게 입력하세요.",
                }
              })} 
            />
          </span>
        </InputLabel>
        {errors.phone && <p style={{color: "red"}}>{errors.phone.message}</p>}

        <div className="g-terms-checkbox">
          <div className="checkall">
            <CheckboxItem id="c-checkbox-item_checkall">
              <div className="wrapper">
                <input type="checkbox" id="chk_checkall" aria-hidden="true" 
                  name="allSelect"
                  checked={users.filter((user) => user?.isChecked !== true).length < 1}
                  onChange={onHandleChange}
                />
                <label htmlFor="chk_checkall" role="checkbox" aria-label="모두 동의합니다" aria-checked="false" className="checkall">
                  <i aria-hidden="true" className="icon icon-chk"></i>
                  <span aria-hidden="true">모두 동의합니다.</span>
                </label>
              </div>
            </CheckboxItem>
            <Message>
              동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
            </Message>
          </div>

          <ul className="terms">
            {/* {users.map((user, index) => (
              <Checkbox key={index} userdata={user} handleChange={() => onHandleChange} />
            ))} */}
                        
            {users.map((user, index) => (
              <CheckboxItem key={index} id={`checkbox-item_${index}`}>
                <div className="wrapper">
                  <input type="checkbox" id={`${index}`} aria-hidden="true" parent-id="" 
                    name={user.name}
                    checked={user?.isChecked || false}
                    onChange={onHandleChange}
                  />
                  <label htmlFor={`${index}`}>
                    <i aria-hidden="true" className="icon icon-chk"></i>
                    <span aria-hidden="true">{user.required} {user.label}</span>
                  </label>
                  {user.arrow ? (
                    <button className="icon icon-right-arrow" type="button" aria-haspopup="dialog" aria-label="약관 대화상자 열기">
                    </button>
                  ) : null}
                </div>
              </CheckboxItem>
            ))}
          </ul>
        </div>

        {/* <Button type="submit" variant="contained" color="primary" title="로그인" />
        <LinkButton href="/auth/signup" variant="outlined" color="primary" title="회원가입" /> */}
        <Button type="submit" variant="contained" color="primary"  title="동의하고 가입하기" />
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
