import {IError} from './interfaces';

class Helpers {
	/**
   * Name: setError
   * Description: Creates a custom error object, {required fields: message: str, status:num}, {optional: field?: str instructions?: str}
   */
	public setError(message:string, status:number, field?:string, instructions?:string):IError {
      return {message, status, field, instructions};
   }

   /**
    * Name: setError (static method)
    * Description: Creates a custom error object, {required fields: message: str, status:num}, {optional: field?: str instructions?: str}
    */
   public static setError(message:string, status:number, field?:string, instructions?:string):IError {
      return {message, status, field, instructions};
   }
}

export default Helpers;
