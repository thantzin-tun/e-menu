import { type } from "os";
import styled from "styled-components";

type CategoryBarStyleProps = {};

export const CategoryBarStyle = styled.div<CategoryBarStyleProps>`
  overflow-x: scroll;
  -ms-overflow-style: auto;
  overflow-y: hidden;
  width: 100%;
  /* height: 30px; */
  margin-top: 0;
  padding: 15px 20px 15px 20px;
  position: fixed;
  top: 50px;
  /* bottom: 0; */
  /* top: 65px; */
  /* position: sticky;
  bottom: 0; */
  z-index: 9 !important;
  background-color: #fff;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.1);

  align-items: center;
  border-bottom: 2px solid #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      display: inline-block;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      &.selected_category {
        color: #000;
        font-weight: bolder;
      }
      &:last-child {
        margin-right: 30px;
      }
    }
  }
`;
