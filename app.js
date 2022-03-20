
let menu = document.querySelector('.list-group')

function putInfo(users){
    let a = document.createElement('a');
    a.className = 'list-group-item list-group-item-action'
    a.innerText = users.name
    menu.appendChild(a)
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error('Not ok')
    }
})


.then((data) => {
    for(let i = 0;i < data.length;i++){
        putInfo(data[i])
    }

    let button = document.querySelectorAll('.list-group-item')

    let name = document.querySelector('.card-title')

    let nick = document.querySelector('.card-subtitle');

    let address = document.querySelector('.address');

    let company = document.querySelector('.company')

    let a = document.querySelector('.card__a')

    button.forEach(elem => {
        elem.addEventListener('click', function(event){
            button.forEach(btn => {
                btn.classList.remove('active')
            });
            event.target.classList.add('active')
            if(event.target.classList.contains('list-group-item')){
                for(let i = 0;i < data.length;i++){
                    if(event.target.innerText == data[i].name){
                        name.innerText = data[i].name
                        nick.innerText = data[i].username
                        address.innerText = `Street:${data[i].address.street}, Suite:${data[i].address.suite}, City:${data[i].address.city}, Zipcode: ${data[i].address.zipcode}`;
                        company.innerText = data[i].company.name
                        a.setAttribute('href', `mailto:${data[i].email}`)
                    }
                }
            }
        })
    })
});