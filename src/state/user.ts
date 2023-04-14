import { User } from "firebase/auth";
import { atom } from "recoil";

export const userState = atom<User | undefined>({
  key: "user",
  default: undefined,
});
