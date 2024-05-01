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

         var a = document.createElement('a');
         a.href = '#'; 

          var img = document.createElement('img');
          img.src = photo.urls.regular;

          var saveButton = document.createElement('button');
          saveButton.innerText = 'Save';
          saveButton.className = 'save-button';

          div.appendChild(saveButton);
          a.appendChild(img)
          div.appendChild(a); 
          unsplashPhotos.appendChild(div); 
        });
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }

  window.onload = loadUnsplashPhotos;


// for test

// function loadUnsplashPhotos() {
//     var url = 'assets/4Khw7f2hkI-enhance-8x.png';
//     var unsplashPhotos = document.getElementById('unsplash-photos');
  
//     for (var i = 0; i < 36; i++) {
//       var div = document.createElement('div');
//       div.className = 'img-style';
  
//       var a = document.createElement('a');
//       a.href = '#';
  
//       var img = document.createElement('img');
//       img.src = url;
  
//       var saveButton = document.createElement('button');
//       saveButton.innerText = 'Save';
//       saveButton.className = 'save-button';
  
//       div.appendChild(saveButton);
//       a.appendChild(img);
//       div.appendChild(a);
//       unsplashPhotos.appendChild(div);
//     }
// }
  
//     window.onload = loadUnsplashPhotos;


    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (event) => {
        if (event.target.matches('.save-button')) {
          event.target.innerText = 'Saved';
          event.target.style.backgroundColor = 'black';
          event.target.style.color = 'azure';
          event.target.style.borderColor = 'azure';
          event.target.style.border = '1px solid';
        }
    
        if (event.target.matches('.save-button') && getComputedStyle(event.target).backgroundColor === 'rgb(0, 0, 0)') {
          event.target.innerText = 'Save';
          event.target.style.backgroundColor = 'transparent';
          event.target.style.color = 'black';
          event.target.style.borderColor = '#1A1A1A';
        }
      });
    });