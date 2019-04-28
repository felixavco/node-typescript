import {IError} from './interfaces';

class Helpers {
	/**
   * Name: setError
   * Description: Creates a custom error object
   */
	public setError(newError:IError): IError {
      return newError;
   }

   /**
    * Name: setError
    * Description: Creates a custom error object (static)
    */
   public static setError = (newError:IError) => newError
}

export default Helpers;
