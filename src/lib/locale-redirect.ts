import { defaultLocale, locales } from "~/i18n/config";

export const LOCALE_REDIRECT_SCRIPT = `(function(){var l=(navigator.languages||[navigator.language]).map(function(x){return String(x).slice(0,2).toLowerCase()});var s=${JSON.stringify(locales)};var p=l.find(function(x){return s.indexOf(x)>=0})||"${defaultLocale}";location.replace("/"+p)})()`;

export const NOT_FOUND_LANG_SCRIPT = `(function(){var l=(navigator.languages||[navigator.language]).map(function(x){return String(x).slice(0,2).toLowerCase()});var s=${JSON.stringify(locales)};if(l.find(function(x){return s.indexOf(x)>=0})==="es")document.documentElement.lang="es"})()`;
