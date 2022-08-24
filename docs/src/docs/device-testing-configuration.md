# Device Testing Configuration

## Android

Android device emulators can be installed from the "Virtual Device Manager"
of "Android Studio".

![](https://i.imgur.com/H1heXFg.png)

We recommend creating two devices with the following characteristics:

| Phone   | System Image |
| ------- | ------------ |
| Pixel 3 | Api 31       |
| Nexus S | Api 31       |

## iOS

Los emuladores de dispositivos iOS se pueden instalar desde “Add Additional Simulator” en Xcode.

![](https://i.imgur.com/5H7604R.png)

Recomendamos crear dos dispositivos con las siguientes características:

| iPhone    | OS       |
| --------- | -------- |
| iPhone 11 | iOS 13.5 |
| iPhone 6  | iOS 12.4 |

## Import the required files

- Environment files:
  Download environment files from [here](https://drive.google.com/drive/folders/1OpPVyA0zE8t3qFnKT0yhgJbI_tdya-2A) and paste
  _.env.dev_, _.env.test, _.env.uat* and *.env.prod\* into [root Folder](./)

- Firebase files: Download firebase development files for Android & iOS from [here](https://drive.google.com/drive/folders/18CpzxJY_WddS42oJxCSUxlSqPIGKazmN).
  - Paste _google-services.json_ into [android/app](android/app)
  - Paste _GoogleService-Info.Plist_ into [ios](ios/)

> IMPORTANT: These files are ignored by .gitignore, should not be commited.

## Run the project

- Windows:

```
npm install
npm run android:{env}
```

- Mac:

```
npm run install:mac
npm run ios:{env}
```

> Current possible environments {env}:
>
> - dev
> - test
> - uat
> - prod
>
> The env file must be at root folder in order to run the app in each environment.

### Clean the project

```
npm run android:clean
npm run ios:clean
npm run metro:clean
```
