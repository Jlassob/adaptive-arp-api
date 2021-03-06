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
 *     * Ferran Vila Conesa
 *                 <http://github.com/fnva>
 *                 <http://twitter.com/ferran_vila>
 *                 <mailto:ferran.vila.conesa@gmail.com>
 *
 *     * Aryslan
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 *     * Francisco Javier Martin Bueno
 *                 <https://github.com/kechis>
 *                 <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;


/**
 * Structure representing the social data elements of a contact.
 *
 * @author Francisco Javier Martin Bueno
 * @since v2.0
 */
public class ContactSocial extends APIBean {

    /**
     * The social network
     */
    private SocialNetwork socialNetwork;

    /**
     * The profileUrl
     */
    private String profileUrl;

    /**
     * Default constructor
     *
     * @since v2.0
     */
    public ContactSocial() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param socialNetwork of the profile
     * @param profileUrl    of the user
     * @since v2.0
     */
    public ContactSocial(SocialNetwork socialNetwork, String profileUrl) {
        this.socialNetwork = socialNetwork;
        this.profileUrl = profileUrl;
    }

    /**
     * Returns the social network
     *
     * @return socialNetwork
     * @since v2.0
     */
    public SocialNetwork getSocialNetwork() {
        return socialNetwork;
    }

    /**
     * Set the social network
     *
     * @param socialNetwork of the profile
     * @since v2.0
     */
    public void setSocialNetwork(SocialNetwork socialNetwork) {
        this.socialNetwork = socialNetwork;
    }

    /**
     * Returns the profile url of the user
     *
     * @return profileUrl
     * @since v2.0
     */
    public String getProfileUrl() {
        return profileUrl;
    }

    /**
     * Set the profile url of the iser
     *
     * @param profileUrl of the user
     * @since v2.0
     */
    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    /**
     * Social Networks
     *
     * @since v2.0
     */
    public enum SocialNetwork {
        Twitter, Facebook, GooglePlus, LinkedIn, Flickr, Unknown
    }
}
