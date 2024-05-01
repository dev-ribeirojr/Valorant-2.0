export function api(path: string, init?: RequestInit) {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${path}?language=pt-BR`
  const url = new URL(baseUrl)
  return fetch(url, init)
}
