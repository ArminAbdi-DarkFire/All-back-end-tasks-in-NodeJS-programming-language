async function factor() {
  try {
    const Detail = await getCustomerDetail();
    console.log(Detail);
    const History = await getCustomerHistory(Detail.id);
    console.log(History);
    const Bank = await getCustomerBack(History.id);
    console.log(Bank);
  } catch (err) {
    console.log(err.message);
  }
}

factor();

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
