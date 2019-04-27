import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

class Server {
	private app: express.Application;
	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	private config(): void {
		//* Middlewares
		this.app.use(morgan('dev'));
		this.app.use(express.json);
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(cors());
		mongoose.set('useFindAndModify', false);
	}

	private routes() {
		this.app.use('/', (req, res) => {
			res.send('HELLO WORLD');
		});
	}

	public start(): void {
		mongoose
			.connect(process.env.MONGO_URI || '', {
				useNewUrlParser: true,
				useCreateIndex: true
			})
			.then(() => {
				console.log('Connected to DB');
				this.app.listen(process.env.PORT, () => console.log('Server started on port ' + process.env.PORT));
			})
			.catch((err) => console.error(err));
	}
}

const server = new Server();
server.start();
