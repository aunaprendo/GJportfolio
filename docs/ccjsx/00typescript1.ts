const profile: {
  username: string;
  age: number;
  isLoggedIn: boolean;
  bio?: string;
  programmingLanguages: string[];
} = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
  programmingLanguages: ["JavaScript", "Python", "C++"]
};

console.log(profile);

const userRoles: Record<string, string> = {
  admin: "full-access",
  editor: "limited-access",
  viewer: "read-only",
  moderator: "medium-access",
  guest: "read-only"
};

console.log(userRoles);