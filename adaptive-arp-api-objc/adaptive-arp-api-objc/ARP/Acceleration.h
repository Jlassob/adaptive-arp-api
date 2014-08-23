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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/Acceleration.java
//
//

#ifndef _ARPAcceleration_H_
#define _ARPAcceleration_H_

@class ARPIAccelerometer_StatusEnum;

#import "JreEmulation.h"

@interface ARPAcceleration : NSObject {
 @public
  double x_;
  double y_;
  double z_;
  ARPIAccelerometer_StatusEnum *status_;
  long long int timeStamp_;
}

- (id)initWithDouble:(double)x
          withDouble:(double)y
          withDouble:(double)z;

- (id)initWithARPIAccelerometer_StatusEnum:(ARPIAccelerometer_StatusEnum *)status;

- (double)getX;

- (double)getY;

- (double)getZ;

- (ARPIAccelerometer_StatusEnum *)getStatus;

- (void)copyAllFieldsTo:(ARPAcceleration *)other;

@end

__attribute__((always_inline)) inline void ARPAcceleration_init() {}

J2OBJC_FIELD_SETTER(ARPAcceleration, status_, ARPIAccelerometer_StatusEnum *)

typedef ARPAcceleration MeAdaptiveArpApiAcceleration;

#endif // _ARPAcceleration_H_
