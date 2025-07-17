import express from 'express';
import { config } from './config/config.js';
import { productosRouter } from './router/productos.router.js';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/", productosRouter);

app.listen(config.PORT, () => {
	const message = `🚀 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
