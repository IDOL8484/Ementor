import { Button } from "../simpleComponents/Button/Button";
import { Typography } from "../simpleComponents/Typography/Typography";
import styles from "./backPicText.module.css";

interface BackPicTextProps {
  urlImg: string;
  header: string;
  text: string;
  buttonText: string;
}

export const BackPicText = ({
  urlImg,
  header,
  text,
  buttonText,
}: BackPicTextProps) => {
  return (
    <div
      className={styles.block}
      style={{
        backgroundImage: urlImg,
      }}
    >
      <div></div>
      <div className={styles.text}>
        <Typography size="header" lineHeight="lh69">
          {header}
        </Typography>
        <Typography>{text}</Typography>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};
