import { User } from "src/app/models/users.model";

export const mockUsers: User[] = [
  {
    id: 1,
    firstname: "Josef",
    surname: "Novák",
    createdAt: new Date(),
    email: "josef@novak.cz",
    image: "aaa"
  },
  {
    id: 2,
    firstname: "Jan",
    surname: "Pospíšil",
    createdAt: new Date(),
    email: "jan@pospisil.cz",
    image: "bbb"
  },
  {
    id: 3,
    firstname: "František",
    surname: "Procházka",
    createdAt: new Date(),
    email: "frantisek@prochazka.cz",
    image: "ccc"
  }
];
