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

/**
Structure representing the data elements of a contact.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
public class Contact : ContactUid {

     /**
        The adresses from the contact
     */
     var contactAddresses : [ContactAddress]?
     /**
        The emails from the contact
     */
     var contactEmails : [ContactEmail]?
     /**
        The phones from the contact
     */
     var contactPhones : [ContactPhone]?
     /**
        The social network info from the contact
     */
     var contactSocials : [ContactSocial]?
     /**
        The aditional tags from the contact
     */
     var contactTags : [ContactTag]?
     /**
        The websites from the contact
     */
     var contactWebsites : [ContactWebsite]?
     /**
        The personal info from the contact
     */
     var personalInfo : ContactPersonalInfo?
     /**
        The professional info from the contact
     */
     var professionalInfo : ContactProfessionalInfo?

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/