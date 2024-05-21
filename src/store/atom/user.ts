import { IUser } from '@/models/user'
import { atom } from 'recoil'

export const userAtom = atom<IUser | null>({
  key: 'auth-user',
  default: null,
})
