/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Image } from "@/components/simpleComponents/Image/Image";
import { Button } from "@/components/simpleComponents/Button/Button";
import { Typography } from "@/components/simpleComponents/Typography/Typography";
import { TableNumText } from "@/components/TableNumText/TableNumText";
import { TableCourses } from "@/components/TableCourses/TableCourses";
import { Ementor } from "@/components/Ementor/Ementor";
import { Footer } from "@/components/generalComponents/Footer/Footet";
import { SocialIcons } from "@/components/SocialIcons/SocialIcons";
import { A } from "@/components/simpleComponents/A/A";
import { Header } from "@/components/generalComponents/Header/Header";
import { BackPicText } from "@/components/BackPicText/BackPicText";

export default function Home() {
  return (
    <>
      {/*Меню навигации - Header*/}
      <Header pageTheme="general" />

      {/*Первый блок*/}

      <div className="firstBlock">
        <div>
          <SocialIcons
            position="vertical"
            color="white"
            className="socialIcons"
          />
          <div>
            <Image
              size="m"
              rounding="top-right-80"
              imageUrl='url("./images/1.jpg")'
            />
          </div>
        </div>

        <div className="firstBlockMiddle">
          <Ementor color="white" />
          <Typography
            color="light-gray"
            size="header"
            position="center"
            lineHeight="lh69"
            className="firstBlockHeader"
          >
            Образовательная онлайн-платформа
          </Typography>
          <Typography position="center" color="light-gray">
            Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим
            другим направлениям
          </Typography>
          <Button>Все направления</Button>
        </div>

        <div className="firstBlockRight">
          <div>
            <Image
              size="m"
              rounding="top-left-80"
              imageUrl='url("./images/2.jpg")'
            />
          </div>
          <div className="firstBlockArrowDown">
            <A
              href="#down"
              color="white"
              size="s14"
              position="center"
              className="arrowDownText"
            >
              Листать вниз
            </A>
            <A href="#down">
              <img src="./arrowDown.svg" />
            </A>
          </div>
        </div>
      </div>

      {/*Второй блок*/}

      <div className="standartBlock">
        <div className="secondBlockNums" id="down">
          <TableNumText
            num1="100+"
            text1="теоритических и практических курсов для разного уровня"
            num2="3000"
            text2="часов видео-лекций и вебинаров от лучших преподавателей"
            num3="15"
            text3="направлений обучения востребованным профессиям"
            num4="2000"
            text4="учеников уже занимаются на нашей платформе"
          ></TableNumText>
        </div>

        <div className="secondBlockBottom">
          <div className="secondBlockText">
            <Typography size="header" lineHeight="lh58">
              Учитесь у лучших
            </Typography>
            <Typography>
              Наши преподаватели – профессионалы, которые добились успеха в
              своей области. Лид-дизайнеры известных студий, маркетологи
              крупнейших компаний, редакторы популярных медиа: получайте опыт из
              первых рук, в любое время. Кураторы курсов – наши лучшие
              выпускники, будут помогать и поддерживать вас на протяжении всего
              обучения.
            </Typography>
            <Button color="green" position="left">
              Все преподаватели
            </Button>
          </div>
          <div className="pictures">
            <div>
              <Image
                size="s"
                rounding="bottom-left-80"
                imageUrl='url("./photo/1.jpg")'
              ></Image>
              <Typography size="s14" position="center" lineHeight="lh18">
                Катя, ведущий дизайнер Tail Group
              </Typography>
            </div>
            <div>
              <Image
                size="s"
                rounding="diagonal-80"
                imageUrl='url("./photo/2.jpg")'
              ></Image>
              <Typography size="s14" position="center" lineHeight="lh18">
                Марина, маркетолог Headers Market
              </Typography>
            </div>
            <div>
              <Image
                size="s"
                rounding="bottom-right-80"
                imageUrl='url("./photo/3.jpg")'
              ></Image>
              <Typography size="s14" position="center" lineHeight="lh18">
                Сава, PR-менеджер Central Media
              </Typography>
            </div>
            <div>
              <Image
                size="s"
                rounding="top-left-80"
                imageUrl='url("./photo/4.jpg")'
              />
              <Typography size="s14" position="center" lineHeight="lh18">
                Паша, основатель LeadCompany
              </Typography>
            </div>
            <div>
              <Image
                size="s"
                rounding="diagonal-80"
                imageUrl='url("./photo/5.jpg")'
              ></Image>
              <Typography size="s14" position="center" lineHeight="lh18">
                Саша, главный редактор Just Journal
              </Typography>
            </div>
            <div>
              <Image
                size="s"
                rounding="top-right-80"
                imageUrl='url("./photo/6.jpg")'
              />
              <Typography size="s14" position="center" lineHeight="lh18">
                Лёня, ведущий разработчик Ymail
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/*Третий блок*/}

      <div className="standartBlock thirdBlock">
        <div>
          <Image
            size="l"
            rounding="top-right-120"
            imageUrl='url("./images/3.jpg")'
          />
        </div>
        <div className="thirdBlockText">
          <Typography
            size="header"
            position="left"
            color="light-gray"
            lineHeight="lh69"
          >
            Выбирайте свой формат обучения
          </Typography>
          <Typography size="s16" color="light-gray">
            Смотрите видео-лекции в удобное для вас время, обучайтесь на
            тренажере, участвуйте в интенсивных воркшопах с командой или
            проходите курс с гибким расписанием. На нашей платформе каждый
            найдет подходящий формат.
          </Typography>
          <Button position="left">Все курсы</Button>
        </div>
      </div>

      {/*Четвертый блок*/}
      <div className="standartBlock fourthBlock">
        <div>
          <Typography size="header" lineHeight="lh58">
            Популярные курсы
          </Typography>
        </div>
        <TableCourses
          text1="Motion design"
          text2="Таргет в Instagram"
          text3="Эффектные презентации"
          text4="SMM-стратегия"
          imageUrl1='url("./courses/pic1.png")'
          imageUrl2='url("./courses/pic2.png")'
          imageUrl3='url("./courses/pic3.png")'
          imageUrl4='url("./courses/pic4.png")'
        />
        <Button color="green">Все курсы</Button>
      </div>

      {/*Пятый блок*/}

      <BackPicText
        urlImg='url("./otherPics/photoNotebook.png")'
        header="Присоединяйтесь к E-Mentor сейчас"
        text="Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы
          подарим вам дополнительные лекции по любому направлению бесплатно!"
        buttonText="Выбрать тариф"
      />

      {/*Футер*/}
      <Footer />
    </>
  );
}
