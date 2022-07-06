import styled from "@emotion/styled";

export const InputLabel = styled.label`
  display: block;
  position: relative;
  height: 48px;
  padding: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  transition: border-color .25s ease;

  &:focus-within {
    border-bottom: 2px solid #346aff;
  }
  &.error {
    border-bottom: 2px solid #e7223d;
  }

  & .sprite {
    overflow: hidden;
    display: inline-block;
    background-repeat: no-repeat;
    vertical-align: middle;
    color: transparent;
    text-indent: 1px;
    font-size: 1px;
    line-height: 1px;
    background-image: url(//img1a.coupangcdn.com/image/static/login/sprite-join.x1.20160902.png);
    background-image: url(//img1a.coupangcdn.com/image/static/login/sprite-join.20160902.svg),none;
    background-size: 86px 86px;
  }
  
  & .icon_label {
    position: relative;
    float: left;
    display: inline;
    min-width: 44px;
    _width: 44px;
    height: 100%;
    border-right: 1px solid #ccc;
    background-color: #fafafa;

    & > i {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    
    & > .email {
      width: 1px;
      height: 16px;
      margin: -8px 0 0 -10px;
      padding-left: 19px;
      background-position: -1px -1px;
    }
    & > .password {
      width: 1px;
      height: 20px;
      margin: -10px 0 0 -10px;
      padding-left: 19px;
      background-position: -22px -1px;
    }
    & > .name {
      width: 1px;
      height: 20px;
      margin: -10px 0 0 -10px;
      padding-left: 19px;
      background-position: -1px -22px;
    }
    & > .phone {
      width: 1px;
      height: 20px;
      margin: -10px 0 0 -10px;
      padding-left: 15px;
      background-position: -22px -22px;
    }
  }

  & .validator {
    position: relative;
    float: right;
    width: 44px;
    height: 100%;
  }

  & > .input_wrap {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;

    & > input {
      width: 100%;
      height: 48px;
      padding: 16px 0 12px;
      border: 0 none;
      background: none transparent;
      font-family: dotum,sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #111;
      font-weight: 700;
      text-indent: 12px;
    }
    & > input:focus {
      outline: none;
    }
  }
`