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
 *     *
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

import java.io.Serializable;

/**
 * Created by clozano on 04/08/14.
 */
public interface IContact extends IBasePIM, Serializable {

    enum Filter {HAS_PHONE, HAS_EMAIL, HAS_ADDRESS}

    enum FieldGroup {PERSONAL_INFO, PROFESSIONAL_INFO, ADDRESSES, PHONES, EMAILS, WEBSITES, SOCIALS, TAGS}

    void searchContacts(String term, ContactResultCallback callback);

    void searchContacts(String term, ContactResultCallback callback, Filter... filter);

    void getContact(ContactUid contact, ContactResultCallback callback);

    void getContactPhoto(ContactUid contact, ContactResultCallback callback);

    boolean setContactPhoto(ContactUid contact, byte[] pngImage);

    void getContacts(ContactResultCallback callback);

    void getContacts(ContactResultCallback callback, FieldGroup... fields);

    void getContacts(ContactResultCallback callback, FieldGroup[] fields, Filter... filter);

}
