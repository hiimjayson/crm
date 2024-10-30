interface CookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

export const setCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  const { path = "/", expires, maxAge, domain, secure, sameSite } = options;

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (path) cookieString += `; path=${path}`;
  if (expires) cookieString += `; expires=${expires.toUTCString()}`;
  if (maxAge) cookieString += `; max-age=${maxAge}`;
  if (domain) cookieString += `; domain=${domain}`;
  if (secure) cookieString += "; secure";
  if (sameSite) cookieString += `; samesite=${sameSite}`;

  document.cookie = cookieString;
};

export const getCookie = (name: string): string | undefined => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());
    if (cookieName === encodeURIComponent(name)) {
      return decodeURIComponent(cookieValue);
    }
  }
  return undefined;
};

export const deleteCookie = (name: string, options: CookieOptions = {}) => {
  setCookie(name, "", {
    ...options,
    expires: new Date(0),
  });
};
