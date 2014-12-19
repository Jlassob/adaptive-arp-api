#!/bin/sh
# Join all scripts into a combined JavaScript file. NOTE: you *must* include files in their precise order
# of inheritance and dependency; failing to do this will report errors when creating instances of classes
# from JavaScript and you're going to have a very bad time. As Mc Hammer would say: 'You can't touch dis!'
# unless you *really* know what you're doing.

# ps. This file is AUTO-GENERATED.

tsc --out adaptive-full.js IAppContextWebview.ts IAppContext.ts IAppResource.ts IAppResourceHandler.ts IFile.ts IAppRegistry.ts APIBridge.ts IAdaptiveRP.ts IBaseCommerce.ts IBaseCallback.ts IBaseListener.ts IBaseUI.ts IBaseData.ts IBaseCommunication.ts IBaseSensor.ts IBaseSecurity.ts IBaseSocial.ts IBaseSystem.ts IBaseApplication.ts IBaseNotification.ts IBaseUtil.ts IBasePIM.ts IBaseReader.ts IBaseMedia.ts ILifecycle.ts IAds.ts IMap.ts IBarometer.ts INetworkStatus.ts IOAuth.ts IStore.ts IBrowser.ts IServiceResultCallback.ts IContactPhotoResultCallback.ts IFileListResultCallback.ts ITimer.ts IFileSystem.ts INetworkInfo.ts IAmbientLight.ts ILifecycleListener.ts ICapabilities.ts IWallet.ts IButtonListener.ts IBarcode.ts ICrypto.ts INFC.ts ICloud.ts IUI.ts ICamera.ts IFileDataStoreResultCallback.ts IOCR.ts IDatabase.ts ILogging.ts IService.ts IRSS.ts ILinkedIn.ts IImaging.ts IXML.ts IVibration.ts ICalendar.ts IQRCode.ts INetworkReachability.ts IOS.ts IFileResultCallback.ts INetworkNaming.ts IUpdate.ts IGeolocation.ts IContact.ts IAcceleration.ts IGeolocationListener.ts IMagnetometer.ts INetworkStatusListener.ts IProximity.ts IAlarm.ts IGyroscope.ts ISocket.ts IManagement.ts IInternalStorage.ts IRuntime.ts IMessagingCallback.ts IDevice.ts ICompression.ts IAppResourceCallback.ts IAccelerationListener.ts IDatabaseResultCallback.ts IAudio.ts IGlobalization.ts ISecurityResultCallback.ts ISettings.ts IFileDataLoadResultCallback.ts IPrinting.ts IMail.ts IVideo.ts ITelephony.ts IBluetooth.ts IOpenId.ts INetworkReachabilityCallback.ts IContactResultCallback.ts INotification.ts IDisplay.ts IAnalytics.ts ISecurity.ts ITwitter.ts IConcurrent.ts IDesktop.ts IDatabaseTableResultCallback.ts IFacebook.ts IDataStream.ts IGooglePlus.ts IMessaging.ts INotificationLocal.ts APIBean.ts ContactEmail.ts ContactProfessionalInfo.ts Button.ts OSInfo.ts ServiceEndpoint.ts Lifecycle.ts Email.ts Database.ts DatabaseTable.ts Contact.ts DeviceInfo.ts APIRequest.ts Locale.ts ServiceHeader.ts Acceleration.ts ContactUid.ts SecureKeyPair.ts ContactTag.ts ServiceRequest.ts ContactPersonalInfo.ts DatabaseRow.ts ServiceSession.ts ServiceResponse.ts ContactAddress.ts EmailAttachmentData.ts ContactPhone.ts FileDescriptor.ts ServiceCookie.ts EmailAddress.ts ContactWebsite.ts Service.ts DatabaseColumn.ts KeyPair.ts Geolocation.ts ContactSocial.ts
