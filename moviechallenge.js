class Movie {
  constructor(title, duration, rating) {
    this.title = title;
    this.duration = duration;
    this.rating = rating;
    this.watchCount = {};
  }

  printMovie() {
    console.log(
      `The movie ${this.title} is ${this.duration} and rates as ${this.rating}`
    );
  }

  watch(user) {
    if (this.watchCount[user.email]) {
      this.watchCount[user.email]++;
    } else {
      this.watchCount[user.email] = 1;
    }
    console.log(this.watchCount);
  }
}

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

getTotalWatchedCount(){
  for (let email in this.watchedCount){
    total += this.watchedCount[email]
  }
}

const movie = new Movie("a", "b", "c");
const user = new User("aa@aa", "first");
const user2 = new User("bb@bb", "second");

movie.printMovie();
movie.watch(user);
movie.watch(user2);
movie.watch(user);
