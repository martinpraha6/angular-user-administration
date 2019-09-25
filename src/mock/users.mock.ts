import { User } from "src/app/models/users.model";

export const mockUsers: User[] = [
  {
    id: 1,
    firstname: "Josef",
    surname: "Novák",
    email: "josef@novak.cz",
    createdAt: new Date(),
    modifiedAt: new Date()
  },
  {
    id: 2,
    firstname: "Jan",
    surname: "Pospíšil",
    email: "jan@pospisil.cz",
    createdAt: new Date(),
    modifiedAt: new Date()
  },
  {
    id: 3,
    firstname: "František",
    surname: "Procházka",
    email: "frantisek@prochazka.cz",
    createdAt: new Date(),
    modifiedAt: new Date()
  }
];
