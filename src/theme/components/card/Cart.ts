import styled from "styled-components";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  img?: string;
}

export const Card = styled(motion.div)<CardProps>`
  border-radius: 20px;
  border: none;
  webkit-transform: translate3d(0, 0, 0);
  background-size: cover;
  border: 0px !important;
  background-position: center center !important;
  /* background-image: url(${(props) => props.img}); */
  /* height: 260px; */
  /* background-color: green; */
  object-fit: cover;
  position: relative;
  z-index: 5;
  /* transform: translateY(-80px); */
  transform: translateY(${(props) => (props.img ? "-80px" : "0")});
  padding-top: ${(props) => (props.img ? "0px" : "20px")};
  margin-bottom: ${(props) => (props.img ? "0px" : "100px")};

  /* transform: translateY(130px); */
`;

export const InnerCard = styled(motion.div)`
  background-color: #fff;
  background-image: none;
  margin: 0px 15px 10px 15px;
  padding-block: 10px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.1);
  z-index: 10;

  .information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 7px;
    .icon-container {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ImgBackground = styled(motion.img)`
  width: 100%;
  height: 260px;
  object-fit: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
`;
