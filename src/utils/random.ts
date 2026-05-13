export const random = {
  int(min: number, max: number): number {
    if (min > max) {
      ;[min, max] = [max, min] // swap
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  pick<T>(arr: T[]): T {
    if (arr.length === 0) {
      throw new Error('Array tidak boleh kosong')
    }
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]! // <-- fix di sini
  },
}
