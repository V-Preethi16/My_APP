document.getElementById("confetti-btn").addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = 1 + Math.random() * 2 + "s";
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  });
  
  const style = document.createElement("style");
  style.innerHTML = `
    .confetti {
      position: fixed;
      top: 0;
      width: 10px;
      height: 10px;
      animation: fall linear;
    }
  
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);