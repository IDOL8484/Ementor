/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Typography } from "../../simpleComponents/Typography/Typography";

import styles from "./FaqBlock.module.css";

interface FaqBlockProps {
  header: string;
  text: string;
}

export const FaqBlock = ({ header, text }: FaqBlockProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open === false ? (
        <div className={styles.faqBlock}>
          <Typography size="s22" lineHeight="lh28">
            {header}
          </Typography>
          <div>
            <img
              className={styles.img}
              style={{ backgroundImage: 'url("./openClose/close.svg")' }}
              onClick={() => setOpen(true)}
            ></img>
          </div>
        </div>
      ) : (
        <div className={styles.faqBlock}>
          <div className={styles.text}>
            <Typography size="s22" lineHeight="lh28">
              {header}
            </Typography>
            <Typography size="s16" lineHeight="lh20">
              {text}
            </Typography>
          </div>
          <div>
            <img
              className={styles.img}
              style={{ backgroundImage: 'url("./openClose/open.svg")' }}
              onClick={() => setOpen(false)}
            ></img>
          </div>
        </div>
      )}
    </>
  );
};
