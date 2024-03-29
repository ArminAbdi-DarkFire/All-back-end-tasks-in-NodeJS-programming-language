const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "meme" });
    reject(new Error());
  }, 100);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// ==============================================================

// hill promise
getCustomerDetail()
  .then((Detail) => {
    console.log("\ncustomer detail : ", Detail);
    getCustomerHistory(Detail).then((History) => {
      console.log("\ncustomer history : ", History);
      getCustomerBack(History).then((Bank) => {
        console.log("\ncustomer bank : ", Bank);
      });
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// promise
getCustomerDetail()
  .then((Detail) => {
    console.log("\ncustomer detail : ", Detail);
    return getCustomerHistory(Detail);
  })
  .then((History) => {
    console.log("\ncustomer history : ", History);
    return getCustomerBack(History);
  })
  .then((Bank) => {
    console.log("\ncustomer bank : ", Bank);
  })
  .catch((err) => {
    console.log(err.message);
  });

function getCustomerDetail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Sara" });
    }, 200);
  });
}

function getCustomerHistory(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 200);
  });
}

function getCustomerBack(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "alisa" });
    }, 200);
  });
}

// ==============================================================

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "meme" });
    reject(new Error());
  }, 300);
});

const promiseTow = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 2, name: "meme" });
    reject(new Error());
  }, 350);
});

Promise.all([promiseOne, promiseTow])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
Promise.race([promiseOne, promiseTow])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
