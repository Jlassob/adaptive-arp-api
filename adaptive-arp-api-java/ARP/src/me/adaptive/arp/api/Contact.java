/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *
 * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * Original author:
 *
 *     * Carlos Lozano Diez
 *                 <http://github.com/carloslozano>
 *                 <http://twitter.com/adaptivecoder>
 *                 <mailto:carlos@adaptive.me>
 *
 * Contributors:
 *
 *     * Francisco Javier Martin Bueno
 *             <https://github.com/kechis>
 *             <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

import java.io.Serializable;

/**
 * Created by clozano on 08/08/14.
 */
public class Contact extends ContactUid implements Serializable {

    /**
     * The personal info from the contact
     * @since ARP1.0
     */
    private ContactPersonalInfo personalInfo;
    /**
     * The professional info from the contact
     * @since ARP1.0
     */
    private ContactProfessionalInfo professionalInfo;
    /**
     * The adresses from the contact
     * @since ARP1.0
     */
    private ContactAddress[] contactAddresses;
    /**
     * The phones from the contact
     * @since ARP1.0
     */
    private ContactPhone[] contactPhones;
    /**
     * The emails from the contact
     * @since ARP1.0
     */
    private ContactEmail[] contactEmails;
    /**
     * The websites from the contact
     * @since ARP1.0
     */
    private ContactWebsite[] contactWebsites;
    /**
     * The social network info from the contact
     * @since ARP1.0
     */
    private ContactSocial[] contactSocials;
    /**
     * The aditional tags from the contact
     * @since ARP1.0
     */
    private ContactTag[] contactTags;


    /**
     * Constructor used by implementation to set the Contact.
     * @param contactId of the Contact
     * @since ARP1.0
     */
    public Contact(String contactId) {
        super(contactId);
    }

    /**
     * Returns the personal info of the Contact
     * @return ContactPersonalInfo of the Contact
     * @since ARP1.0
     */
    public ContactPersonalInfo getPersonalInfo() {
        return personalInfo;
    }

    /**
     * Set the personal info of the Contact
     * @param personalInfo[]
     * @since ARP1.0
     */
    public void setPersonalInfo(ContactPersonalInfo personalInfo) {
        this.personalInfo = personalInfo;
    }

    /**
     * Returns the professional info of the Contact
     * @return ContactProfessionalInfo[]
     * @since ARP1.0
     */
    public ContactProfessionalInfo getProfessionalInfo() {
        return professionalInfo;
    }

    /**
     * Set the professional info of the Contact
     * @param professionalInfo[]
     * @since ARP1.0
     */
    public void setProfessionalInfo(ContactProfessionalInfo professionalInfo) {
        this.professionalInfo = professionalInfo;
    }

    /**
     * Returns all the addresses of the Contact
     * @return ContactAddress[]
     * @since ARP1.0
     */
    public ContactAddress[] getContactAddresses() {
        return contactAddresses;
    }

    /**
     * Set the addresses of the Contact
     * @param contactAddresses[]
     * @since ARP1.0
     */
    public void setContactAddresses(ContactAddress[] contactAddresses) {
        this.contactAddresses = contactAddresses;
    }

    /**
     * Returns all the phones of the Contact
     * @return ContactPhone[]
     * @since ARP1.0
     */
    public ContactPhone[] getContactPhones() {
        return contactPhones;
    }

    /**
     * Set the phones of the Contact
     * @param contactPhones[]
     * @since ARP1.0
     */
    public void setContactPhones(ContactPhone[] contactPhones) {
        this.contactPhones = contactPhones;
    }

    /**
     * Returns all the emails of the Contact
     * @return ContactEmail[]
     * @since ARP1.0
     */
    public ContactEmail[] getContactEmails() {
        return contactEmails;
    }

    /**
     * Set the emails of the Contact
     * @param contactEmails[]
     * @since ARP1.0
     */
    public void setContactEmails(ContactEmail[] contactEmails) {
        this.contactEmails = contactEmails;
    }

    /**
     * Returns all the websites of the Contact
     * @return ContactWebsite[]
     * @since ARP1.0
     */
    public ContactWebsite[] getContactWebsites() {
        return contactWebsites;
    }

    /**
     * Set the websites of the Contact
     * @param contactWebsites[]
     * @since ARP1.0
     */
    public void setContactWebsites(ContactWebsite[] contactWebsites) {
        this.contactWebsites = contactWebsites;
    }

    /**
     * Returns all the social network info of the Contact
     * @return ContactSocial[]
     * @since ARP1.0
     */
    public ContactSocial[] getContactSocials() {
        return contactSocials;
    }

    /**
     * Set the social network info of the Contact
     * @param contactSocials[]
     * @since ARP1.0
     */
    public void setContactSocials(ContactSocial[] contactSocials) {
        this.contactSocials = contactSocials;
    }

    /**
     * Returns the additional tags of the Contact
     * @return ContactTag[]
     * @since ARP1.0
     */
    public ContactTag[] getContactTags() {
        return contactTags;
    }

    /**
     * Set the additional tags of the Contact
     * @param contactTags[]
     * @since ARP1.0
     */
    public void setContactTags(ContactTag[] contactTags) {
        this.contactTags = contactTags;
    }
}
