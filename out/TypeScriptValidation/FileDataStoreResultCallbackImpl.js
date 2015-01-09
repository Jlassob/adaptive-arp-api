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
///<reference path="FileDescriptor.ts"/>
///<reference path="IFileDataStoreResultCallback.ts"/>
///<reference path="IFileDataStoreResultCallbackError.ts"/>
///<reference path="IFileDataStoreResultCallbackWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the File store operations callback
       Auto-generated implementation of IFileDataStoreResultCallback specification.
    */
    var FileDataStoreResultCallbackImpl = (function (_super) {
        __extends(FileDataStoreResultCallbackImpl, _super);
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        function FileDataStoreResultCallbackImpl(id) {
            _super.call(this, id);
        }
        /**
           Error processing data retrieval/storage operation.

           @param error Error condition encountered.
           @since ARP1.0
        */
        FileDataStoreResultCallbackImpl.prototype.onError = function (error) {
        };
        /**
           Result of data storage operation.

           @param file File reference to stored data.
           @since ARP1.0
        */
        FileDataStoreResultCallbackImpl.prototype.onResult = function (file) {
        };
        /**
           Result with warning of data retrieval/storage operation.

           @param file    File being loaded/stored.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        FileDataStoreResultCallbackImpl.prototype.onWarning = function (file, warning) {
        };
        return FileDataStoreResultCallbackImpl;
    })(Adaptive.BaseCallbackImpl);
    Adaptive.FileDataStoreResultCallbackImpl = FileDataStoreResultCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=FileDataStoreResultCallbackImpl.js.map