import { productosServices } from "../services/productos.services.js";

export const productosControllers = {
    GetAll: async (req, res) => {
        try {
            const productos = await productosServices.GetAll();
            return res.status(200).json({
                ok: true,
                message: "Exito!!!",
                payload: productos,
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: error.message,
                payload: null,
            });
        }
    },
    GetById: async (req, res) => {
        try {
            const { id } = req.params;
            const producto = await productosServices.GetById(id);
            return res.status(200).json({
                ok: true,
                message: "Producto encontrado!!",
                payload: producto
            });
        } catch (error) {
            return res.status(404).json({
                ok: false,
                message: error.message,
                payload: null
            })
        }
    },
    CreateProducto: async (req, res) => {
        try {
            const producto = req.body;
            const resultado = await productosServices.CreateProducto(producto);
            return res.status(201).json({
                ok: true,
                message: "Producto creado con exito!!",
                payload: resultado
            });
        } catch (error) {
            return res.status(400).json({
                ok: true,
                message: error.message,
                payload: null
            });
        }
    },
    UpdateStock: async (req, res) => {
        try {
            const { id } = req.params;
            const { stockAmount } = req.body;
            const result = await productosServices.UpdateStockAmount(id, stockAmount);

            return res.status(200).json({
                ok: true,
                message: `Stock actualizado a ${stockAmount}`,
                payload: result
            });

        } catch (error) {
            return res.status(400).json({
                ok: false,
                message: error.message,
                payload: null
            })
        }

    }
}