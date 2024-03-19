const {CarritoCompra} = require('./index');

// ? Probar el constructor de carrito


describe('Funcionalidad de CarritoCompra', () =>{
    let carrito;
    beforeEach(() => {
        carrito = new CarritoCompra
    })
    
    it('',()=>{
        expect(carrito instanceof CarritoCompra).toBe(true);
    })

    it("",()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    })
});
