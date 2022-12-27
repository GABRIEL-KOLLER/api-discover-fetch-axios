const url = "http://localhost:5500/api";

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      userName.textContent = response.data.name;
      userCity.textContent = response.data.city;
      userID.textContent = response.data.id;
      userAvatar.src = response.data.avatar;
    })
    .catch((error) => console.error(error));
}

function updateUser(id, userUpdate) {
  axios
    .put(`${url}/${id}`, userUpdate)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

const userUpdate = {
  name: "Marcelo Oliveira",
  avatar: "https://picsum.photos/200/300",
  city: "Recife",
};

//updateUser(1, userUpdate);

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

deleteUser(1);

getUsers();
getUser(1);

const newUser = {
  name: "Gabriel",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de janeiro",
};

//addNewUser(newUser);
