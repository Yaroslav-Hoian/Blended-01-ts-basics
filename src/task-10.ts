const users = ["alice", "bob", "charlie"];

type User = {
  id: number;
  name: string;
};

function toUserObjects(user: string[]): User[] {
  return user.map((el, index) => ({
    id: index + 1,
    name: el,
  }));
}

console.log(toUserObjects(users));

// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
