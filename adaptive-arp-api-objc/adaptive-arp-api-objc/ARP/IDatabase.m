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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IDatabase.java
//
//

#include "Database.h"
#include "IDatabase.h"
#include "IDatabaseResultCallback.h"
#include "IOSObjectArray.h"
#include "ITableResultCallback.h"
#include "Table.h"

@interface ARPIDatabase : NSObject
@end

@implementation ARPIDatabase

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "createDatabaseWithARPDatabase:withARPIDatabaseResultCallback:", "createDatabase", "V", 0x401, NULL },
    { "deleteDatabaseWithARPDatabase:withARPIDatabaseResultCallback:", "deleteDatabase", "V", 0x401, NULL },
    { "existsDatabaseWithARPDatabase:", "existsDatabase", "Z", 0x401, NULL },
    { "getDatabaseWithARPDatabase:withARPIDatabaseResultCallback:", "getDatabase", "V", 0x401, NULL },
    { "createTableWithARPDatabase:withARPTable:withARPITableResultCallback:", "createTable", "V", 0x401, NULL },
    { "deleteTableWithARPDatabase:withARPTable:withARPITableResultCallback:", "deleteTable", "V", 0x401, NULL },
    { "existsTableWithARPDatabase:withARPTable:", "existsTable", "Z", 0x401, NULL },
    { "executeSqlQueryWithARPDatabase:withNSString:withNSStringArray:withARPITableResultCallback:", "executeSqlQuery", "V", 0x401, NULL },
    { "executeSqlStatementWithARPDatabase:withNSString:withNSStringArray:withARPITableResultCallback:", "executeSqlStatement", "V", 0x401, NULL },
    { "executeSqlTransactionsWithARPDatabase:withNSStringArray:withBoolean:withARPITableResultCallback:", "executeSqlTransactions", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIDatabase = { "IDatabase", "me.adaptive.arp.api", NULL, 0x201, 10, methods, 0, NULL, 0, NULL};
  return &_ARPIDatabase;
}

@end
