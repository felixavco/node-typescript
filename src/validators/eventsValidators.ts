import { Request, Response, NextFunction } from 'express';
import Helpers from '../utils/Helpers'

class EventsValidators extends Helpers {

  public createEventVal(req: Request, res: Response, next: NextFunction): void {
    try {
      const eventName: string = req.body.eventName;

      if(eventName === "") {
        let newError =  {
          message: "Invalid Name", 
          status: 404, 
        };
        
        throw this.setError(newError);
      }
  
      next();
    } catch (error) {
      res.status(error.status).json(error)
    }
  }
}

export default EventsValidators; 
