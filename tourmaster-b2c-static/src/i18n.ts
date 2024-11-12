import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/helpers/i18n/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`./helpers/i18n/locales/${locale}.json`)).default,
  };
});
