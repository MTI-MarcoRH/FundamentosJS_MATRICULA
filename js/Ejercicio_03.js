// Objetos

const producto = 
    {
        Nombre:"Tablet 9\"", 
        Marca:"Mac",
        Modelo: "iPad",
        Costo_Compra: 11500.25,
        Costo_Venta: 15400,   
        Disponible: true,
        SKU: Symbol("553GGD546442"),
        Colores: ["Blanco", "Negro", "Rosa", "Azul", "Amarillo"]
    }
// Imprimir el objeto
console.warn("---OBJETOS ---");
console.log(producto);

// Los objetos tambien pueden representarse en formato de tabla utilizando la funcion console.table

console.table(producto);


// Acceder a las propiedades de un objeto
console.warn("Leyendo las Propiedades de un Objeto y sus tipos de dato")
console.log(`Nombre del Producto: ${producto.Nombre} que es del tipo: ${typeof(producto.Nombre)}\n`+
`Marca: ${producto.Marca} que es del tipo: ${typeof(producto.Marca)}\n`);
