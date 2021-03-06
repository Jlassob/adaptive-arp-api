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
 * Interface for Managing the Services operations
 *
 * @author Francisco Javier Martin Bueno
 * @since v2.0
 */
public interface IService extends IBaseCommunication {

    /**
     * Checks whether a specific service, endpoint, function and method type is configured in the platform's
     * XML service definition file.
     *
     * @param serviceName  Service name.
     * @param endpointName Endpoint name.
     * @param functionName Function name.
     * @param method       Method type.
     * @return Returns true if the service is configured, false otherwise.
     * @since v2.0.6
     */
    boolean isServiceRegistered(String serviceName, String endpointName, String functionName, Method method);

    /**
     * Returns all the possible service tokens configured in the platform's XML service definition file.
     *
     * @return Array of service tokens configured.
     * @since v2.0.6
     */
    ServiceToken[] getServicesRegistered();

    /**
     * Obtains a ServiceToken for the given parameters to be used for the creation of requests.
     *
     * @param serviceName  Service name.
     * @param endpointName Endpoint name.
     * @param functionName Function name.
     * @param method       Method type.
     * @return ServiceToken to create a service request or null if the given parameter combination is not
     * configured in the platform's XML service definition file.
     * @since v2.0.6
     */
    ServiceToken getServiceToken(String serviceName, String endpointName, String functionName, Method method);

    /**
     * Obtains a Service token by a concrete uri (http://domain.com/path). This method would be useful when
     * a service response is a redirect (3XX) and it is necessary to make a request to another host and we
     * don't know by advance the name of the service.
     *
     * @param uri Unique Resource Identifier for a Service-Endpoint-Path-Method
     * @return ServiceToken to create a service request or null if the given parameter is not
     * configured in the platform's XML service definition file.
     * @since v2.1.4
     */
    ServiceToken getServiceTokenByUri(String uri);

    /**
     * Create a service request for the given ServiceToken. This method creates the request, populating
     * existing headers and cookies for the same service. The request is populated with all the defaults
     * for the service being invoked and requires only the request body to be set. Headers and cookies may be
     * manipulated as needed by the application before submitting the ServiceRequest via invokeService.
     *
     * @param serviceToken ServiceToken to be used for the creation of the request.
     * @return ServiceRequest with pre-populated headers, cookies and defaults for the service.
     * @since v2.0.6
     */
    ServiceRequest getServiceRequest(ServiceToken serviceToken);

    /**
     * Executes the given ServiceRequest and provides responses to the given callback handler.
     *
     * @param serviceRequest ServiceRequest with the request body.
     * @param callback       IServiceResultCallback to handle the ServiceResponse.
     * @since v2.0.6
     */
    void invokeService(ServiceRequest serviceRequest, IServiceResultCallback callback);

    /**
     * Type of available services
     *
     * @since v2.0.6
     */
    public enum Type {
        OctetBinary, RestJson, RestXml, SoapXml, Unknown
    }

    /**
     * Protocol version.
     *
     * @since v2.0.6
     */
    public enum ProtocolVersion {
        Http10, Http11, Unknown
    }

    /**
     * Http method type.
     *
     * @since v2.0.6
     */
    public enum Method {
        Post, Get, Head, Unknown
    }

    /**
     * Type of certificate validation for a given service endpoint - this flag is used for SSL/HTTPS connections
     * to provide an additional level of security.
     * · None - No certificate validation is performed.
     * · Normal - Certificate must be valid (exists and is not expired) - also valid for self-certs.
     * · Extended - Certificate must be valid and issued by a trusted root CA.
     * · Extreme - Same as extended plus mechanisms to check certificate revocation lists and fingerprinting.
     * · Unknown - When not configured, performs the same as None.
     *
     * @since v2.0.6
     */
    public enum CertificateValidation {
        None, Normal, Extended, Extreme, Unknown
    }

    /**
     * Enum to define the content encoding for service requests and responses
     *
     * @since v2.1.5
     */
    public enum ContentEncoding {
        Ascii, Utf8, IsoLatin1, Unicode, Unknown
    }
}
