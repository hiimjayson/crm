import {
  setCookie as setNextCookie,
  getCookie as getNextCookie,
  deleteCookie as deleteNextCookie,
} from "cookies-next";
import type { OptionsType } from "cookies-next/lib/types";

export const setCookie = (
  name: string,
  value: string,
  options: OptionsType = {}
) => {
  setNextCookie(name, value, options);
};

export const getCookie = (name: string): string | undefined => {
  const value = getNextCookie(name);
  return value?.toString();
};

export const deleteCookie = (name: string, options: OptionsType = {}) => {
  deleteNextCookie(name, options);
};
