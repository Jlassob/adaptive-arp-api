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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Button.java
//
//

#ifndef _ARPButton_H_
#define _ARPButton_H_

@class ARPICapabilities_ButtonEnum;

#import "JreEmulation.h"

@interface ARPButton : NSObject {
 @public
  ARPICapabilities_ButtonEnum *type_;
}

- (id)initWithARPICapabilities_ButtonEnum:(ARPICapabilities_ButtonEnum *)type;

- (id)init;

- (ARPICapabilities_ButtonEnum *)getType;

- (void)copyAllFieldsTo:(ARPButton *)other;

@end

__attribute__((always_inline)) inline void ARPButton_init() {}

J2OBJC_FIELD_SETTER(ARPButton, type_, ARPICapabilities_ButtonEnum *)

typedef ARPButton MeAdaptiveArpApiButton;

#endif // _ARPButton_H_
