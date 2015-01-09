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
///<reference path="BaseCallbackImpl.ts"/>
///<reference path="ISecurityResultCallback.ts"/>
///<reference path="ISecurityResultCallbackError.ts"/>
///<reference path="ISecurityResultCallbackWarning.ts"/>
///<reference path="SecureKeyPair.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Security result callback
       Auto-generated implementation of ISecurityResultCallback specification.
    */
    var SecurityResultCallbackImpl = (function (_super) {
        __extends(SecurityResultCallbackImpl, _super);
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        function SecurityResultCallbackImpl(id) {
            _super.call(this, id);
        }
        /**
           No data received - error condition, not authorized .

           @param error Error values
           @since ARP1.0
        */
        SecurityResultCallbackImpl.prototype.onError = function (error) {
        };
        /**
           Correct data received.

           @param keyValues key and values
           @since ARP1.0
        */
        SecurityResultCallbackImpl.prototype.onResult = function (keyValues) {
        };
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden

           @param keyValues key and values
           @param warning   Warning values
           @since ARP1.0
        */
        SecurityResultCallbackImpl.prototype.onWarning = function (keyValues, warning) {
        };
        return SecurityResultCallbackImpl;
    })(Adaptive.BaseCallbackImpl);
    Adaptive.SecurityResultCallbackImpl = SecurityResultCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=SecurityResultCallbackImpl.js.map