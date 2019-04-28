import { Request, Response } from 'express';
import EventsValidators from '../validators/eventsValidators';

class EventsController extends EventsValidators {
	constructor() {
		super();
	}

	public async getAllEvents(req: Request, res: Response): Promise<any> {
		res.send('These are all the events available');
	}

	public async createEvent(req: Request, res: Response): Promise<any> {
		this.createEventVal;
		
		const { eventName } = req.body;
		console.log(eventName);
		res.send('Event ' + eventName + ' has been created!');
	}
}

export default EventsController;
