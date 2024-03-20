const {CarritoCompra} = require('./index');

// ? Probar el constructor de carrito


describe('Funcionalidad de CarritoCompra', () =>{
    let carrito;
    beforeEach(() => {
        carrito = new CarritoCompra
    });
    
    it('Deberia ser una instancia',()=>{
        expect(carrito instanceof CarritoCompra).toBe(true);
    });

    it("Deberia ser una clase",()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });

    it("Deberia tener un metodo llamado 'agregarProducto'",()=>{
        expect(typeof carrito.agregarProducto).toBe('function');
    });

    it("Deberia tener un metodo llamado 'calcularTotal'",()=>{
        expect(typeof carrito.calcularTotal).toBe('function');
    });

    it("Deberia tener un metodo llamado 'aplicarDescuento'",()=>{
        expect(typeof carrito.aplicarDescuento).toBe('function');

    });
});
