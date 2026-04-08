
//zavdannya 1
const getUsersWithGender = (users, genderType) => {
  return users
    .filter(({ gender }) => gender === genderType)
    .map(({ name }) => name);
};

console.log(getUsersWithGender(users, 'male'));

//zavdanya2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

//zavdannya3
const getUsersWithGender = (users, genderType) => {
  return users
    .filter(({ gender }) => gender === genderType)
    .map(({ name }) => name);
};

console.log(getUsersWithGender(users, 'male'));

//zavdannya4
const getInactiveUsers = users => {
  return users.filter(({ isActive }) => !isActive);
};

console.log(getInactiveUsers(users));

//zavdannya5
const getUserWithEmail = (users, userEmail) => {
  return users.find(({ email }) => email === userEmail);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));