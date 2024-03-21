function navFunc() {
  document.querySelector('html').classList.toggle('open');
}

function closeNav() {
  document.querySelector('html').classList.remove('open');
}

// code for handling the video
const video = document.getElementById('popupVideo');

function playVideo() {
  video.play();
  document.querySelector('.video-popup').style.display = 'block';
}

if (video) {
  video.onended = function() {
      video.pause();
      document.querySelector('.video-popup').style.display = 'none';
  };
} else {
  console.error("Video element not found.");
}

// code that handles user login
function login(event) {
  
  event.preventDefault();

  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (username === "" || password === "") {
      alert("Please enter a username and password!");
      return;
  }

 
  if (username === "Guest" && password === "Login") {
      window.location.href = "index.html"; 
  } else {
      alert("Invalid login credentials!");
  }
}
document.getElementById('loginForm').addEventListener('submit', login);

// code for playing audio on scroll through paragraph 
const audio = document.getElementById("Audio-player");
let currentParagraph = 0; 

audio.addEventListener("play", () => {
  const paragraphs = document.querySelectorAll("p");
  const scrollSpeed = 1;

  let scrollInterval = setInterval(() => {
    if (currentParagraph < paragraphs.length) {
      paragraphs[currentParagraph].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      currentParagraph++;
    } else {
      clearInterval(scrollInterval);
    }
  }, (audio.duration * 1000) / (paragraphs.length * scrollSpeed));
});


