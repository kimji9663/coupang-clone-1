import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import Link from "next/link";
import { Url, UrlObject } from "url";

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
    padding:'14px 0 15px',
    fontSize: '0.8rem',
  },
  md: {
    padding:'16px 0 17px',
    fontSize: '1.05rem',
  },
  lg: {
    padding:'18px 0 19px',
    fontSize: '1.2rem',
  },
}

const BasicLink = styled.a`
  cursor: pointer;
  padding: 16px 0 17px;
  border-radius: 2px;
  border-width: 1px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 15%);
  text-align: center;

  &.primary {
    border-color: #ccc;
    background-color: #346aff;
    color: #346aff;
  }
  &.secondary {
    border-color: #2e7d32;
    background-color: #2e7d32;
    color: #2e7d32;
  }

  &.contained {
    color: #fff;
    box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  }
  &.outlined {
    background: none;
    border-style: solid;
  }
` 

export interface ButtonTypes {
  variant?: 'contained' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  title?: string
  href: string
}

export default function LinkButton({ variant, size, color, title, href }: ButtonTypes ) {
  const sizeType = SizeProps[size || 'md']
  return (
    <Link href={href}>
      <BasicLink className={`${variant} ${color}`} style={sizeType}>{title}</BasicLink>
    </Link>
  )
}
