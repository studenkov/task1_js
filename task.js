const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

function getActiveUsers(users) {
  return users.filter(user => user.isActive);
}

const getUserNames = users => users.map(user => user.name);

function findUserById(users, id) {
  const user = users.find(user => user.id === id);
  return user || null;
}

function getUsersStatistics(users) {
  return users.reduce(
    (stats, user) => {
      stats.total += 1;
      if (user.isActive) {
        stats.active += 1;
      } else {
        stats.inactive += 1;
      }
      return stats;
    },
    { total: 0, active: 0, inactive: 0 }
  );
}

function getAverageAge(users) {
  if (users.length === 0) return 0;
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

function groupUsersByCity(users) {
  return users.reduce((result, user) => {
    if (!result[user.city]) {
      result[user.city] = [];
    }
    result[user.city].push(user);
    return result;
  }, {});
}

console.log("Active users:", getActiveUsers(users));
console.log("User names:", getUserNames(users));
console.log("Find user by id 3:", findUserById(users, 3));
console.log("Statistics:", getUsersStatistics(users));
console.log("Average age:", getAverageAge(users));
console.log("Group by city:", groupUsersByCity(users));
