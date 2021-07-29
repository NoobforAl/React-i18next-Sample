import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./translate/translate";

const Page = () => {
  const [Language, setLanguage] = useState("fa");

  const { t, i18n } = useTranslation();

  function ChangLanguage() {
    if (Language === "en") {
      setLanguage("fa");
      i18n.changeLanguage(Language);
    } else {
      setLanguage("en");
      i18n.changeLanguage(Language);
    }
  }

  return (
    <>
      <span>Click Here ->> </span>{" "}
      <button onClick={() => ChangLanguage()}> {Language} </button>
      <h1>{t("title")}</h1>
      <p>{t("text")}</p>
      <span>{t("auther")}</span>
    </>
  );
};

export default Page;
