/// <reference path="APIBean.d.ts" />
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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Structure representing the assigned tags data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactTag extends APIBean {
        /**
           The name of the Tag
        */
        name: string;
        /**
           The value of the Tag
        */
        value: string;
        /**
           Constructor used by the implementation

           @param value Value of the tag
           @param name  Name of the tag
           @since ARP1.0
        */
        constructor(name: string, value: string);
        /**
           Returns the name of the Tag

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name of the Tag

           @param name Name of the tag
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Returns the value of the Tag

           @return value
           @since ARP1.0
        */
        getValue(): string;
        /**
           Set the value of the Tag

           @param value Value of the tag
           @since ARP1.0
        */
        setValue(value: string): void;
    }
}
