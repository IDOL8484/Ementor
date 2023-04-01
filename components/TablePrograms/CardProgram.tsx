/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "../simpleComponents/Typography/Typography";

import styles from "./CardProgram.module.css";

interface CardProgramProps {
  header: string;
  text: string;
  urlImg: string;
}

export const CardProgram = ({ header, text, urlImg }: CardProgramProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgHeader}>
        <img style={{ backgroundImage: urlImg }} className={styles.img}></img>
        <Typography lineHeight="lh16">{header}</Typography>
      </div>
      <Typography size="s14" lineHeight="lh18">
        {text}
      </Typography>
    </div>
  );
};
