const apiURL = "https://api.randomuser.me/";
const selector = el => document.querySelector(el);

// A function to send the request and get data
const sendRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const requestRespnose = JSON.parse(xhr.responseText);
      callback(requestRespnose);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

// Call the request function and send the wanted result to the DOM Function
sendRequest(apiURL, res => {
  displayData(res.results[0]);
});

// Display the data in the DOM
const displayData = res => {
  const image = document.createElement("img");
  image.setAttribute("src", res.picture.large);
  image.setAttribute("alt", "Personal Picture");
  selector("#image").appendChild(image);
  selector("#full-name").textContent = `Full Name: ${res.name.first} ${
    res.name.last
  }`;
  selector("#user-name").textContent = `Username: ${res.login.username}`;
  selector("#city").textContent = `City: ${res.location.city}`;
  selector("#age").textContent = `Age: ${res.dob.age}`;
};
