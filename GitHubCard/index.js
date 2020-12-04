/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
console.log(axios);
const request = axios.get("https://api.github.com/users/ultradesigns");
console.log(request);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
function createCard(user){

  //instantiating the elements
  const cardDiv = document.createElement("div");
  const profileImg = document.createElement("img");
  const infoDiv = document.createElement("div");
  const nameH3 = document.createElement("h3");
  const userNameP = document.createElement("p");
  const userLoc = document.createElement("p");
  const profileRef = document.createElement("p");
  const linkGit = document.createElement("a");
  const follower = document.createElement("p");
  const followings = document.createElement("p");
  const biography = document.createElement("p");

  //setting class names, attributes, text
  cardDiv.classList.add("card");
  profileImg.setAttribute("src", user.avatar_url);
  linkGit.textContent = "link to " + user.login
  linkGit.setAttribute("href", user.html_url)
  nameH3.classList.add("name");
  nameH3.textContent = "name: " + user.name ?? "none";
  userNameP.classList.add("username");
  userNameP.textContent = "login: " + user.login;
  profileRef.textContent = "Profile: ";
  follower.textContent = "Followers: " + user.followers;
  followings.textContent = "Following: " + user.following;
  biography.textContent = "Bio: " + user.bio ? user.bio : "None";
  userLoc.textContent = "Location: " + user.location ?? "None";

  //creating the heirarchy
  cardDiv.append(profileImg, infoDiv);
  infoDiv.append(nameH3, userNameP, userLoc, follower,followings, biography);
  profileRef.append(linkGit);

  //adding some interactivity
  
  //return
  return cardDiv;

  // <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>
}

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
function insertCard(userName){
  axios.get(`https://api.github.com/users/${userName}`)
  .then((res) => {
    console.log(res)
    const card = createCard(res.data)
    document.querySelector("div.cards").appendChild(card)
  })
  .catch((err) =>{
    console.log(err)
  })
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["kdolic", "melissa-24", "linds-fonnes","NRHietala", "imjeremiah"];

followersArray.forEach((user) => {
  insertCard(user);
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
