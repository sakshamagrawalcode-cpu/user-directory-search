const users = [
    {
        name: "Aarav Sharma",
        pic: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Frontend developer who loves building clean and interactive websites."
    },
    {
        name: "Emily Johnson",
        pic: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "UI designer passionate about creating simple and beautiful interfaces."
    },
    {
        name: "Rahul Mehta",
        pic: "https://randomuser.me/api/portraits/men/52.jpg",
        bio: "Computer science student who enjoys coding and solving problems."
    },
    {
        name: "Sophia Williams",
        pic: "https://randomuser.me/api/portraits/women/65.jpg",
        bio: "Photographer who loves traveling and capturing interesting moments."
    },
    {
        name: "Daniel Smith",
        pic: "https://randomuser.me/api/portraits/men/75.jpg",
        bio: "Backend developer interested in APIs, databases and cloud technology."
    },
    {
        name: "Ananya Patel",
        pic: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "Student exploring web development and learning JavaScript."
    },
    {
        name: "James Anderson",
        pic: "https://randomuser.me/api/portraits/men/41.jpg",
        bio: "Tech enthusiast who enjoys gaming, programming and building side projects."
    },
    {
        name: "Olivia Brown",
        pic: "https://randomuser.me/api/portraits/women/33.jpg",
        bio: "Content creator who enjoys writing, music and exploring new places."
    },
    {
        name: "Vikram Singh",
        pic: "https://randomuser.me/api/portraits/men/29.jpg",
        bio: "Software engineer interested in artificial intelligence and automation."
    },
    {
        name: "Mia Davis",
        pic: "https://randomuser.me/api/portraits/women/49.jpg",
        bio: "Creative developer who likes experimenting with animations and web design."
    }
];
let arr=users;
const mainDiv = document.querySelector("#main_div");
displayUsers(arr);
function displayUsers(list) {
    const fragment = document.createDocumentFragment();
mainDiv.innerHTML = "";
  if (list.length === 0) {
        mainDiv.innerHTML = `<p class="empty">No users found</p>`;
        return;
    }

list.forEach((user) => {
const card= document.createElement("div");
card.classList.add("card");
const text_div= document.createElement("div");
text_div.classList.add("text");
const hedding= document.createElement("h3");
const paragraph= document.createElement("p");

fragment.append(card);  
card.append(text_div);
text_div.append(hedding);
text_div.append(paragraph);
hedding.innerText=user.name;
paragraph.innerText=user.bio;
card.style.backgroundImage = `url(${user.pic})`;
});
mainDiv.append(fragment);
}
document.querySelector("#input").addEventListener("input", (e) => {
    arr=users.filter((user) => user.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));
 displayUsers(arr);
});


