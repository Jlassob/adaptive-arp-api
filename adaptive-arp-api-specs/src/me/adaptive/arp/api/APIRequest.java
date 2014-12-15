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
 * Structure representing a HTML5 request to the native API.
 *
 * @author Carlos Lozano Diez
 * @since ARP1.0
 */
public class APIRequest {

    /**
     * String representing the method name to call
     */
    private String methodName;

    /**
     * Parameters of the request as JSON formatted strings.
     */
    private String[] parameters;

    /**
     * Types of the request parameters
     */
    private String[] parameterTypes;

    /**
     * Identifier of callback or listener for async operations.
     */
    private long asyncId;

    /**
     * Default constructor
     *
     * @since ARP1.0
     */
    public APIRequest() {

    }

    /**
     * Constructor with method name. No parameters
     *
     * @param methodName Name of the method
     * @since ARP1.0
     */
    public APIRequest(String methodName) {
        this.methodName = methodName;
    }

    /**
     * Constructor with all the parameters
     *
     * @param methodName     Name of the method
     * @param parameters     Array of parameters as JSON formatted strings.
     * @param parameterTypes Array of parameters types
     * @param asyncId        Id of callback or listener or zero if none for synchronous calls.
     * @since ARP1.0
     */
    public APIRequest(String methodName, String[] parameters, String[] parameterTypes, long asyncId) {
        this.methodName = methodName;
        this.parameters = parameters;
        this.parameterTypes = parameterTypes;
        this.asyncId = asyncId;
    }

    /**
     * Method name Getter
     *
     * @return Method name
     * @since ARP1.0
     */
    public String getMethodName() {
        return methodName;
    }

    /**
     * Method name Setter
     *
     * @param methodName Method name
     * @since ARP1.0
     */
    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    /**
     * Parameters Getter
     *
     * @return Parameters
     * @since ARP1.0
     */
    public String[] getParameters() {
        return parameters;
    }

    /**
     * Parameters Setter
     *
     * @param parameters Parameters, JSON formatted strings of objects.
     * @since ARP1.0
     */
    public void setParameters(String[] parameters) {
        this.parameters = parameters;
    }

    /**
     * Parameter types Getter
     *
     * @return Parameter types
     * @since ARP1.0
     */
    public String[] getParameterTypes() {
        return parameterTypes;
    }

    /**
     * Parameter types setter
     *
     * @param parameterTypes Parameter types
     * @since ARP1.0
     */
    public void setParameterTypes(String[] parameterTypes) {
        this.parameterTypes = parameterTypes;
    }

    /**
     * Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
     * listener.
     *
     * @return long with the unique id of the callback or listener, or zero if there is no associated async event.
     */
    public long getAsyncId() {
        return asyncId;
    }

    /**
     * Sets the callback or listener id to the request.
     *
     * @param asyncId The unique id of the callback or listener.
     */
    public void setAsyncId(long asyncId) {
        this.asyncId = asyncId;
    }

}