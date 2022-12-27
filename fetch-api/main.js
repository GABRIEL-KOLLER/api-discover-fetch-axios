//Consumindo API com Fetch

const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

function getUser() {
  fetch(`${url}/1`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

function updateUser(updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-type": "application/json;charset=UTF=8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "aplication/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

const newUser = {
  name: "Gabriel Pensador",
  avatar: "http://picsum.photos/200/300",
  city: "New York",
};
//addUser(newUser);

const updateUser = {
  name: "Gabriel S. Koller",
  avatar: "http://picsum.photos/200/300",
  city: "Telêmaco Borba",
};

//updateUser(updateUser, 1);

deleteUser();
getUser();
getUsers();
