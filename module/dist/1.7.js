"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const mentors1 = {
    typescript: "Mir",
    mongoDb: "Kasem",
    dbms: "Tom",
};
const mentors2 = {
    next: "mezba",
    prisma: "hasan"
};
const mentorList = {
    ...mentors1,
    ...mentors2
};
const bros1 = ["a", "b", "c", "d"];
const bros2 = ["ab", "bc", "cd", "de"];
const brosList = bros1.push(...bros2);
// rest operator discussion 
const greetingFriends = (...friends) => {
    console.log(`Hi ${friends}`);
};
greetingFriends("Abul", "kabul");
//# sourceMappingURL=1.7.js.map