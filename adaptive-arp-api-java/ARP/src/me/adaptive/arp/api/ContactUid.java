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
public class ContactUid implements Serializable {

    /**
     * The id of the Contact
     * @since ARP1.0
     */
    private String contactId;

    /**
     * Constructor used by implementation to set the Contact id.
     * @param contactId
     * @since ARP1.0
     */
    public ContactUid(String contactId) {
        this.contactId = contactId;
    }

    /**
     * Returns the contact id
     * @return Contactid
     * @since ARP1.0
     */
    public String getContactId() {
        return contactId;
    }

    /**
     * Set the id of the Contact
     * @param contactId
     * @since ARP1.0
     */
    public void setContactId(String contactId) {
        this.contactId = contactId;
    }
}
