import { ProductosRepository } from "../repository/productos.repository.js";
import { Producto } from "../models/producto.model.js";

export const productosServices = {
    GetAll: async () => {
		return await ProductosRepository.getAll();
	},
    GetById: async (id) => {
		const producto = await ProductosRepository.getById(id);
		if (!producto) return null;
		return producto;
	},
   CreateProducto: async (producto) => {
		const dataProducto = {
			...producto,
			id: crypto.randomUUID().toString(),
			fechaIngreso: new Date().toISOString().split("T")[0],
		};
        if(producto.stockAmount <= 0) throw new Error("No fue posible crear el producto, el stock debe ser mayor que 0");
		const modelProducto = new Producto(
			dataProducto.id,
			dataProducto.nombre,
			dataProducto.stockAmount,
			dataProducto.fechaIngreso,
		);
		await ProductosRepository.createProducto(modelProducto);
		return modelProducto;
	},
   UpdateStockAmount: async (id, stockActualizado) => {
    const producto = await ProductosRepository.getById(id);
    if (!producto) throw new Error("Producto inexistente");
    if (stockActualizado <= 0) throw new Error("El stock no puede ser 0 o menor");
    const productoActualizado = await ProductosRepository.updateById(id, { stockAmount: stockActualizado });
    if (!productoActualizado) return null;
    return productoActualizado;
},

}