import { Typography } from "../simpleComponents/Typography/Typography";
import { FaqBlock } from "./FaqBlock/FaqBlock";
import styles from "./FaqTable.module.css";

export const FaqTable = () => {
  return (
    <div className={styles.faqTableBlock}>
      <div className={styles.faqFirstBlock}>
        <Typography size="header" lineHeight="lh69">
          Часто задаваемые вопросы
        </Typography>
      </div>
      <div>
        <FaqBlock
          header="Я никогда не занимался анимацией. У меня получится?"
          text="Конечно! Этот курс рассчитан для новичков, для тех, кто еще совсем
            ничего не умеет. Курс интенсивный, но оно того стоит. Главное
            выполняйте домашнее задание в срок. Вам всегда будут помогать
            тренеры и кураторы. Все получится!"
        />
      </div>
      <div>
        <FaqBlock
          header="Насколько курс интенсивный? Я смогу совмещать с работой?"
          text="Курс довольно интенсивный, но, при большом желании, вы будете успевать
          все. Вам понадобится 2-3 свободных часа в день на изучение материала и
          выполнение домашних заданий."
        />
      </div>
      <div>
        <FaqBlock
          header="Какие программы мне нужны для обучения?"
          text=",kf kfjejfdejfgj igjirijguierjg ierjgivjrij"
        />
      </div>
      <div>
        <FaqBlock
          header="Есть ли рассрочка или дополнительные скидки?"
          text=",kf kfjejfdejfgj igjirijguierjg ierjgivjrij"
        />
      </div>
      <div>
        <FaqBlock
          header="Вы помогаете с трудоустройством?"
          text=",kf kfjejfdejfgj igjirijguierjg ierjgivjrij"
        />
      </div>
    </div>
  );
};
