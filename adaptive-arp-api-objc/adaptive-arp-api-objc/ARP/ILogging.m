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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ILogging.java
//
//

#include "ILogging.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPILogging : NSObject
@end

@implementation ARPILogging

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "logWithARPILogging_LogLevelEnum:withNSString:", "log", "V", 0x401, NULL },
    { "logWithARPILogging_LogLevelEnum:withNSString:withNSString:", "log", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPILogging = { "ILogging", "me.adaptive.arp.api", NULL, 0x201, 2, methods, 0, NULL, 0, NULL};
  return &_ARPILogging;
}

@end

BOOL ARPILogging_LogLevelEnum_initialized = NO;

ARPILogging_LogLevelEnum *ARPILogging_LogLevelEnum_values[5];

@implementation ARPILogging_LogLevelEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPILogging_LogLevelEnum class]) {
    ARPILogging_LogLevelEnum_DEBUG_ = [[ARPILogging_LogLevelEnum alloc] initWithNSString:@"DEBUG_" withInt:0];
    ARPILogging_LogLevelEnum_WARN = [[ARPILogging_LogLevelEnum alloc] initWithNSString:@"WARN" withInt:1];
    ARPILogging_LogLevelEnum_ERROR = [[ARPILogging_LogLevelEnum alloc] initWithNSString:@"ERROR" withInt:2];
    ARPILogging_LogLevelEnum_INFO = [[ARPILogging_LogLevelEnum alloc] initWithNSString:@"INFO" withInt:3];
    ARPILogging_LogLevelEnum_Unknown = [[ARPILogging_LogLevelEnum alloc] initWithNSString:@"Unknown" withInt:4];
    ARPILogging_LogLevelEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPILogging_LogLevelEnum_values count:5 type:[IOSClass classWithClass:[ARPILogging_LogLevelEnum class]]];
}

+ (ARPILogging_LogLevelEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 5; i++) {
    ARPILogging_LogLevelEnum *e = ARPILogging_LogLevelEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "DEBUG_", NULL, 0x4019, "Lme.adaptive.arp.api.ILogging$LogLevel;", &ARPILogging_LogLevelEnum_DEBUG_,  },
    { "WARN", "WARN", 0x4019, "Lme.adaptive.arp.api.ILogging$LogLevel;", &ARPILogging_LogLevelEnum_WARN,  },
    { "ERROR", "ERROR", 0x4019, "Lme.adaptive.arp.api.ILogging$LogLevel;", &ARPILogging_LogLevelEnum_ERROR,  },
    { "INFO", "INFO", 0x4019, "Lme.adaptive.arp.api.ILogging$LogLevel;", &ARPILogging_LogLevelEnum_INFO,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ILogging$LogLevel;", &ARPILogging_LogLevelEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ILogging$LogLevel;"};
  static J2ObjcClassInfo _ARPILogging_LogLevelEnum = { "LogLevel", "me.adaptive.arp.api", "ILogging", 0x4019, 1, methods, 5, fields, 1, superclass_type_args};
  return &_ARPILogging_LogLevelEnum;
}

@end
