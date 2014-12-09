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

package me.adaptive.arp.api;

/**
   Definition of IContact interface/protocol.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public interface IContact extends IBasePIM {
     /**
        Get the contact photo
        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     void getContactPhoto(ContactUid contact, IContactPhotoResultCallback callback);

     /**
        Get all the details of a contact according to its id
        @param contact  id to search for
        @param callback called for return
        @since ARP1.0
     */
     void getContact(ContactUid contact, IContactResultCallback callback);

     /**
        Get marked fields of all contacts
        @param callback called for return
        @param fields   to get for each Contact
        @since ARP1.0
     */
     void getContactsForFields(IContactResultCallback callback, IContactFieldGroup[] fields);

     /**
        Get marked fields of all contacts according to a filter
        @param callback called for return
        @param fields   to get for each Contact
        @param filter   to search for
        @since ARP1.0
     */
     void getContactsWithFilter(IContactResultCallback callback, IContactFieldGroup[] fields, IContactFilter[] filter);

     /**
        Get all contacts
        @param callback called for return
        @since ARP1.0
     */
     void getContacts(IContactResultCallback callback);

     /**
        Search contacts according to a term with a filter and send it to the callback
        @param term     string to search
        @param callback called for return
        @param filter   to search for
        @since ARP1.0
     */
     void searchContactsWithFilter(String term, IContactResultCallback callback, IContactFilter[] filter);

     /**
        Search contacts according to a term and send it to the callback
        @param term     string to search
        @param callback called for return
        @since ARP1.0
     */
     void searchContacts(String term, IContactResultCallback callback);

     /**
        Set the contact photo
        @param contact  id to assign the photo
        @param pngImage photo as byte array
        @return true if set is successful;false otherwise
        @since ARP1.0
     */
     boolean setContactPhoto(ContactUid contact, byte[] pngImage);

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
