import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
          <button className="border-2 border-blue-500 text-blue-500 bg-white hover:!bg-blue-500 hover:!text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border-blue-600 dark:text-blue-600 dark:hover:!bg-blue-600 dark:hover:!text-white dark:focus:ring-blue-800 cursor-pointer text-center"
 onClick={() => changeLanguage("es")}>
              { t("common.spanish")}
          </button>
      <button className="border-2 border-blue-500 text-blue-500 bg-white hover:!bg-blue-500 hover:!text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:border-blue-600 dark:text-blue-600 dark:hover:!bg-blue-600 dark:hover:!text-white dark:focus:ring-blue-800 cursor-pointer text-center"
 onClick={() => changeLanguage("en")}>{t("common.english")}</button>
    </div>
  );
};

export default LanguageSwitcher;
