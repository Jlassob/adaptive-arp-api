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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFile.java
//
//

#include "IFile.h"
#include "IFileDataResultCallback.h"
#include "IFileListResultCallback.h"
#include "IFileResultCallback.h"
#include "IOSClass.h"
#include "IOSPrimitiveArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIFile : NSObject
@end

@implementation ARPIFile

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "isDirectory", NULL, "Z", 0x401, NULL },
    { "exists", NULL, "Z", 0x401, NULL },
    { "delete__", "delete", "Z", 0x401, NULL },
    { "createWithNSString:withARPIFileResultCallback:", "create", "V", 0x401, NULL },
    { "createWithNSString:withNSString:withARPIFileResultCallback:", "create", "V", 0x401, NULL },
    { "mkDir", NULL, "Z", 0x401, NULL },
    { "mkDirWithBoolean:", "mkDir", "Z", 0x401, NULL },
    { "listFilesWithARPIFileListResultCallback:", "listFiles", "V", 0x401, NULL },
    { "listFilesWithNSString:withARPIFileListResultCallback:", "listFiles", "V", 0x401, NULL },
    { "getSize", NULL, "J", 0x401, NULL },
    { "getName", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getPath", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getDateCreated", NULL, "J", 0x401, NULL },
    { "getDateModified", NULL, "J", 0x401, NULL },
    { "getContentWithARPIFileDataResultCallback:", "getContent", "V", 0x401, NULL },
    { "setContentWithByteArray:withARPIFileDataResultCallback:", "setContent", "V", 0x401, NULL },
    { "canWrite", NULL, "Z", 0x401, NULL },
    { "canRead", NULL, "Z", 0x401, NULL },
    { "moveWithARPIFile:withARPIFileResultCallback:", "move", "V", 0x401, NULL },
    { "moveWithARPIFile:withARPIFileResultCallback:withBoolean:", "move", "V", 0x401, NULL },
    { "moveWithARPIFile:withBoolean:withARPIFileResultCallback:", "move", "V", 0x401, NULL },
    { "moveWithARPIFile:withBoolean:withARPIFileResultCallback:withBoolean:", "move", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIFile = { "IFile", "me.adaptive.arp.api", NULL, 0x201, 22, methods, 0, NULL, 0, NULL};
  return &_ARPIFile;
}

@end

BOOL ARPIFile_StorageTypeEnum_initialized = NO;

ARPIFile_StorageTypeEnum *ARPIFile_StorageTypeEnum_values[4];

@implementation ARPIFile_StorageTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFile_StorageTypeEnum class]) {
    ARPIFile_StorageTypeEnum_Internal = [[ARPIFile_StorageTypeEnum alloc] initWithNSString:@"Internal" withInt:0];
    ARPIFile_StorageTypeEnum_Remote = [[ARPIFile_StorageTypeEnum alloc] initWithNSString:@"Remote" withInt:1];
    ARPIFile_StorageTypeEnum_Isolated = [[ARPIFile_StorageTypeEnum alloc] initWithNSString:@"Isolated" withInt:2];
    ARPIFile_StorageTypeEnum_External = [[ARPIFile_StorageTypeEnum alloc] initWithNSString:@"External" withInt:3];
    ARPIFile_StorageTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFile_StorageTypeEnum_values count:4 type:[IOSClass classWithClass:[ARPIFile_StorageTypeEnum class]]];
}

+ (ARPIFile_StorageTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIFile_StorageTypeEnum *e = ARPIFile_StorageTypeEnum_values[i];
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
    { "Internal", "Internal", 0x4019, "Lme.adaptive.arp.api.IFile$StorageType;", &ARPIFile_StorageTypeEnum_Internal,  },
    { "Remote", "Remote", 0x4019, "Lme.adaptive.arp.api.IFile$StorageType;", &ARPIFile_StorageTypeEnum_Remote,  },
    { "Isolated", "Isolated", 0x4019, "Lme.adaptive.arp.api.IFile$StorageType;", &ARPIFile_StorageTypeEnum_Isolated,  },
    { "External", "External", 0x4019, "Lme.adaptive.arp.api.IFile$StorageType;", &ARPIFile_StorageTypeEnum_External,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFile$StorageType;"};
  static J2ObjcClassInfo _ARPIFile_StorageTypeEnum = { "StorageType", "me.adaptive.arp.api", "IFile", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIFile_StorageTypeEnum;
}

@end

BOOL ARPIFile_FileTypeEnum_initialized = NO;

ARPIFile_FileTypeEnum *ARPIFile_FileTypeEnum_values[2];

@implementation ARPIFile_FileTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFile_FileTypeEnum class]) {
    ARPIFile_FileTypeEnum_Directory = [[ARPIFile_FileTypeEnum alloc] initWithNSString:@"Directory" withInt:0];
    ARPIFile_FileTypeEnum_File = [[ARPIFile_FileTypeEnum alloc] initWithNSString:@"File" withInt:1];
    ARPIFile_FileTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFile_FileTypeEnum_values count:2 type:[IOSClass classWithClass:[ARPIFile_FileTypeEnum class]]];
}

+ (ARPIFile_FileTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIFile_FileTypeEnum *e = ARPIFile_FileTypeEnum_values[i];
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
    { "Directory", "Directory", 0x4019, "Lme.adaptive.arp.api.IFile$FileType;", &ARPIFile_FileTypeEnum_Directory,  },
    { "File", "File", 0x4019, "Lme.adaptive.arp.api.IFile$FileType;", &ARPIFile_FileTypeEnum_File,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFile$FileType;"};
  static J2ObjcClassInfo _ARPIFile_FileTypeEnum = { "FileType", "me.adaptive.arp.api", "IFile", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIFile_FileTypeEnum;
}

@end

BOOL ARPIFile_FileSecurityEnum_initialized = NO;

ARPIFile_FileSecurityEnum *ARPIFile_FileSecurityEnum_values[2];

@implementation ARPIFile_FileSecurityEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFile_FileSecurityEnum class]) {
    ARPIFile_FileSecurityEnum_Default = [[ARPIFile_FileSecurityEnum alloc] initWithNSString:@"Default" withInt:0];
    ARPIFile_FileSecurityEnum_Encrypted = [[ARPIFile_FileSecurityEnum alloc] initWithNSString:@"Encrypted" withInt:1];
    ARPIFile_FileSecurityEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFile_FileSecurityEnum_values count:2 type:[IOSClass classWithClass:[ARPIFile_FileSecurityEnum class]]];
}

+ (ARPIFile_FileSecurityEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIFile_FileSecurityEnum *e = ARPIFile_FileSecurityEnum_values[i];
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
    { "Default", "Default", 0x4019, "Lme.adaptive.arp.api.IFile$FileSecurity;", &ARPIFile_FileSecurityEnum_Default,  },
    { "Encrypted", "Encrypted", 0x4019, "Lme.adaptive.arp.api.IFile$FileSecurity;", &ARPIFile_FileSecurityEnum_Encrypted,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFile$FileSecurity;"};
  static J2ObjcClassInfo _ARPIFile_FileSecurityEnum = { "FileSecurity", "me.adaptive.arp.api", "IFile", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIFile_FileSecurityEnum;
}

@end
