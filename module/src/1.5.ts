//   reference type--------- object

// const user: {
//   company: "programming Hero"; // literal type
//   firstName: string;
//   middleName?: string; //  optional type
//   lastName: string;
//   isMarried: boolean
// } = {

//     company: "programming Hero",
//     firstName: "Md",
//     lastName: "Ahmed",
//     isMarried: true

// };

const user: {
  readonly company: string;
  firstName: string;
  middleName?: string; //  optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "programming Hero",
  firstName: "Md",
  lastName: "Ahmed",
  isMarried: true,
};

// user.company = "PH"