export const data = [
    {
        nombre: "Buzo Trasher",
        importe: 11800,
        talle: "XXL XL M ",
        id: 0,
        category: "casual",
        img:"prod0.jpg",
        tipo: "NUEVO"
        
    },
    {
        nombre: "Pantalon de jean clasico",
        importe: 9000,
        talle: "XXL M S",
        id: "1",
        category: "casual",
        img:"prod1.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Zapatillas negras new air 3.0",
        importe: 26800,
        talle: "43 40 37",
        id: 2,
        category: "deportiva",
        img:"prod2.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Remera MC LOVIN",
        importe: 2700,
        talle: "L",
        id: 3,
        category: "casual",
        img:"prod3.jpg",
        tipo: "USADO"
    },
    {
        nombre: "Camiseta deportiva negra",
        importe: 5123,
        talle: "M L XL",
        id: 4,
        category: "deportiva",
        img:"prod4.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Gorro nike",
        importe: 10600,
        talle: "38",
        id: 5,
        category: "casual",
        img:"prod5.jpg",
        tipo: "USADO"
    },
    {
        nombre: "Medias fogosas",
        importe: 2300,
        talle: "40",
        id: 6,
        category: "casual",
        img:"prod6.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Pantalon nike babucha",
        importe: 7900,
        talle: "XL",
        id: 7,
        category: "deportiva",
        img:"prod7.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Remera negra fachera",
        importe: 8000,
        talle: "M S XS",
        id: 8,
        category: "casual",
        img:"prod8.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Remera normie",
        importe: 4500,
        talle: "M",
        id: 9,
        category: "casual",
        img:"prod9.jpg",
        tipo: "USADO"
    },
    {
        nombre: "Campera adidas",
        importe: 9300,
        talle: "L",
        id: 10,
        category: "deportiva",
        img:"prod10.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Campera de boca",
        importe: 3000,
        talle: "M XXL L XL",
        id: 11,
        category: "deportiva",
        img:"prod11.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Buzo belgrano entrenamiento gris",
        importe: 9000,
        talle: "XL",
        id: 12,
        category: "deportiva",
        img:"prod12.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Buzo belgrano negro",
        importe: 13000,
        talle: "XXL",
        id: 13,
        category: "deportiva",
        img:"prod13.jpg",
        tipo: "USADO"
    },
    {
        nombre: "Zapatillas deportivas galacticas",
        importe: 29000,
        talle: "39",
        id: 14,
        category: "deportiva",
        img:"prod14.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Zapatillas konverse",
        importe: 18000,
        talle: "43",
        id: 15,
        category: "casual",
        img:"prod15.jpg",
        tipo: "NUEVO"
    },
    {
        nombre: "Remera DRAGON BALL Z",
        importe: 6000,
        talle: "S",
        id: 16,
        category: "casual",
        img:"prod16.jpg",
        tipo: "USADO"
    } 
]

export const getData = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, 2000);
    });
}