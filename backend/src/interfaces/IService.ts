/* eslint-disable no-unused-vars */
export interface IService<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readSearch(p: any): Promise<T[]>,
  readOne(_id: string): Promise<T | null>,
  update(_id: string, obj: T): Promise<T | null>,
  delete(_id: string): Promise<T | null>,
}
