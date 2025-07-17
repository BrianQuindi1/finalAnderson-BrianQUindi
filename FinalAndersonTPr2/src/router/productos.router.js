import { productosControllers } from "../controllers/productos.controllers.js"
import { Router } from "express"

const productosRouter = Router();

productosRouter.get("/productos", await productosControllers.GetAll)
productosRouter.get("/productos/:id", await productosControllers.GetById)
productosRouter.post("/productos", await productosControllers.CreateProducto)
productosRouter.put("/productos/:id", await productosControllers.UpdateStock)

export {productosRouter}