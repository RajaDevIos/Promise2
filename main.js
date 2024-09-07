
function fetchData() {

    return fetch('https://admin.xperienceit.in/api/get-All-category')
    .then(respoonse =>{
        if(!respoonse.ok) {
            throw new Error('Failed to fetch data');
    
        }
        return respoonse.json();
    })  
.catch(error =>{
    console.error('Error fetching data',error);
});

}

function renderData(){

    const container =document.querySelector('.DataContainer');


fetchData().then(data =>{

    if ( !data.body) {
        return;
    }

data.body.forEach(item =>{

    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h4');
    name.textContent = item.name;

    const image = document.createElement('img');
    image.src = item.image_path;
 

    card.appendChild(image);
    card.appendChild(name);
    container.appendChild(card);

});


});


}

renderData();