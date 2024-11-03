import { getCookie } from "@/utils/cookies";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

async function fetchWithAuth<T>(
  url: string,
  options: RequestOptions = {},
  externalToken?: string
): Promise<T> {
  const sessionToken = externalToken ?? getCookie("session-token");
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
    throw new Error(
      `HTTP error! status: ${
        response.status
      }, url: ${fullUrl.toString()}, response: ${JSON.stringify(
        await response.json()
      )}`
    );
  }

  return response.json() as Promise<T>;
}

export const api = {
  get: <T = unknown>(
    url: string,
    options: RequestOptions = {},
    token?: string
  ): Promise<T> => fetchWithAuth<T>(url, { ...options, method: "GET" }, token),

  post: <T = unknown>(
    url: string,
    data: Record<string, unknown>,
    options: RequestOptions = {},
    token?: string
  ): Promise<T> =>
    fetchWithAuth<T>(
      url,
      {
        ...options,
        method: "POST",
        body: JSON.stringify(data),
      },
      token
    ),

  patch: <T = unknown>(
    url: string,
    data: Record<string, unknown>,
    options: RequestOptions = {},
    token?: string
  ): Promise<T> =>
    fetchWithAuth<T>(
      url,
      {
        ...options,
        method: "PATCH",
        body: JSON.stringify(data),
      },
      token
    ),

  delete: <T = unknown>(
    url: string,
    options: RequestOptions = {},
    token?: string
  ): Promise<T> =>
    fetchWithAuth<T>(url, { ...options, method: "DELETE" }, token),
};
