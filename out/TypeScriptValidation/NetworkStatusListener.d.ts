/// <reference path="BaseListener.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="ICapabilitiesNet.d.ts" />
/// <reference path="INetworkStatusListener.d.ts" />
/// <reference path="INetworkStatusListenerError.d.ts" />
/// <reference path="INetworkStatusListenerWarning.d.ts" />
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
declare module Adaptive {
    /**
       NetworkStatusListener global listener handlers.
    */
    function handleNetworkStatusListenerError(id: number, error: INetworkStatusListenerError): void;
    function handleNetworkStatusListenerResult(id: number, network: ICapabilitiesNet): void;
    function handleNetworkStatusListenerWarning(id: number, network: ICapabilitiesNet, warning: INetworkStatusListenerWarning): void;
    class NetworkStatusListener extends BaseListener implements INetworkStatusListener {
        onErrorFunction: (error: INetworkStatusListenerError) => Function;
        onResultFunction: (network: ICapabilitiesNet) => Function;
        onWarningFunction: (network: ICapabilitiesNet, warning: INetworkStatusListenerWarning) => Function;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: INetworkStatusListenerError
           @param onResultFunction Function receiving parameters of type: ICapabilitiesNet
           @param onWarningFunction Function receiving parameters of type: ICapabilitiesNet, INetworkStatusListenerWarning
        */
        constructor(onErrorFunction: (error: INetworkStatusListenerError) => Function, onResultFunction: (network: ICapabilitiesNet) => Function, onWarningFunction: (network: ICapabilitiesNet, warning: INetworkStatusListenerWarning) => Function);
        /**
           No data received - error condition, not authorized or hardware not available.

           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: INetworkStatusListenerError): void;
        /**
           Called when network connection changes somehow.

           @param network Change to this network.
           @since ARP1.0
        */
        onResult(network: ICapabilitiesNet): void;
        /**
           Status received with warning

           @param network Change to this network.
           @param warning Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(network: ICapabilitiesNet, warning: INetworkStatusListenerWarning): void;
    }
}