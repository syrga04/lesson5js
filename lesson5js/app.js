


document.addEventListener('DOMContentLoaded', function () {
    const gamesContainer = document.getElementById('games-container');
  
    
    const games = [
      {
        title: "Albion Online",
        thumbnail: "https://www.freetogame.com/g/449/thumbnail.jpg",
      },
      {
        title: "World of Warships",
        thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
      },
      {
        title: "Magis: The Cathering Arena",
        thumbnail: "https://www.freetogame.com/g/454/thumbnail.jpg",
      },
    ];

    function createGameCard(game) {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
  
      const img = document.createElement('img');
      img.src = game.thumbnail;
      img.alt = game.title;
  
      const gameInfo = document.createElement('div');
      gameInfo.classList.add('game-info');
  
      const title = document.createElement('h3');
      title.textContent = game.title;
  
      const button = document.createElement('button');
      button.textContent = 'Free';
  
      gameInfo.appendChild(title);  
      gameInfo.appendChild(button); 
  
      gameCard.appendChild(img);       
      gameCard.appendChild(gameInfo);   
      
      gamesContainer.appendChild(gameCard);
  
      gameCard.addEventListener('mouseenter', function () {
        gameCard.style.transform = "scale(1.03)"; 
        gameCard.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 1.3)"; 
      });
  
      gameCard.addEventListener('mouseleave', function () {
        gameCard.style.transform = "scale(1)"; 
        gameCard.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 3.2)"; 
      });
    }

    games.forEach(createGameCard);
  });
  
  
  





  