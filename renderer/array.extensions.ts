export { }

declare global {

  interface Array<T> {
    compactMap<E>(callback: (t: T) => E | null): Array<E>
  }

}

if (!Array.prototype.compactMap) {

  Array.prototype.compactMap = function<T, E>(callback: (t: T) => E | null): Array<E> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.map(callback).filter(x => !!x).map(x => x!)
  }

}
