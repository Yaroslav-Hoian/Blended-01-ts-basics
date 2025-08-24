enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function getPermissions(role: Role): string[] {
  switch (role) {
    case "ADMIN":
      return ["create", "read", "update", "delete"];
    case "USER":
      return ["read", "update"];
    case "GUEST":
      return ["read"];
    default:
      return [];
  }
}

console.log(getPermissions(Role.Admin));
