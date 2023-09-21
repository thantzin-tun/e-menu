import { motion } from "framer-motion";
import styled from "styled-components";

export const Indicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  background-color: #000;
  height: 5px;
  border-radius: 4px;
`;
