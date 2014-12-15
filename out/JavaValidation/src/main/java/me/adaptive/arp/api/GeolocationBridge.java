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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for Managing the Geolocation operations
   Auto-generated implementation of IGeolocation specification.
*/
public class GeolocationBridge extends BaseSensorBridge implements IGeolocation, APIBridge {

     /**
        API Delegate.
     */
     private IGeolocation delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public GeolocationBridge(IGeolocation delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final IGeolocation getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IGeolocation delegate) {
          this.delegate = delegate;
     }

     /**
        Register a new listener that will receive geolocation events.

        @param listener to be registered.
        @since ARP1.0
     */
     public void addGeolocationListener(IGeolocationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing addGeolocationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.addGeolocationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'addGeolocationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'addGeolocationListener'.");
          }
          
     }

     /**
        De-registers an existing listener from receiving geolocation events.

        @param listener to be registered.
        @since ARP1.0
     */
     public void removeGeolocationListener(IGeolocationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing removeGeolocationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.removeGeolocationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'removeGeolocationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'removeGeolocationListener'.");
          }
          
     }

     /**
        Removed all existing listeners from receiving geolocation events.

        @since ARP1.0
     */
     public void removeGeolocationListeners() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing removeGeolocationListeners.");

          if (this.delegate != null) {
               this.delegate.removeGeolocationListeners();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'removeGeolocationListeners' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'removeGeolocationListeners'.");
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string if the response is asynchronous or null if method not found.
     */
     public String invoke(APIRequest request) {
          Gson gson = new Gson();
          String responseJSON = "";
          switch (request.getMethodName()) {
               case "addGeolocationListener":
                    IGeolocationListener listener0 = new GeolocationListenerImpl(request.getAsyncId());
                    this.addGeolocationListener(listener0);
                    break;
               case "removeGeolocationListener":
                    IGeolocationListener listener1 = new GeolocationListenerImpl(request.getAsyncId());
                    this.removeGeolocationListener(listener1);
                    break;
               case "removeGeolocationListeners":
                    this.removeGeolocationListeners();
                    break;
               default:
                    // 404 - response null.
                    responseJSON = null;
          }
          return responseJSON;
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/