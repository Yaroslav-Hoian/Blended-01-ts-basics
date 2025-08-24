interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

// interface CreateUser {
//   name: string;
//   age: number
// }

function createUser({ name, age }: User): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
