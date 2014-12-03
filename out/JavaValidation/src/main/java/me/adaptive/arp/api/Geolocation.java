/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
Structure representing the data a single geolocation reading.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
public class Geolocation {

     /**
        The current device altitude (or Z coordinate). Measured in meters.
     */
     private double altitude;
     /**
        The Y coordinate (or latitude). Measured in degrees.
     */
     private double latitude;
     /**
        The X coordinate (or longitude). Measured in degrees.
     */
     private double longitude;
     /**
        Dilution of precision on the X measurement. Measured in meters.
     */
     private float xDoP;
     /**
        Dilution of precision on the Y measurement. Measured in meters.
     */
     private float yDoP;

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/