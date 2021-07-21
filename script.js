var repoList = document.querySelector('p');
var fiveday = document.querySelector('h5');
var fetchATL = document.getElementById('ATLPopulous');
var fetchAUS = document.getElementById('AUSPopulous');
var fetchCHI = document.getElementById('CHIPopulous');
var fetchCOL = document.getElementById('COLPopulous');
var fetchDEN = document.getElementById('DENPopulous');
var fetchNY = document.getElementById('NYPopulous');
var fetchORL = document.getElementById('ORLPopulous');
var fetchSF = document.getElementById('SFPopulous');
var fetchSEA = document.getElementById('SEAPopulous');

// Major city variables have been established. 
// The button and click event for all major cities will allow user to click on the 
// city button and it will populate with the current forecast as well as the 
// five day forecast.
// The input function is displayed but has not been established. 
//Two fecth calls were needed for the api sites. 
// For the api site that I utilized, a key is required. This is built into the URL.
// Standard practice for the location of the API key tends to go back and forth from
// from my understanding.

function getATL() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=b87913168bb63671378f2334a76cfe3c';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchATL.addEventListener('click', getATL);

function getAUS() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=b87913168bb63671378f2334a76cfe3c';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchAUS.addEventListener('click', getAUS);

function getCHI() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchCHI.addEventListener('click', getCHI);

function getCOL() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Columbus&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchCOL.addEventListener('click', getCOL);

function getDEN() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchDEN.addEventListener('click', getDEN);

function getNY() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=New-York&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchNY.addEventListener('click', getNY);

function getORL() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchORL.addEventListener('click', getORL);

function getSF() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=San-Francisco&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchSF.addEventListener('click', getSF);

function getSEA() {
  
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=b87913168bb63671378f2334a76cfe3c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('p');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchSEA.addEventListener('click', getSEA);

// five day code

function getATL() {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=b87913168bb63671378f2334a76cfe3c';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchATL.addEventListener('click', getATL);

function getAUS() {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=b87913168bb63671378f2334a76cfe3c';
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchAUS.addEventListener('click', getAUS);

function getCHI() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchCHI.addEventListener('click', getCHI);

function getCOL() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Columbus&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchCOL.addEventListener('click', getCOL);

function getDEN() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchDEN.addEventListener('click', getDEN);

function getNY() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=New-York&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchNY.addEventListener('click', getNY);

function getORL() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchORL.addEventListener('click', getORL);

function getSF() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=San-Francisco&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchSF.addEventListener('click', getSF);

function getSEA() {

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=b87913168bb63671378f2334a76cfe3c';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('h5');
      listItem.textContent = data[i].html_url;
      fiveday.appendChild(listItem);
    }
  });
}

fetchSEA.addEventListener('click', getSEA);

