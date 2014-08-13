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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/Column.java
//
//

#ifndef _ARPColumn_H_
#define _ARPColumn_H_

#import "JreEmulation.h"

@interface ARPColumn : NSObject {
 @public
  NSString *name_;
}

- (id)initWithNSString:(NSString *)name;

- (NSString *)getName;

- (void)setNameWithNSString:(NSString *)name;

- (void)copyAllFieldsTo:(ARPColumn *)other;

@end

__attribute__((always_inline)) inline void ARPColumn_init() {}

J2OBJC_FIELD_SETTER(ARPColumn, name_, NSString *)

typedef ARPColumn MeAdaptiveArpApiColumn;

#endif // _ARPColumn_H_
