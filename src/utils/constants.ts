export function checkResponse(res: Response) {
  if (!res.ok) {
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }
  return res.json();
}

export const baseUrl = "http://80.78.246.144:8888";

