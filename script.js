function loadUnsplashPhotos() {
    var url = 'https://api.unsplash.com/photos/random?client_id=CokNVyEfqh41BLtagxfTIP08xIkTVkQZChTz6DX--9U&count=100'; 
    
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var unsplashPhotos = document.getElementById('unsplash-photos');
        
        data.forEach(function(photo) {
          var div = document.createElement('div');
          div.className = 'img-style'; 

          var img = document.createElement('img');
          img.src = photo.urls.regular;
          
          div.appendChild(img); 
          unsplashPhotos.appendChild(div); 
        });
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }

  window.onload = loadUnsplashPhotos;
