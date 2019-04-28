import { Router } from 'express';
import EventsController from '../controllers/eventsController';

class EventsRouter extends EventsController {
	private router: Router;

	constructor() {
		super();
		this.router = Router();
		this.routes();
	}

	private routes(): void {
		this.router.get('/all', this.getAllEvents);
		this.router.post('/create', this.createEvent);
	}

	public getRouter() {
		return this.router;
	}
}

const eventsRouter = new EventsRouter();
export default eventsRouter.getRouter();
