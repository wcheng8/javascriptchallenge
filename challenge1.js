let movies = [
  {
    title: "The Shawshank Redemption",

    duration: "PT142M",

    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],

    ratings: [],

    watchlist: [15291, 51417, 62289, 6146, 71389, 93707],
  },
  {
    title: "The Godfather",

    duration: "PT175M",

    actors: ["Marlon Brando", "Al Pacino", "James Caan"],

    ratings: [],

    watchlist: [62289, 66380, 34139, 6146],
  },
  {
    title: "The Dark Knight",

    duration: "PT152M",

    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],

    ratings: [],

    watchlist: [51417, 62289, 6146, 71389, 7001],
  },
  {
    title: "Pulp Fiction",

    duration: "PT154M",

    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],

    ratings: [],

    watchlist: [7001, 9250, 34139, 6146],
  },
  {
    title: "Schindler's List",

    duration: "PT195M",

    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],

    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
];

let users = [
  {
    userId: 15291,

    email: "Constantin_Kuhlman15@yahoo.com",

    friends: [7001, 51417, 62289],
  },
  {
    userId: 7001,

    email: "Keven6@gmail.com",

    friends: [15291, 51417, 62289, 66380],
  },
  {
    userId: 51417,

    email: "Margaretta82@gmail.com",

    friends: [15291, 7001, 9250],
  },
  {
    userId: 62289,

    email: "Marquise.Borer@hotmail.com",

    friends: [15291, 7001],
  },
];

function topWatchlistedMoviesAmongFreinds(id, movies, users) {
  let userfreinds = "";
  users.forEach((e) => {
    if (e.userId == id) {
      userfreinds = e;
    }
  });

  let moviesrec = {};

  movies.forEach((m) => {
    moviesrec[`${m.title}`] = [];
    userfreinds.friends.forEach((f) => {
      m.watchlist.forEach((recid) => {
        if (recid == f) {
          moviesrec[`${m.title}`].push(`${f}`);
        }
      });
    });
  });

  console.log(moviesrec);

  let sortbymovienum = [];

  for (let movie in moviesrec) {
    console.log(`${movie}:${moviesrec[movie].length}`);
    sortbymovienum.push([movie, moviesrec[movie].length]);
  }

  console.log(sortbymovienum);

  sortbymovienum.sort(function(a, b) {
    return b[1] - a[1];
  });

  let finalsort = [];

  maxvalue = sortbymovienum[0][1];
  let innersort = [];
  for (let i = 0; i < sortbymovienum.length; i++) {
    if (sortbymovienum[i][1] == maxvalue) {
      innersort.push(sortbymovienum[i]);
    } else {
      finalsort.push(innersort.sort());
      innersort = [];
      innersort.push(sortbymovienum[i]);
      maxvalue--;
    }
  }
  finalsort.push(innersort.sort());
  finalsort = finalsort.flat();
  let freindrec = [];
  for (let i = 0; i < finalsort.length; i++) {
    freindrec.push(finalsort[i][0]);
  }
  return freindrec.slice(0, 4);
}

console.log(topWatchlistedMoviesAmongFreinds(62289, movies, users));
console.log(topWatchlistedMoviesAmongFreinds(15291, movies, users));
