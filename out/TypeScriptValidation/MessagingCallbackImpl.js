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
///<reference path="CommonUtil.ts"/>
///<reference path="IMessagingCallback.ts"/>
///<reference path="IMessagingCallbackError.ts"/>
///<reference path="IMessagingCallbackWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Messaging responses
       Auto-generated implementation of IMessagingCallback specification.
    */
    var MessagingCallbackImpl = (function (_super) {
        __extends(MessagingCallbackImpl, _super);
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        function MessagingCallbackImpl(id) {
            _super.call(this, id);
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        MessagingCallbackImpl.prototype.onError = function (error) {
        };
        /**
           This method is called on Result

           @param success true if sent;false otherwise
           @since ARP1.0
        */
        MessagingCallbackImpl.prototype.onResult = function (success) {
        };
        /**
           This method is called on Warning

           @param success true if sent;false otherwise
           @param warning returned by the platform
           @since ARP1.0
        */
        MessagingCallbackImpl.prototype.onWarning = function (success, warning) {
        };
        return MessagingCallbackImpl;
    })(Adaptive.BaseCallbackImpl);
    Adaptive.MessagingCallbackImpl = MessagingCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=MessagingCallbackImpl.js.map