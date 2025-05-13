class User {
    static id = 1;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }

  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}

const user1 = new User("Venkey K", 22, 5000);
const user2 = new User("John Doe", 40, 74000);
const user3 = new User("Jane Doe", 25, 24555);

const users = [user1, user2, user3];

// users.sort(User.compareByIncome);

console.log(users);
