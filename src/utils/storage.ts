export const storage = {
  get<T = any>(key: string): T | null {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  },

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  },
}
