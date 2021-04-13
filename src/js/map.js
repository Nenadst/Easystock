const script = document.createElement("script");
script.src =
  "https://https://maps.googleapis.com/maps/api/js?key=AIzaSyCxx46IuvIbYa6EhnCY7JuTY_w2YcCzzCw&callback=initMap&libraries=&v=weekly";
script.async = true;

window.initMap = function () {
  let options = {
    zoom: 8,
    center: { lat: 46.516, lng: 6.63282 },
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  const svgSearch  = document.querySelector(".iw__svg-search")
  
  addMarker({
    coords: { lat: 46.52574440485705, lng: 6.53786925768838 },
    content: `
    <div class="iw"> 
      <div class="iw__top"> 
        <label for="search" class="iw__label">Gib deinen Standort an </label> 
        <div class="iw__search-box">
          <svg class="iw__svg-search">
            <use xlink:href="../img/sprite.svg#icon-search"></use>
          </svg>
          <input type="text" class="iw__input">
        </div>
      </div>
        <div class="iw__wrapper">
          <div class="iw__card">
            <a href="#" class="iw__heading"><h4>123Lausanne</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Avenue de cour 143</span>
              <span class="iw__span">1007 Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Denges</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Route de Preverenges</span>
              <span class="iw__span">1026 DEnges, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
        </div>
    </div>`,
  });
  addMarker({
    coords: { lat: 46.51824990018133, lng: 6.608434469336367 },
    content: `
    <div class="iw"> 
      <div class="iw__top"> 
        <label for="search" class="iw__label">Gib deinen Standort an </label> 
        <div class="iw__search-box">
          <svg class="iw__svg-search">
            <use xlink:href="../img/sprite.svg#icon-search"></use>
          </svg>
          <input type="text" class="iw__input">
        </div>
      </div>
        <div class="iw__wrapper">
          <div class="iw__card">
            <a href="#" class="iw__heading"><h4>Lausanne</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Avenue de cour 143</span>
              <span class="iw__span">1007 Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Denges</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Route de Preverenges</span>
              <span class="iw__span">1026 DEnges, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
        </div>
    </div>`,
  });
  addMarker({
    coords: { lat: 46.54308800263236, lng: 6.628666470898134 },
    content: `
    <div class="iw"> 
      <div class="iw__top"> 
        <label for="search" class="iw__label">Gib deinen Standort an </label> 
        <div class="iw__search-box">
          <svg class="iw__svg-search">
            <use xlink:href="../img/sprite.svg#icon-search"></use>
          </svg>
          <input type="text" class="iw__input">
        </div>
      </div>
        <div class="iw__wrapper">
          <div class="iw__card">
            <a href="#" class="iw__heading"><h4>Lausanne</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Avenue de cour 143</span>
              <span class="iw__span">1007 Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Denges</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Route de Preverenges</span>
              <span class="iw__span">1026 DEnges, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
        </div>
    </div>`,
  });
  addMarker({
    coords: { lat: 46.22972669192597, lng: 7.34739847856065 },
    content: `
    <div class="iw"> 
      <div class="iw__top"> 
        <label for="search" class="iw__label">Gib deinen Standort an </label> 
        <div class="iw__search-box">
          <svg class="iw__svg-search">
            <use xlink:href="../img/sprite.svg#icon-search"></use>
          </svg>
          <input type="text" class="iw__input">
        </div>
      </div>
        <div class="iw__wrapper">
          <div class="iw__card">
            <a href="#" class="iw__heading"><h4>Lausanne</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Avenue de cour 143</span>
              <span class="iw__span">1007 Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Denges</h4>  
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Route de Preverenges</span>
              <span class="iw__span">1026 DEnges, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
          <div class="iw__card">
          <a href="#" class="iw__heading"><h4>Le Mont-sur Lausanne</h4> 
              <svg class="iw__svg-loc">
                <use xlink:href="../img/sprite.svg#icon-map-marker"></use>
              </svg>
            </a>
            <address class="iw__address-box">
              <span class="iw__span">Chemin de Maillefer 36</span>
              <span class="iw__span">1052 Le Mont-sur-Lausanne, Switzerland</span>
            </address>
            <a href="#" class="iw__link">Offnungszeiten</a>
          </div>
        </div>
    </div>`,
  });

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content,
        pixelOffset: new google.maps.Size(-400, 390)
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
};

document.head.appendChild(script);
