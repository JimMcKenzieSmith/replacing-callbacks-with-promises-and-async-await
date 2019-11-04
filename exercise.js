/*
getCustomer(1, customer => {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies(movies => {
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies, () => {
        console.log("Email sent...");
      });
    });
  }
});*/

async function getCustomerMoviesSendEmail() {
  const cust = await getCustomer(1);
  console.log("Customer: ", cust);
  if (cust.isGold) {
    const movies = await getTopMovies();
    console.log("Top movies: ", movies);
    await sendEmail(cust.email, movies);
    console.log("Email sent...");
  }
}
getCustomerMoviesSendEmail();

/*
function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
} */

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email"
      });
    }, 4000);
  });
}

/*
function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}*/

function getTopMovies() {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

/*
function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
} */

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}
