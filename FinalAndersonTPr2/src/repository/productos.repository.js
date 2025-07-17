import { JsonHandler } from "../utils/JsonHandler.js";

export const ProductosRepository = {
    getAll: async () => await JsonHandler.read(),

    getById: async (id) => {
        const productos = await JsonHandler.read();
        if (!productos) return null;
        const productoEncontrado = productos.find((producto) => producto.id === id);
        if (!productoEncontrado) return null;
        return productoEncontrado;
    },
    createProducto: async (producto) => {
		try {
			const productos = await ProductosRepository.getAll();
			productos.push(producto);
			await JsonHandler.write(productos);
		} catch (error) {
			console.error("Error en createProducto:", error.message);
			throw error;
		}
	},
    updateById: async (id, cambios) => {
		try {
			const producto = await ProductosRepository.getById(id);
			if (producto == null) return null;
			const prodActualizado = { ...producto, ...cambios };
			const productos = await ProductosRepository.getAll();
			const productosActualizados = productos.map((pr) =>
				pr.id === id ? prodActualizado : pr,
			);
			await JsonHandler.write(productosActualizados);
			return prodActualizado;
		} catch (error) {
			console.error(error);
			return null;
		}
	},
}