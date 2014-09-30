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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ISession.java
//
//

#ifndef _ARPISession_H_
#define _ARPISession_H_

@class ARPCookie;
@class IOSObjectArray;

#import "JreEmulation.h"
#include "IBaseCommunication.h"

@protocol ARPISession < ARPIBaseCommunication, NSObject, JavaObject >
- (IOSObjectArray *)getCookies;

- (void)setCookiesWithARPCookieArray:(IOSObjectArray *)cookies;

- (void)setCookieWithARPCookie:(ARPCookie *)cookie;

- (void)removeCookiesWithARPCookieArray:(IOSObjectArray *)cookies;

- (void)removeCookieWithARPCookie:(ARPCookie *)cookie;

- (IOSObjectArray *)getAttributes;

- (id)getAttributeWithNSString:(NSString *)name;

- (void)setAttributeWithNSString:(NSString *)name
                          withId:(id)value;

- (IOSObjectArray *)listAttributeNames;

- (void)removeAttributeWithNSString:(NSString *)name;

- (void)removeAttributes;

@end

__attribute__((always_inline)) inline void ARPISession_init() {}

#define MeAdaptiveArpApiISession ARPISession

#endif // _ARPISession_H_
