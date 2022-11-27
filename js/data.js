const Restaurantes = [
    {
        Img: "https://www.alugae.com/FotosMarcas/1578/193a921b-117e-418e-9663-a9a0dc7afb71.jpeg?width=2000",
        Alt: "Error",
        Name: "Pacifico Mar",
        Direccion: "Av 85 Nro. 45 - 85 Barranquilla",
        Descripcion: "Deliciosa comida de mar",
    },
    {
        Img: "https://pueblospatrimoniodecolombia.travel/wp-content/uploads/2021/05/Fachada-6.jpg",
        Alt: "Error",
        Name: "Italiano 65",
        Direccion: "Av 45 Nro. 1 - 85 Medellín",
        Descripcion: "Av 45 Nro. 1 - 85 Medellín",
    },
    {
        Img: "https://farm6.staticflickr.com/5577/14911077129_b454ecdb5b_b.jpg",
        Alt: "Error",
        Name: "Fritos y Más",
        Direccion: "Calle 45 Medellín",
        Descripcion: "Comida rápida",
    },
    {
        Img: "https://bitor-am.com/wp-content/uploads/2020/03/popeyes-1-768x512.jpg",
        Alt: "Error",
        Name: "Pollo Frito",
        Direccion: "Cr 32 # 56 - 89",
        Descripcion: "Lo mejor del pollo frito",
    }
];

let card = document.getElementById("card-template");

Restaurantes.map((x) => {
    card.innerHTML += `
    <div class="col">
    <div class="card">
      <img src="${x.Img}" class="card-img-top" alt="${x.Alt}">
      <div class="card-body">
        <h5 class="card-title text-center">${x.Name}</h5>
        <p class="card-text text-center">${x.Direccion}</p>
        <p class="card-text text-center"><small class="text-muted">${x.Descripcion}</small></p>
        </div>
    </div>
  </div>
  `;
});





