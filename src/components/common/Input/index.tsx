import { InputLabel } from "./index.css"

export interface inputProps {
    icon?: 'email' | 'password' | 'name' | 'phone'
    type?: 'text' | 'number'
}

export default function InputBox({ icon, type }: inputProps){
  return (
    <InputLabel>
      <span className="icon_label">
        <i className={`sprite ${icon}`}></i>
      </span>
      <span className="validator">
        <i className="sprite valid"></i>
      </span>
      <span className="input_wrap">
        <input className="email" type={type} />
      </span>
    </InputLabel>
  )
}