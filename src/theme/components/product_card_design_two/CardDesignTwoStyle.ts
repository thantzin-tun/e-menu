import styled from "styled-components";
import { motion } from "framer-motion";
interface CardDesignTwoStyleProps {
  isImg?: boolean;
}

export const CardDesignTwoStyle = styled(motion.div)<CardDesignTwoStyleProps>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-block: ${({ isImg }) => (isImg ? 10 : 15)}px;
`;

export const CardImgTwo = styled.img`
  width: 30%;
  border-radius: 10px;
`;

export const CardBodyTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;
