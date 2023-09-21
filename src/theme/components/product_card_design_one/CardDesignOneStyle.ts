import styled from "styled-components";

interface CardDesignOneStyleProps {}

export const CardDesignOneStyle = styled.div<CardDesignOneStyleProps>`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background: center/cover no-repeat;
  object-fit: cover;
`;

export const CardBody = styled.div`
  margin-block: 10px;
  span {
    margin-block: 5px;
  }
`;
