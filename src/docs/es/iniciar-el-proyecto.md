# Iniciar el proyecto

## Importar los archivos necesarios

- Archivos de entorno:
  Descargue los archivos de entorno desde [aquí](https://drive.google.com/drive/u/0/folders/1OpPVyA0zE8t3qFnKT0yhgJbI_tdya-2A) y pegue
  _.env.dev_, _.env.test_, _.env.uat_ y _.env.prod_ en la carpeta raíz (/)

- Archivos Firebase: Descarga los archivos de desarrollo de Firebase para Android e iOS desde [aquí](https://drive.google.com/drive/u/0/folders/1CkWwfP6mVrgkSmTlZnkne4QxuosXqFd0). (Actualmente utilizamos los archivos de entorno de producción en todos los demás entornos)
  - Pegue _google-services.json_ en _android/app_
  - Pegue _GoogleService-Info.Plist_ en _ios_

> IMPORTANTE: Estos archivos son ignorados por .gitignore, no deben ser "comiteados"

## Iniciar la aplicación

- Windows:

```
yarn install

yarn run android:{env}
```

- Mac:

```
yarn install

cd ios && pod install

cd ..

yarn run ios:{env}
```

> Entornos actualmente disponibles {env}:
>
> - dev
> - test
> - uat
> - prod
>
> El archivo env debe estar en la carpeta raíz para poder ejecutar la aplicación en cada entorno

### Limpiar el proyecto

```
yarn run android:clean

yarn run ios:clean

yarn run metro:clean
```
