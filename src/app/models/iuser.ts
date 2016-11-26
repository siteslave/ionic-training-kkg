export interface IUser {
  id: number,
  name: string,
  username?: string,
  email?: string,
  age?: number,
  groupId?: number
}

export interface IUserDetail extends IUser {
  group?: string
}