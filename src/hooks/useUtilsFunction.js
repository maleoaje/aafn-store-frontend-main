import dayjs from "dayjs";
import Cookies from "js-cookie";
import useGetSetting from "./useGetSetting";

const useUtilsFunction = () => {
  // Force English-only language
  const lang = "en";
  Cookies.set("_lang", "en", { sameSite: "None", secure: true });

  const { globalSetting } = useGetSetting();

  const currency = globalSetting?.default_currency || "$";

  //for date and time format
  const showTimeFormat = (data, timeFormat) => {
    return dayjs(data).format(timeFormat);
  };

  const showDateFormat = (data) => {
    return dayjs(data).format(globalSetting?.default_date_format);
  };

  const showDateTimeFormat = (data, date, time) => {
    return dayjs(data).format(`${date} ${time}`);
  };

  //for formatting number

  const getNumber = (value = 0) => {
    return Number(parseFloat(value || 0).toFixed(2));
  };

  const getNumberTwo = (value = 0) => {
    return parseFloat(value || 0).toFixed(globalSetting?.floating_number || 2);
  };

  //for translation - English only
  const showingTranslateValue = (data) => {
    if (data === undefined) return undefined;

    // If data is already a string, return it
    if (typeof data === 'string') return data;

    // If data is an object, ONLY return English or en values
    if (typeof data === 'object' && data !== null) {
      return data?.English || data?.en || '';
    }

    return '';
  };

  const showingImage = (data) => {
    return data !== undefined && data;
  };

  const showingUrl = (data) => {
    return data !== undefined ? data : "!#";
  };

  return {
    lang,
    currency,
    getNumber,
    getNumberTwo,
    showTimeFormat,
    showDateFormat,
    showingImage,
    showingUrl,
    globalSetting,
    showDateTimeFormat,
    showingTranslateValue,
  };
};

export default useUtilsFunction;
