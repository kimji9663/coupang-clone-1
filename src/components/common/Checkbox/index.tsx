import styled from "@emotion/styled";
import { useState } from "react";
import { useFormContext } from "react-hook-form"
import { CheckboxItem, Message } from "./index.css"

interface User {
  userdata: any
  handleChange: () => void
}

export default function Checkbox({...props}: User): JSX.Element {

  const [single, setSingle] = useState(props.userdata);
  const {isChecked, index, name, required, label, arrow} = props.userdata

  const handleChecked = (e: any) => {
    let tempUser = e.name === props.userdata.name ? { isChecked: single } : e
    setSingle(tempUser);
  }
  
  return (
    <CheckboxItem key={index} id={`checkbox-item_${index}`}>
      <div className="wrapper">
        <input type="checkbox" id={`${index}`} aria-hidden="true" parent-id="" 
          name={name}
          checked={isChecked || false}
          onChange={handleChecked}
        />
        <label htmlFor={`${index}`}>
          <i aria-hidden="true" className="icon icon-chk"></i>
          <span aria-hidden="true">{required} {label}</span>
        </label>
        {arrow ? (
          <button className="icon icon-right-arrow" type="button" aria-haspopup="dialog" aria-label="약관 대화상자 열기">
          </button>
        ) : null}
      </div>
    </CheckboxItem>
  )
}