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

//
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IServices.java
//
//

#ifndef _ARPIServices_H_
#define _ARPIServices_H_

@class ARPRequest;
@class ARPService;
@protocol ARPIIOCallback;

#import "JreEmulation.h"
#include "IBaseData.h"
#include "java/io/Serializable.h"

@protocol ARPIServices < ARPIBaseData, JavaIoSerializable, NSObject, JavaObject >
- (BOOL)registerServiceWithARPService:(ARPService *)service;

- (BOOL)unregisterServiceWithARPService:(ARPService *)service;

- (void)InvokeServiceWithARPRequest:(ARPRequest *)request
                     withARPService:(ARPService *)service
                 withARPIIOCallback:(id<ARPIIOCallback>)callback;

@end

__attribute__((always_inline)) inline void ARPIServices_init() {}

#define MeAdaptiveArpApiIServices ARPIServices

#endif // _ARPIServices_H_
