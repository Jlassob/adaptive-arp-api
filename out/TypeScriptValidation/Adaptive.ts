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
module Adaptive {

     /**
     Represents a local or remote service response.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ServiceResponse {
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the binary Content.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : string;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The headers array (name,value pairs) to be included on the I/O service request.
          */
          headers : Array<Header>;
          /**
             The session context for the Request/Response.
          */
          session : ISession;
     }
     /**
     Structure representing the address data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactAddress {
          /**
             The address type
          */
          type : ContactAddressType;
          /**
             The Contact address
          */
          address : string;
     }
     /**
     Structure representing the website data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactWebsite {
          /**
             The url of the website
          */
          url : string;
     }
     /**
     Represents a specific application life-cycle stage.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Lifecycle {
          /**
             Represent the state of the app
          */
          state : LifecycleState;
     }
     /**
     Represents an instance of a service.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Service {
          /**
             The method used
          */
          method : IServiceMethod;
          /**
             The type of the service
          */
          type : IServiceType;
          /**
             Enpoint of the service
          */
          endpoint : Endpoint;
          /**
             The service name
          */
          name : string;
     }
     /**
     Structure representing the social data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactSocial {
          /**
             The social network
          */
          socialNetwork : ContactSocialNetwork;
          /**
             The profileUrl
          */
          profileUrl : string;
     }
     /**
     Structure representing the binary attachment data.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class AttachmentData {
          /**
             The raw data for the current file attachment (byte array)
          */
          data : Array<number>;
          /**
             The data size (in bytes) of the current file attachment
          */
          dataSize : number;
          /**
             The name of the current file attachment
          */
          fileName : string;
          /**
             The mime type of the current attachment
          */
          mimeType : string;
          /**
             The relative path where the contents for the attachment file could be located.
          */
          referenceUrl : string;
     }
     /**
     Represents the basic information about the operating system.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class OSInfo {
          /**
             The name of the operating system.
          */
          name : string;
          /**
             The vendor of the operating system.
          */
          vendor : string;
          /**
             The version/identifier of the operating system.
          */
          version : string;
     }
     /**
     Structure representing the column specification of a data table.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Column {
          /**
             Name of the column
          */
          name : string;
     }
     /**
     Structure representing a database reference.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Database {
          /**
             Indicates if database was created or needs to be created as Compressed.
          */
          compress : boolean;
          /**
             Database Name (name of the .db local file).
          */
          name : string;
     }
     /**
     Represents a local or remote service request.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ServiceRequest {
          /**
             The HTTP procotol version to be used for this request.
          */
          protocolVersion : IServiceProtocolVersion;
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The headers array (name,value pairs) to be included on the I/O service request.
          */
          headers : Array<Header>;
          /**
             The request method
          */
          method : string;
          /**
             The byte[] representing the Content field.
          */
          rawContent : Array<number>;
          /**
             The session context for the Request/Response.
          */
          session : ISession;
     }
     /**
     Structure representing the data of a http cookie.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Cookie {
          /**
             Cookie creation timestamp in milliseconds.
          */
          creation : number;
          /**
             Value of the Cookie
          */
          data : string;
          /**
             Domain for which the cookie is valid.
          */
          domain : string;
          /**
             Cookie expiry in milliseconds or -1 for session only.
          */
          expiry : number;
          /**
             Name ot the cookie
          */
          name : string;
          /**
             URI path for which the cookie is valid.
          */
          path : string;
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          scheme : string;
          /**
             Cookie is secure (https only)
          */
          secure : boolean;
     }
     /**
     Structure representing the data elements of an email addressee.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class EmailAddress {
          /**
             The Email address
          */
          address : string;
     }
     /**
     Structure representing the phone data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactPhone {
          /**
             The phone number phoneType
          */
          phoneType : ContactPhoneType;
          /**
             The phone number
          */
          phone : string;
     }
     /**
     Structure representing the personal info data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactPersonalInfo {
          /**
             The title of the Contact
          */
          title : ContactPersonalInfoTitle;
          /**
             The last name of the Contact
          */
          lastName : string;
          /**
             The middle name of the Contact if it proceeds
          */
          middleName : string;
          /**
             The name of the Contact
          */
          name : string;
     }
     /**
     Structure representing the a physical or logical button on a device.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Button {
          /**
             Button type
          */
          type : ICapabilitiesButton;
     }
     /**
     Structure representing a remote or local service access end-point.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Endpoint {
          /**
             The remote serice host (alias or IP).
          */
          host : string;
          /**
             The remote service path (to be added to the host and port url).
          */
          path : string;
          /**
             The remote service accessible port.
          */
          port : number;
          /**
             The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
          */
          proxy : string;
          /**
             The remote service scheme.
          */
          scheme : string;
     }
     /**
     Represents a data table composed of columns and rows.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Table {
          /**
             Number of columns.
          */
          columnCount : number;
          /**
             Definition of columns.
          */
          columns : Array<Column>;
          /**
             Name of the table.
          */
          name : string;
          /**
             Number of rows.
          */
          rowCount : number;
          /**
             Rows of the table containing the data.
          */
          rows : Array<Row>;
     }
     /**
     Structure representing the data elements of an email.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Email {
          /**
             Array of attatchments
          */
          attachmentData : Array<AttachmentData>;
          /**
             Array of Email Blind Carbon Copy recipients
          */
          bccRecipients : Array<EmailAddress>;
          /**
             Array of Email Carbon Copy recipients
          */
          ccRecipients : Array<EmailAddress>;
          /**
             Message body
          */
          messageBody : string;
          /**
             Message body mime type
          */
          messageBodyMimeType : string;
          /**
             Subject of the email
          */
          subject : string;
          /**
             Array of Email recipients
          */
          toRecipients : Array<EmailAddress>;
     }
     /**
     Structure representing the internal unique identifier data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactUid {
          /**
             The id of the Contact
          */
          contactId : string;
     }
     /**
     Structure representing the data of a http request or response header.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Header {
          /**
             Value of the header
          */
          data : string;
          /**
             Name ot the header
          */
          name : string;
     }
     /**
     Represents a single secureKey-value pair.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class SecureKeyPair {
          secureData : string;
          secureKey : string;
     }
     /**
     Structure representing the data of a single acceleration reading.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Acceleration {
          /**
             Timestamp of the acceleration reading.
          */
          timeStamp : number;
          /**
             X-axis component of the acceleration.
          */
          x : number;
          /**
             Y-axis component of the acceleration.
          */
          y : number;
          /**
             Z-axis component of the acceleration.
          */
          z : number;
     }
     /**
     Structure representing the data a single geolocation reading.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Geolocation {
          /**
             The current device altitude (or Z coordinate). Measured in meters.
          */
          altitude : number;
          /**
             The Y coordinate (or latitude). Measured in degrees.
          */
          latitude : number;
          /**
             The X coordinate (or longitude). Measured in degrees.
          */
          longitude : number;
          /**
             Dilution of precision on the X measurement. Measured in meters.
          */
          xDoP : number;
          /**
             Dilution of precision on the Y measurement. Measured in meters.
          */
          yDoP : number;
     }
     /**
     Represents a specific user or system locate.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Locale {
          /**
             A valid ISO Country Code.
          */
          country : string;
          /**
             A valid ISO Language Code.
          */
          language : string;
     }
     /**
     Structure representing the professional info data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactProfessionalInfo {
          /**
             The company of the job
          */
          company : string;
          /**
             The job description
          */
          jobDescription : string;
          /**
             The job title
          */
          jobTitle : string;
     }
     /**
     Structure representing the email data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactEmail {
          /**
             The type of the email
          */
          type : ContactEmailType;
          /**
             Email of the Contact
          */
          email : string;
          /**
             Whether the email is the primary one or not
          */
          primary : boolean;
     }
     /**
     Represents a row for a data table.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Row {
          /**
             The values of the row.
          */
          values : Array<any>;
     }
     /**
     Structure representing the basic device information.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class DeviceInfo {
          /**
             Model of device - equivalent to device release or version.
          */
          model : string;
          /**
             Name of device - equivalent to brand.
          */
          name : string;
          /**
             Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          uuid : string;
          /**
             Vendor of the device hardware.
          */
          vendor : string;
     }
     /**
     Structure representing the assigned tags data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactTag {
          /**
             The value of the Tag
          */
          dataValue : string;
          /**
             The name of the Tag
          */
          name : string;
     }
     /**
     Structure representing the data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Contact extends ContactUid {
          /**
             The adresses from the contact
          */
          contactAddresses : Array<ContactAddress>;
          /**
             The emails from the contact
          */
          contactEmails : Array<ContactEmail>;
          /**
             The phones from the contact
          */
          contactPhones : Array<ContactPhone>;
          /**
             The social network info from the contact
          */
          contactSocials : Array<ContactSocial>;
          /**
             The aditional tags from the contact
          */
          contactTags : Array<ContactTag>;
          /**
             The websites from the contact
          */
          contactWebsites : Array<ContactWebsite>;
          /**
             The personal info from the contact
          */
          personalInfo : ContactPersonalInfo;
          /**
             The professional info from the contact
          */
          professionalInfo : ContactProfessionalInfo;
     }
     /**
     Enumeration ContactAddressType
     */
     export class ContactAddressType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Home = new ContactAddressType("Home");
          static Work = new ContactAddressType("Work");
          static Other = new ContactAddressType("Other");
          static Unknown = new ContactAddressType("Unknown");

     }
     /**
     Enumeration LifecycleState
     */
     export class LifecycleState {

          constructor(public value:string){}
          toString(){return this.value;}

          static Starting = new LifecycleState("Starting");
          static Started = new LifecycleState("Started");
          static Running = new LifecycleState("Running");
          static Paused = new LifecycleState("Paused");
          static PausedIdle = new LifecycleState("PausedIdle");
          static PausedRun = new LifecycleState("PausedRun");
          static Resuming = new LifecycleState("Resuming");
          static Stopping = new LifecycleState("Stopping");
          static Unknown = new LifecycleState("Unknown");

     }
     /**
     Enumeration IServiceMethod
     */
     export class IServiceMethod {

          constructor(public value:string){}
          toString(){return this.value;}

          static POST = new IServiceMethod("POST");
          static GET = new IServiceMethod("GET");
          static Unknown = new IServiceMethod("Unknown");

     }
     /**
     Enumeration IServiceType
     */
     export class IServiceType {

          constructor(public value:string){}
          toString(){return this.value;}

          static SERVICETYPE_AMF_SERIALIZATION = new IServiceType("SERVICETYPE_AMF_SERIALIZATION");
          static SERVICETYPE_GWT_RPC = new IServiceType("SERVICETYPE_GWT_RPC");
          static SERVICETYPE_OCTET_BINARY = new IServiceType("SERVICETYPE_OCTET_BINARY");
          static SERVICETYPE_REMOTING_SERIALIZATION = new IServiceType("SERVICETYPE_REMOTING_SERIALIZATION");
          static SERVICETYPE_REST_JSON = new IServiceType("SERVICETYPE_REST_JSON");
          static SERVICETYPE_REST_XML = new IServiceType("SERVICETYPE_REST_XML");
          static SERVICETYPE_SOAP_JSON = new IServiceType("SERVICETYPE_SOAP_JSON");
          static SERVICETYPE_SOAP_XML = new IServiceType("SERVICETYPE_SOAP_XML");
          static SERVICETYPE_XMLRPC_JSON = new IServiceType("SERVICETYPE_XMLRPC_JSON");
          static SERVICETYPE_XMLRPC_XML = new IServiceType("SERVICETYPE_XMLRPC_XML");
          static Unknown = new IServiceType("Unknown");

     }
     /**
     Enumeration ContactSocialNetwork
     */
     export class ContactSocialNetwork {

          constructor(public value:string){}
          toString(){return this.value;}

          static Twitter = new ContactSocialNetwork("Twitter");
          static Facebook = new ContactSocialNetwork("Facebook");
          static GooglePlus = new ContactSocialNetwork("GooglePlus");
          static LinkedIn = new ContactSocialNetwork("LinkedIn");
          static Flickr = new ContactSocialNetwork("Flickr");
          static Unknown = new ContactSocialNetwork("Unknown");

     }
     /**
     Enumeration IServiceProtocolVersion
     */
     export class IServiceProtocolVersion {

          constructor(public value:string){}
          toString(){return this.value;}

          static HTTP_PROTOCOL_VERSION_1_0 = new IServiceProtocolVersion("HTTP_PROTOCOL_VERSION_1_0");
          static HTTP_PROTOCOL_VERSION_1_1 = new IServiceProtocolVersion("HTTP_PROTOCOL_VERSION_1_1");
          static Unknown = new IServiceProtocolVersion("Unknown");

     }
     /**
     Enumeration ContactPhoneType
     */
     export class ContactPhoneType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Mobile = new ContactPhoneType("Mobile");
          static Work = new ContactPhoneType("Work");
          static Home = new ContactPhoneType("Home");
          static Main = new ContactPhoneType("Main");
          static HomeFax = new ContactPhoneType("HomeFax");
          static WorkFax = new ContactPhoneType("WorkFax");
          static Other = new ContactPhoneType("Other");
          static Unknown = new ContactPhoneType("Unknown");

     }
     /**
     Enumeration ContactPersonalInfoTitle
     */
     export class ContactPersonalInfoTitle {

          constructor(public value:string){}
          toString(){return this.value;}

          static Mr = new ContactPersonalInfoTitle("Mr");
          static Mrs = new ContactPersonalInfoTitle("Mrs");
          static Ms = new ContactPersonalInfoTitle("Ms");
          static Dr = new ContactPersonalInfoTitle("Dr");
          static Unknown = new ContactPersonalInfoTitle("Unknown");

     }
     /**
     Enumeration ICapabilitiesButton
     */
     export class ICapabilitiesButton {

          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ICapabilitiesButton("HomeButton");
          static BackButton = new ICapabilitiesButton("BackButton");
          static OptionButton = new ICapabilitiesButton("OptionButton");
          static Unknown = new ICapabilitiesButton("Unknown");

     }
     /**
     Enumeration ContactEmailType
     */
     export class ContactEmailType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Personal = new ContactEmailType("Personal");
          static Work = new ContactEmailType("Work");
          static Other = new ContactEmailType("Other");
          static Unknown = new ContactEmailType("Unknown");

     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
