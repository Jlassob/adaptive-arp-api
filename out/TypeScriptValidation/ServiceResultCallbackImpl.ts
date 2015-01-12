/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="BaseCallbackImpl.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IServiceResultCallback.ts"/>
///<reference path="IServiceResultCallbackError.ts"/>
///<reference path="IServiceResultCallbackWarning.ts"/>
///<reference path="ServiceResponse.ts"/>

module Adaptive {

     /**
        Interface for Managing the Services operations
        Auto-generated implementation of IServiceResultCallback specification.
     */

     /**
        ServiceResultCallback control dictionary.
     */
     var registeredServiceResultCallback = new Dictionary<IServiceResultCallback>([]);

     /**
        ServiceResultCallback global callback handlers.
     */
     export function handleServiceResultCallbackError(id : number, error : IServiceResultCallbackError) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleServiceResultCallbackResult(id : number, response : ServiceResponse) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onResult(response);
          }
     }
     export function handleServiceResultCallbackWarning(id : number, response : ServiceResponse, warning : IServiceResultCallbackWarning) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onWarning(response, warning);
          }
     }

     export class ServiceResultCallbackImpl extends BaseCallbackImpl implements IServiceResultCallback {

          onErrorFunction : (error : IServiceResultCallbackError) => Function;
          onResultFunction : (response : ServiceResponse) => Function;
          onWarningFunction : (response : ServiceResponse, warning : IServiceResultCallbackWarning) => Function;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IServiceResultCallbackError
             @param onResultFunction Function receiving parameters of type: ServiceResponse
             @param onWarningFunction Function receiving parameters of type: ServiceResponse, IServiceResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IServiceResultCallbackError) => Function, onResultFunction : (response : ServiceResponse) => Function, onWarningFunction : (response : ServiceResponse, warning : IServiceResultCallbackWarning) => Function) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ServiceResultCallbackImpl onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ServiceResultCallbackImpl onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ServiceResultCallbackImpl onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             This method is called on Error

             @param error returned by the platform
             @since ARP1.0
          */
          public onError(error : IServiceResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ServiceResultCallbackImpl contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             This method is called on Result

             @param response data
             @since ARP1.0
          */
          public onResult(response : ServiceResponse) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ServiceResultCallbackImpl contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(response);
               }
          }

          /**
             This method is called on Warning

             @param response data
             @param warning  returned by the platform
             @since ARP1.0
          */
          public onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ServiceResultCallbackImpl contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(response, warning);
               }
          }

     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
