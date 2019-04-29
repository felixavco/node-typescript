import { Request, Response, NextFunction } from 'express';
import Helpers from '../utils/Helpers'

class EventsValidators extends Helpers {

  public createEventVal(req: Request, res: Response, next: NextFunction): void {
    try {
      const eventName: string = req.body.eventName;

      if(eventName === "") {
        throw this.setError("Invalid Name", 401);
      }
  
      next();
    } catch (error) {
      res.status(error.status).json(error)
    }
  }
}

export default EventsValidators; 
