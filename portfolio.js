// JavaScript for animated text

function animateAboutMe(){const animatedTextElement = document.querySelector('.animated-text');
const text = `Hey there! I'm Rahul Singh, a self-taught programmer and Class 12th student. Coding is not just a skill for me; it's my passion and a way to express my creativity. I find joy in every aspect of software development. Currently,
  I'm immersed in the exciting journey of building our startup,
  Fotoley,
  with a dedicated team.
  
  My current goal is to become highly cohesive and loosely coupled skilled engineer.
 `
let index = 0;

function animateAboutText() {
  if (index < text.length) {
    animatedTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(animateAboutText, 30); // Adjust the time (in milliseconds) for animation speed
  }
}
  
  animateAboutText()
}