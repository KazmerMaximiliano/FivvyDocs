# Run the project

## Import the required files

- Environment files:
  Download environment files from [here](https://drive.google.com/drive/u/0/folders/1OpPVyA0zE8t3qFnKT0yhgJbI_tdya-2A) and paste
  _.env.dev_, _.env.test_, _.env.uat_ and _.env.prod_ into [root Folder](./)

- Firebase files: Download firebase development files for Android & iOS from [here](https://drive.google.com/drive/u/0/folders/1CkWwfP6mVrgkSmTlZnkne4QxuosXqFd0). (We currently use the production environment files in all other environments)
  - Paste _google-services.json_ into [android/app](android/app)
  - Paste _GoogleService-Info.Plist_ into [ios](ios/)

> IMPORTANT: These files are ignored by .gitignore, should not be commited.

## Running application

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
