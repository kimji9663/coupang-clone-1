import React from "react";
import styled from "@emotion/styled";

const BasicButton = styled('button')`
  padding: 20px;
  background-color: hotpink;
  font-size: 20px;
  border-radius: 4px;
  color: #000,
  font-weight: bold;

  &.primary {
    background-color: #1976d2;
    color: #ffffff;
  }
  &.secondary {
    background-color: #ffffff;
    color: #1976d2;
  }
  
  &:hover {
      color: white;
  }
` 
// const BasicButton = styled('button')(
//   {
//     color: "#333"
//   },
//   props => ({
//   padding: 20,
//   backgroundColor: "hotpink",
//   fontSize: "1.2rem",
//   borderRadius: 4,
//   color: props.colorType,
// }))

export interface SizeTypes {
  sm?: {
    padding: string
    fontSize: string
  }
  md?: {
    padding: string
    fontSize: string
  }
  lg?: {
    padding: string
    fontSize: string
  }
}
const SizeProps: SizeTypes = {
  sm: {
    padding:'10px',
    fontSize: '1rem',
  },
  md: {
    padding:'20px',
    fontSize: '1.2rem',
  },
  lg: {
    padding:'30px',
    fontSize: '1.5rem',
  },
}

export interface ButtonTypes {
  variant?: string
  size?: 'sm' | 'md' | 'lg'
  title?: string
}

export default function Button({ variant, size, title }: ButtonTypes) {
  const sizeType = SizeProps[size || 'md']
  return (
    <BasicButton className={`${variant}`} style={sizeType}>{title} {size}</BasicButton>
  )
}