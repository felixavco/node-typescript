import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
if(process.env.NODE_ENV !== "production") require('dotenv').config()


//* Importing Routes
import eventsRoutes from './routes/eventsRoutes';

class Server {
	private app: express.Application;
	private PORT: any;
	private MONGO_URI: any;

	constructor() {
		this.PORT = process.env.PORT;
		this.MONGO_URI = process.env.MONGO_URI;
		this.app = express();
		this.config();
		this.routes();
	}

	private config(): void {
		//* Middlewares
		this.app.use(morgan('dev'));
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(express.json());
		this.app.use(cors());
		mongoose.set('useFindAndModify', false);
	}

	private routes(): void {
		this.app.use('/api/events', eventsRoutes);
	}

	public start(): void {
		mongoose
			.connect(this.MONGO_URI, {
				useNewUrlParser: true,
				useCreateIndex: true
			})
			.then(() => {
				console.log('Connected to DB');
				this.app.listen(this.PORT, () => console.log('Server started on port ' + this.PORT));
			})
			.catch((err) => console.error(err));
	}
}

const server = new Server();
server.start();
