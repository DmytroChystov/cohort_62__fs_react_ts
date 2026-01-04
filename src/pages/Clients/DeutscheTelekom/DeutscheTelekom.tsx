import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function DeutscheTelekom() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      Deutsche Telekom AG — немецкая телекоммуникационная компания, крупнейшая в
      Европе и третья по величине в мире. Предоставляет телекоммуникационные,
      информационные технологии, мультимедиа, информацию и развлечения,
      безопасность, продажу и агентские услуги. Работает в следующих
      географических и бизнес-сегментах: Германия, США, Европа, а также Systems
      Solutions и Group Headquarters & Group Services. Компания основана 2
      января 1995 года, штаб-квартира в Бонне, Германия. Отрасль:
      Телекоммуникационные услуги Рыночная капитализация: 69.2 млрд
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default DeutscheTelekom;
