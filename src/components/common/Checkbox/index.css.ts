import styled from "@emotion/styled"

export const CheckboxItem = styled.div`
  & > .wrapper {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    width: 100%;
  }
  & > .wrapper input {
    display: none;
  }
  & > .wrapper label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.14;
    color: #333333;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 auto;
    margin-right: 25px;
  }
  & > .wrapper label.checkall {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.13;
    color: #111111;
  }  
  & > .wrapper label .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    outline: none;
  }
  & > .wrapper label .icon-chk {
    min-width: 20px;
    width: 20px;
    height: 20px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NjU5IC04MzYpIHRyYW5zbGF0ZSg2NjU5IDgzNikiPgogICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjE5IiBoZWlnaHQ9IjE5IiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjOTE5RUFCIiByeD0iNCIvPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwIiBkPSJNMCAxMkwxMiAxMiAxMiAwIDAgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRUFFREYwIiBkPSJNMTAuNDU2IDEuMjc2Yy4zNTQtLjM2OC45MjYtLjM2OCAxLjI4LjAwMS4zMjMuMzM5LjM1Ljg3LjA4IDEuMjRsLS4wODEuMDk2LTYuODE0IDcuMTFjLS4zMjUuMzQtLjgzNC4zNjctMS4xODkuMDgzTDMuNjQgOS43Mi4yNjIgNi4xNjZjLS4zNTEtLjM3LS4zNS0uOTcuMDA1LTEuMzM3LjMyNS0uMzM3LjgzNC0uMzYzIDEuMTg3LS4wOGwuMDkyLjA4NSAyLjczOCAyLjg4MiA2LjE3Mi02LjQ0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCA0KSIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgZmlsbC1vcGFjaXR5PSIwIiBkPSJNMCAwSDIwVjIwSDB6Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);
    margin-right: 8px;
  }
  & > .wrapper input:checked ~ * .icon-chk {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzU4IC04MzYpIHRyYW5zbGF0ZSg2NzU4IDgzNikiPgogICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMzQ2QUZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHJ4PSI0Ii8+CiAgICAgICAgICAgICAgICA8ZyBmaWxsPSIjRkZGIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjAiIGQ9Ik0wIDEyTDEyIDEyIDEyIDAgMCAweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCA0KSIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEwLjQ1NiAxLjI3NmMuMzU0LS4zNjguOTI2LS4zNjggMS4yOC4wMDEuMzIzLjMzOS4zNS44Ny4wOCAxLjI0bC0uMDgxLjA5Ni02LjgxNCA3LjExYy0uMzI1LjM0LS44MzQuMzY3LTEuMTg5LjA4M0wzLjY0IDkuNzIuMjYyIDYuMTY2Yy0uMzUxLS4zNy0uMzUtLjk3LjAwNS0xLjMzNy4zMjUtLjMzNy44MzQtLjM2MyAxLjE4Ny0uMDhsLjA5Mi4wODUgMi43MzggMi44ODIgNi4xNzItNi40NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNEOEQ4RDgiIGZpbGwtb3BhY2l0eT0iMCIgZD0iTTAgMEgyMFYyMEgweiIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
  }
  & .icon-right-arrow {
    display: table-cell;
    width: 16px;
    height: 16px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzIxMkIzNiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNS4xODEgMi4yMWMuMjMzLS4yNDguNjEtLjI3OC44NzgtLjA4MmwuMDY1LjA1MyA1LjY2NiA1LjMzNGMuMjYuMjQ0LjI3OC42NDUuMDU2LjkxMWwtLjA1Ni4wNi01LjY2NiA1LjMzM2MtLjI2OS4yNTItLjY5LjI0LS45NDMtLjAyOS0uMjMzLS4yNDctLjI0LS42MjYtLjAyOS0uODgxbC4wNTgtLjA2MUwxMC4zNiA4IDUuMjEgMy4xNTJjLS4yNDgtLjIzMy0uMjc4LS42MS0uMDgyLS44NzhsLjA1My0uMDY0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxMTUgLTgxNikgdHJhbnNsYXRlKDcxMTUgODE2KSIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwIiBkPSJNMCAxNkwxNiAxNiAxNiAwIDAgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MTE1IC04MTYpIHRyYW5zbGF0ZSg3MTE1IDgxNikiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
    cursor: pointer;
    float: right;
    border: 0;
    background-color: #fff;
    font-size: 0;
    flex-shrink: 0;
  }
`

export const Message = styled.span`
  font-size: 12px;
  line-height: 1.4;
  color: #555;
  margin-top: 6px;
  margin-left: 26px;
  display: block;
`