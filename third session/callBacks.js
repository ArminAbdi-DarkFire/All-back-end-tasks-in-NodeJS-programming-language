// Async
// getCustomerDetail((Detail) => {
//   console.log("\ncustomer detail : ", Detail);

//   getCustomerHistory(Detail.id, (History) => {
//     console.log("\ncustomer history : ", History);

//     getCustomerBack(History.id, (Bank) => {
//       console.log("\ncustomer bank : ", Bank);
//     });
//   });
// });

// sync
getCustomerDetail(detailDisplay);
function detailDisplay(Detail) {
  console.log("\ncustomer detail : ", Detail);
  getCustomerHistory(Detail.id, historyDisplay);
}

function historyDisplay(History) {
  console.log("\ncustomer history : ", History);
  getCustomerBack(History.id, factorDisplay);
}

function factorDisplay(Bank) {
  console.log("\ncustomer bank : ", Bank);
}

function getCustomerDetail(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Sara" });
  }, 200);
}

function getCustomerHistory(id, callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Alice" });
  }, 200);
}

function getCustomerBack(id, callback) {
  setTimeout(() => {
    callback({ id: 1, name: "meme" });
  }, 200);
}
