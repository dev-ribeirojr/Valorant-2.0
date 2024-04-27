export function api(path: string, init?: RequestInit) {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
  const url = new URL(baseUrl)
  return fetch(url, init)
}
