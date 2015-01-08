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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="BaseListenerImpl.ts"/>
///<reference path="ICapabilitiesNet.ts"/>
///<reference path="INetworkStatusListener.ts"/>
///<reference path="INetworkStatusListenerError.ts"/>
///<reference path="INetworkStatusListenerWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Network status listener events
       Auto-generated implementation of INetworkStatusListener specification.
    */
    var NetworkStatusListenerImpl = (function (_super) {
        __extends(NetworkStatusListenerImpl, _super);
        /**
           Constructor with listener id.

           @param id  The id of the listener.
        */
        function NetworkStatusListenerImpl(id) {
            _super.call(this, id);
        }
        /**
           No data received - error condition, not authorized or hardware not available.

           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        NetworkStatusListenerImpl.prototype.onError = function (error) {
        };
        /**
           Called when network connection changes somehow.

           @param network Change to this network.
           @since ARP1.0
        */
        NetworkStatusListenerImpl.prototype.onResult = function (network) {
        };
        /**
           Status received with warning

           @param network Change to this network.
           @param warning Type of warning encountered during reading.
           @since ARP1.0
        */
        NetworkStatusListenerImpl.prototype.onWarning = function (network, warning) {
        };
        return NetworkStatusListenerImpl;
    })(Adaptive.BaseListenerImpl);
    Adaptive.NetworkStatusListenerImpl = NetworkStatusListenerImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=NetworkStatusListenerImpl.js.map