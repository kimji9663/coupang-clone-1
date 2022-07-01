import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

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

const BasicButton = styled.button`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;

  &.primary {
    border-color: #1976d2;
    background-color: #1976d2;
    color: #1976d2;
  }
  &.secondary {
    border-color: #2e7d32;
    background-color: #2e7d32;
    color: #2e7d32;
  }

  &.contained {
    border: none;
    color: #fff;
  }
  &.outlined {
    background: none;
    border-width: 1px;
    border-style: solid;
  }
  
  &:hover {
      color: white;
  }
` 

export interface ButtonTypes {
  variant?: 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  title?: string
}

export default function Button({ variant, size, color, title }: ButtonTypes) {
  const sizeType = SizeProps[size || 'md']
  return (
    <>
      <BasicButton className={`${variant} ${color}`} style={sizeType}>{title} {size ? size : 'md'}</BasicButton>
    </>
  )
}