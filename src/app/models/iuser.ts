export interface IUser {
  id: number,
  name: string,
  age?: number,
  groupId?: number
}

export interface IUserDetail extends IUser {
  group: string
}