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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IInternalStorage.java
//
//

#include "IInternalStorage.h"
#include "IInternalStorageResultCallback.h"
#include "IOSObjectArray.h"

@interface ARPIInternalStorage : NSObject
@end

@implementation ARPIInternalStorage

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "SetKeyValuePairsWithARPInternalStorageKeyPairArray:withNSString:withARPIInternalStorageResultCallback:", "SetKeyValuePairs", "V", 0x401, NULL },
    { "GetKeyValuePairsWithNSStringArray:withNSString:withARPIInternalStorageResultCallback:", "GetKeyValuePairs", "V", 0x401, NULL },
    { "DeleteKeyValuePairsWithNSStringArray:withNSString:withARPIInternalStorageResultCallback:", "DeleteKeyValuePairs", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIInternalStorage = { "IInternalStorage", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIInternalStorage;
}

@end