/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { BackPicText } from "@/components/BackPicText/BackPicText";
import { FaqTable } from "@/components/FaqTable/FaqTable";
import { Footer } from "@/components/generalComponents/Footer/Footet";
import { Header } from "@/components/generalComponents/Header/Header";
import { Button } from "@/components/simpleComponents/Button/Button";
import { Image } from "@/components/simpleComponents/Image/Image";
import { Typography } from "@/components/simpleComponents/Typography/Typography";
import { TableNumText } from "@/components/TableNumText/TableNumText";
import { TablePrograms } from "@/components/TablePrograms/TablePrograms";

export default function cources() {
  return (
    <>
      <Header pageTheme="simple" />

      {/* Первый блок */}
      <div className="courcesPageFirstBlock">
        <Typography>
          Здесь будет указан путь на страницу. Бла бла бла и все такое .....
        </Typography>
        <Typography
          size="header"
          lineHeight="lh69"
          className="courcesPageFirstBlockTypo"
        >
          Практический курс по анимации для начинающих motion-дизайнеров
        </Typography>
        <div>
          <img
            className="courcesPageImage"
            style={{ backgroundImage: 'url("./courcesPic.png")' }}
          ></img>
        </div>
      </div>

      {/* Второй блок */}
      <div className="courcesPageSecondBlock">
        <div className="courcesPageSecondBlockText">
          <Typography size="s22" lineHeight="lh28">
            Мечтаете оживлять статичные картинки и интерфейсы? Тогда этот курс
            для вас! На интенсивном 8-недельном курсе по анимации вы получите
            мощную базу.
          </Typography>
          <Typography>
            Анимация шейпов и текста, работа с векторными фигурами и растровыми
            изображениями, настройка программы After Effects и эффектный монтаж.
            Всему этому вы научитесь на курсе Motion Design. Вместе с
            преподавателями вы изучите принципы анимации и разберетесь с After
            Effects раз и навсегда.
          </Typography>
          <Typography>
            К концу курса вы сделаете несколько анимационных шотов и большой
            итоговый проект, соберете достойное портфолио. За 8 недель обучения
            вы получите полную базу по motion-дизайну, а наши кураторы будут
            помогать вам на протяжении всего обучения.
          </Typography>
          <Typography>
            Обучение проходит в небольших группах, к каждой привязан куратор,
            один из наших лучших выпускников. У вас всегда будет поддержка и
            обратная связь. Помимо фидбека от куратора, на каждое домашнее
            задание вы получаете разбор тренера.
          </Typography>
        </div>
        <TableNumText
          num1="8"
          text1="недель интенсивного обучения,
занятия 3 раза в неделю"
          num2="24"
          text2="урока и домашних заданий
с проверкой от тренера"
          num3="7"
          text3="работ в портфолио по окончании курса, 6 шотов и 1 итоговая работа"
          num4="4"
          text4="студента в каждой группе, у каждой группы свой куратор"
        />
      </div>

      {/* Третий блок */}

      <div className="standartBlock courcesPageThirdBlock">
        <div>
          <Typography size="header" color="white" lineHeight="lh69">
            Актуальные знания
          </Typography>
          <Typography color="white" className="courcesPageThirdBlockText">
            Мы понимаем, как быстро меняются тренды и появляются обновления.
            Поэтому мы всегда следим за всеми новинками, добавляем в программу
            то, что требуют топовые компании. Мы предлагаем вам только
            актуальные знания, чтобы вы были впереди планеты всей.{" "}
          </Typography>
          <Button>Купить курс</Button>
        </div>
        <div>
          <Image
            size="xl"
            rounding="top-left-120"
            imageUrl='url("./otherPics/people.jpg")'
          />
        </div>
      </div>

      {/* Четвертый блок */}
      <div className="standartBlock courcesPageFourthBlock">
        <Typography size="header" lineHeight="lh58">
          На курсах вы научитесь
        </Typography>
        <TablePrograms />
        <Button color="green">Программа курса</Button>
      </div>

      {/* Пятый блок */}

      <BackPicText
        urlImg='url("./otherPics/laughingGirl.png")'
        header="Скидка 40%
до 30 июня"
        text="Успейте приобрести курс по выгодной цене! Вы можете забронировать место на курсе со скидкой, а остальную сумму оплатить в рассрочку на 12 или 24 месяца."
        buttonText="Купить курс"
      />

      {/* Шестой блок - ЧаВо */}

      <FaqTable />

      {/* Футер */}
      <Footer />
    </>
  );
}
