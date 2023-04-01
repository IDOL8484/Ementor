/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { CardProgram } from "./CardProgram";
import styles from "./TablePrograms.module.css";

export const TablePrograms = () => {
  return (
    <div className={styles.TablePrograms}>
      <CardProgram
        urlImg='url("./iconPrograms/icon1.svg")'
        header="Анимировать объекты"
        text="Узнаете принципы создания инфографики, персонажной 2D флэт-анимации."
      ></CardProgram>
      <CardProgram
        urlImg='url("./iconPrograms/icon2.svg")'
        header="Работать с кадром"
        text="Изучите основные принципы анимации и работы с объектами, их движением в кадре."
      ></CardProgram>
      <CardProgram
        urlImg='url("./iconPrograms/icon3.svg")'
        header="Работать в After Effects"
        text="Научитесь реализовывать ваши идеи с помощью популярной программы для анимации"
      ></CardProgram>
      <CardProgram
        urlImg='url("./iconPrograms/icon4.svg")'
        header="Работать со звуком"
        text="Освоите инструменты работы, сможете редактировать музыку
в своем проекте."
      ></CardProgram>
    </div>
  );
};
