// spread operator

const mentors1 = {
  typescript: "Mir",
  mongoDb: "Kasem",
  dbms: "Tom",
};
const mentors2 = {
  next: "mezba",
  prisma: "hasan",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

const bros1: string[] = ["a", "b", "c", "d"];
const bros2: string[] = ["ab", "bc", "cd", "de"];
const brosList = bros1.push(...bros2);

// rest operator discussion

const greetingFriends = (...friends: string[]) => {
  console.log(`Hi ${friends}`);
};
greetingFriends("Abul", "kabul");
