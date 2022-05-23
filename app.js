const menu = [
    {
        id: 1,
        name: 'Vanilla Scoop',
        price: 1,
        img: 'vanilla.avif'
    },
    {
        id: 2,
        name: 'Chocolate Scoop',
        price: 88,
        img: 'chocolate.avif'
    },
    {
        id: 3,
        name: 'StrawBerry Scoop',
        price: 9.7,
        img: 'straw.avif'
    },
    {
        id: 4,
        name: 'HuckleBerry Scoop',
        price: 10,
        img: 'huckle.avif'
    },
    {
        id: 5,
        name: 'Orange Scoop',
        price: 8,
        img: 'orange.avif'
    },
    {
        id: 6,
        name: 'StrawBerry Bar',
        price: 5,
        img: 'strawcone.jpg'
    },
    {
        id: 7,
        name: 'Chocolate Cone',
        price: 6.50,
        img: 'chocolatecone.avif'
    },
    {
        id: 8,
        name: 'Assortment',
        price: 54,
        img: 'assortment.avif'
    },
    {
        id: 9,
        name: 'Waffle-Cone',
        price: 3,
        img: 'cone.avif'
    }
]

function drawMenu() {
    let template = ''
    menu.forEach(item => {
        template += `
        <div class="col-4 p-3">
        <div class="bg-dark text-light shadow rounded menu-items">
        <img class="w-100 object-cover rounded-top" height="200px" src="${item.img}" alt="Ice Cream">
        <div class="d-flex justify-content-between p-3">
        <h4>${item.name}</h4>
        <h4><b>$${item.price}</b></h4>
        </div>
        </div>
        </div>
        `
    })


    document.getElementById('menu-items').innerHTML = template
}

function drawOrder() {
    let template = ''
    let total = 0
    order.forEach(item => {
        total += item.price
        template += `
        
        `
    })

}

drawMenu()
drawOrder()
