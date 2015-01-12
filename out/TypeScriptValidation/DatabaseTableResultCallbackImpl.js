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
///<reference path="DatabaseTable.ts"/>
///<reference path="IDatabaseTableResultCallback.ts"/>
///<reference path="IDatabaseTableResultCallbackError.ts"/>
///<reference path="IDatabaseTableResultCallbackWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Cloud operations
       Auto-generated implementation of IDatabaseTableResultCallback specification.
    */
    /**
       DatabaseTableResultCallback control dictionary.
    */
    var registeredDatabaseTableResultCallback = new Adaptive.Dictionary([]);
    /**
       DatabaseTableResultCallback global callback handlers.
    */
    function handleDatabaseTableResultCallbackError(id, error) {
        var callback = registeredDatabaseTableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseTableResultCallback dictionary.");
        }
        else {
            registeredDatabaseTableResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleDatabaseTableResultCallbackError = handleDatabaseTableResultCallbackError;
    function handleDatabaseTableResultCallbackResult(id, databaseTable) {
        var callback = registeredDatabaseTableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseTableResultCallback dictionary.");
        }
        else {
            registeredDatabaseTableResultCallback.remove("" + id);
            callback.onResult(databaseTable);
        }
    }
    Adaptive.handleDatabaseTableResultCallbackResult = handleDatabaseTableResultCallbackResult;
    function handleDatabaseTableResultCallbackWarning(id, databaseTable, warning) {
        var callback = registeredDatabaseTableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseTableResultCallback dictionary.");
        }
        else {
            registeredDatabaseTableResultCallback.remove("" + id);
            callback.onWarning(databaseTable, warning);
        }
    }
    Adaptive.handleDatabaseTableResultCallbackWarning = handleDatabaseTableResultCallbackWarning;
    var DatabaseTableResultCallbackImpl = (function (_super) {
        __extends(DatabaseTableResultCallbackImpl, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IDatabaseTableResultCallbackError
           @param onResultFunction Function receiving parameters of type: DatabaseTable
           @param onWarningFunction Function receiving parameters of type: DatabaseTable, IDatabaseTableResultCallbackWarning
        */
        function DatabaseTableResultCallbackImpl(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: DatabaseTableResultCallbackImpl onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: DatabaseTableResultCallbackImpl onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: DatabaseTableResultCallbackImpl onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        DatabaseTableResultCallbackImpl.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: DatabaseTableResultCallbackImpl contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Result callback for correct responses

           @param databaseTable Returns the databaseTable
           @since ARP1.0
        */
        DatabaseTableResultCallbackImpl.prototype.onResult = function (databaseTable) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: DatabaseTableResultCallbackImpl contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(databaseTable);
            }
        };
        /**
           Result callback for warning responses

           @param databaseTable Returns the databaseTable
           @param warning       Returned Warning
           @since ARP1.0
        */
        DatabaseTableResultCallbackImpl.prototype.onWarning = function (databaseTable, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: DatabaseTableResultCallbackImpl contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(databaseTable, warning);
            }
        };
        return DatabaseTableResultCallbackImpl;
    })(Adaptive.BaseCallbackImpl);
    Adaptive.DatabaseTableResultCallbackImpl = DatabaseTableResultCallbackImpl;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DatabaseTableResultCallbackImpl.js.map