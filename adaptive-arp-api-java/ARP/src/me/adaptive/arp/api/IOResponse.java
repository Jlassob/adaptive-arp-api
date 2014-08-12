/*
 *
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
 *
 */

package me.adaptive.arp.api;

import java.lang.String;

/**
 * Created by FRMI on 12/08/2014.
 */
public class IOResponse {

    /**
     *
     * @since ARP1.0
     */
    private String content;
    /**
     *
     * @since ARP1.0
     */
    private String contentType;
    /**
     *
     * @since ARP1.0
     */
    private String contentLength;
    /**
     *
     * @since ARP1.0
     */
    private byte[] contentBinary;
    /**
     *
     * @since ARP1.0
     */
    private int contentBinaryLength;
    /**
     *
     * @since ARP1.0
     */
    private Header[] headers;
    /**
     *
     * @since ARP1.0
     */
    private Session session;

    /**
     *
     * @param content
     * @param contentType
     * @param contentLength
     * @param contentBinary
     * @param contentBinaryLength
     * @param headers
     * @param session
     * @since ARP1.0
     */
    public IOResponse(String content, String contentType, String contentLength, byte[] contentBinary, int contentBinaryLength, Header[] headers, Session session) {
        this.content = content;
        this.contentType = contentType;
        this.contentLength = contentLength;
        this.contentBinary = contentBinary;
        this.contentBinaryLength = contentBinaryLength;
        this.headers = headers;
        this.session = session;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public String getContent() {
        return content;
    }

    /**
     *
     * @param content
     * @since ARP1.0
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public String getContentType() {
        return contentType;
    }

    /**
     *
     * @param contentType
     * @since ARP1.0
     */
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public String getContentLength() {
        return contentLength;
    }

    /**
     *
     * @param contentLength
     * @since ARP1.0
     */
    public void setContentLength(String contentLength) {
        this.contentLength = contentLength;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public byte[] getContentBinary() {
        return contentBinary;
    }

    /**
     *
     * @param contentBinary
     * @since ARP1.0
     */
    public void setContentBinary(byte[] contentBinary) {
        this.contentBinary = contentBinary;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public int getContentBinaryLength() {
        return contentBinaryLength;
    }

    /**
     *
     * @param contentBinaryLength
     * @since ARP1.0
     */
    public void setContentBinaryLength(int contentBinaryLength) {
        this.contentBinaryLength = contentBinaryLength;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public Header[] getHeaders() {
        return headers;
    }

    /**
     *
     * @param headers
     * @since ARP1.0
     */
    public void setHeaders(Header[] headers) {
        this.headers = headers;
    }

    /**
     *
     * @return
     * @since ARP1.0
     */
    public Session getSession() {
        return session;
    }

    /**
     *
     * @param session
     * @since ARP1.0
     */
    public void setSession(Session session) {
        this.session = session;
    }
}
