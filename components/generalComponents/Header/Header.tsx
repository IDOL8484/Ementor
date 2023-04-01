import { Ementor } from "@/components/Ementor/Ementor";
import { A } from "@/components/simpleComponents/A/A";

import styles from "./Header.module.css";

interface HeaderProps {
  pageTheme: "general" | "simple";
}

type Header = "general" | "simple";
export const Header = ({ pageTheme }: HeaderProps) => {
  const Navigation = () => {
    return (
      <nav className={styles.nav}>
        <A href="./">О нас</A>
        <A href="#">Платформа</A>
        <A href="./cources">Курсы</A>
        <A href="#">Лекции</A>
        <A href="#">Тарифы</A>
        <A href="#">Блог</A>
        <A href="#">Контакты</A>
      </nav>
    );
  };

  return (
    <>
      {pageTheme === "general" ? (
        <header className={styles.headerGeneral}>
          <Navigation />
        </header>
      ) : (
        <header className={styles.headerSimple}>
          <Ementor />
          <Navigation />
        </header>
      )}
    </>
  );
};
