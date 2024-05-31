

function generate_card (id, name, image){
  return `
    <div class="card py-2 px-4 d-flex flex-column justify-content-between align-items-center col-sm-4 col-lg-3 card-character-home">
      <img class="icard card-img-top w-100 d-block border rounded-5" src="${image}" alt="${name}"/>
      <div class="card-body text-center">
        <h4 class="title card-title">${name}</h4>
      </div>
      <div class="card-footer d-flex justify-content-evenly w-100 align-items-center p-3">
        <button onclick="location.href='./resources/pages/details.html?id=${id}'" class="btn btn-outline-dark" type="button">Details</button>
      </div>
    </div>`;
}

export default generate_card;