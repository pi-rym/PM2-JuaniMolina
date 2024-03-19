class CarritoCompra{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    calcularTotal(){
        let total = 0;
        for(let producto of this.productos){
            total += producto.precio * producto.cantidad;
        }
        return total;
    }
    
    aplicarDescuento(porcentaje){
        let subtotal = this.calcularTotal();
        let descuento = this.calcularTotal() * (porcentaje / 100);

        return subtotal - descuento
    }

}



module.exports = {
    CarritoCompra
};