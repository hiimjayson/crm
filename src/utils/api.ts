import { getCookie } from "cookies-next";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

async function fetchWithAuth(url: string, options: RequestOptions = {}) {
  const sessionToken = getCookie("session-token");
  const headers = new Headers(options.headers);

  if (sessionToken) {
    headers.set("Authorization", `Bearer ${sessionToken}`);
  }

  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const fullUrl = new URL(`${API_BASE_URL}${url}`);
  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      fullUrl.searchParams.append(key, value);
    });
  }

  const response = await fetch(fullUrl.toString(), {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const api = {
  get: (url: string, options: RequestOptions = {}) =>
    fetchWithAuth(url, { ...options, method: "GET" }),

  post: (
    url: string,
    data: Record<string, unknown>,
    options: RequestOptions = {}
  ) =>
    fetchWithAuth(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  patch: (
    url: string,
    data: Record<string, unknown>,
    options: RequestOptions = {}
  ) =>
    fetchWithAuth(url, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  delete: (url: string, options: RequestOptions = {}) =>
    fetchWithAuth(url, { ...options, method: "DELETE" }),
};
