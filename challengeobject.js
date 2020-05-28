// const me = {
//   age: 27,
//   current_location: "Sydney",
//   hobbies: ["gaming", "cooking", "tennis", "coding"],
// };

// console.log(me.age + me.current_location);

// me.hobbies.forEach((e) => console.log(e));

// const newhobby = me.hobbies.slice(0, 2);

// newhobby.forEach((e) => console.log(e));

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// function Coolbook() {}
// myBook = new Book("Harry pot", "it is i");

// Coolbook.prototype = new Book();
// coolbook = new Coolbook();

// console.log(myBook);
// console.log(coolbook);

class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.walks = [];
    this.totaldist = 0;
  }
  speak() {
    console.log(`Woof! my name is ${this.name}`);
  }

  walk(location = this.location, distance) {
    console.log(`Taking a walk at ${location} which is ${distance} km long`);
    this.walks.push(new Walk(location, distance));
  }

  display_walks() {
    console.log("All walks");
  }

  total_distance() {
    this.walks.forEach((e) => {
      this.totaldist += e.distance;
    });
    console.log(this.totaldist);
  }
}

class Walk {
  constructor(location, distance) {
    this.location = location;
    this.distance = distance;
  }
}
document.getElementById("submit").addEventListener("click", myFunction);

function myFunction() {
  console.log("here");
  let location = document.getElementById("DogFormloc").value;
  console.log(location);
  let distance = parseFloat(document.getElementById("DogFormnum").value);
  document.getElementById("location").innerHTML = location;
  document.getElementById("dist").innerHTML = distance;

  let walk = new Walk(location, distance);
  dog.walk(walk.location, walk.distance);
  console.log(dog.walks);
}

let dog = new Dog("nike", "hk");
let walk = new Walk("peak", 30);

dog.speak();

dog.walk(walk.location, walk.distance);
dog.walk("peak2", 304);
console.log(dog);
console.log(dog.walks);
dog.walks.forEach((e) => console.log(e.location));
document.getElementById(
  "walktable"
).innerHTML = `<td>${dog.walks[0].location}</td><td>${dog.walks[0].distance}</td>`;
