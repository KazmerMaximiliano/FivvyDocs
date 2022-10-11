# Entorno de desarrollo

Para la configuración de los entornos de desarrollo para ios y android
recomendamos encarecidamente seguir la [documentación oficial de React Native](https://reactnative.dev/docs/environment-setup).

Si tu sistema operativo es Windows, será necesario instalar el gestor de paquetes “Chocolatey”.

Para hacerlo, tan solo debes buscar en la barra de windows “Windows PowerShell” y ejecutarlo como administrador con
_click derecho > Ejecutar como administrador_

![](https://i.imgur.com/Oz6qEjm.png)

Luego, copia y pega el siguiente comando y presiona la tecla enter

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Para comenzar a usar “Chocolatey” será necesario cerrar y volver a abrir “Windows PowerShell” como administrador.

_Recomendamos ejecutar todos los comandos de la guia de instalación en una consola de comando iniciada como administrador_

Ya puedes continuar con la [documentación oficial de React Native](https://reactnative.dev/docs/environment-setup).

> IMPORTANTE: Asegurate de seguir las instrucciones indicadas en la columna “React Native CLI Quickstart”
>
> ![](https://i.imgur.com/SRFW7EG.png)
>
> Puedes saltarte los pasos desde la sección “Creating a new application” en adelante.

## Android

Una vez instalados los entornos de ejecución correspondiente, será necesario realizar una primera sincronización del proyecto con gradle para finalizar su correcta configuración.

Para ello utilizaremos git para clonar el proyecto desde este [link](https://gitlab.com/savvyapp/savvy-mobile)

_Necesitan solicitar acceso a los administradores del repositorio para continuar_

```
git clone https://gitlab.com/savvyapp/savvy-mobile.git
```

Seguidamente, nos moveremos a la rama en la que solemos realizar cambiar al proyecto

```
cd savvy-mobile

git checkout -b refactor

git pull origin refactor
```

A continuación, necesitaremos configurar nuestras variables de entorno

> IMPORTANTE: Este paso también es necesario para el proyecto en iOS

1. Descargamos los archivos de configuración desde el siguiente [link](https://drive.google.com/drive/folders/1OpPVyA0zE8t3qFnKT0yhgJbI_tdya-2A?usp=sharing)
2. Los pegamos en la raíz del proyecto
3. Creamos un archivo en la raíz del proyecto con el nombre “.env” (NO OLVIDARSE DEL PUNTO)
4. Copiamos el contenido de alguno de los archivos previamente descargados a este archivo (recomendamos copiar el contenido del archivo .env.dev)

Una vez finalizada la configuración de la variables de entorno, procederemos con la primera sincronización del proyecto en Android. Para ello debemos seguir los siguientes pasos.

1. Abrimos Android Studio
2. Seleccionamos la opción “Open” para abrir un nuevo proyecto
3. Seleccionamos la carpeta “android” dentro del proyecto que clonamos con git
4. Esperamos que finalice la sincronización de gradle

![](https://i.imgur.com/IBXPGWZ.png)

Listo, la configuración de nuestro entorno de desarrollo y proyecto está finalizada.

## iOS

En el caso de iOS, no son necesarias configuraciones adicionales,
con las especificadas en la guía oficial de React Native el entorno de desarrollo
ya estará correctamente configurado para trabajar con el proyecto.

## Visual Studio Code

Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) como IDE de desarrollo por defecto.

Recomendamos instalar las siguientes extensiones para facilitar y mejorar la experiencia de desarrollo:

- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [JS JSX Snippets](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets)
- [JSX HTML <tags/>](https://marketplace.visualstudio.com/items?itemName=angelorafael.jsx-html-tags)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [React-Native/React/Redux snippets for es6/es7](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
- [#region folding for VS Code](https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder)

También recomendamos activar la orden de importación automática siguiendo estos pasos:

- Presione ctrl + shift + p (cmd en mac) y escriba "Open User Settings (JSON)"
- Seleccione la primera opción y edite el código como sigue:

  ```
  ...

  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },

  ...
  ```

## Snippets oficiales

Para ayudarte a escribir el código basado en la guía de estilo de Fivvy, también proporcionamos un conjunto de fragmentos disponibles en este [link](https://github.com/KazmerMaximiliano/fivvy-snippets).

Para instalarlos en Visual Studio Code debes seguir los siguientes pasos.

```

cd user_home/.vscode/extensions
git clone https://github.com/KazmerMaximiliano/fivvy-snippets

// restar vs code

```

> "user_home" es la raíz de su usuario en su sistema operativo, por ejemplo, en windows podría ser “C:\Users\user” on en mac “~”

### Snippets Disponibles

Typescript & redux toolkit (.ts)

```ts
// fivvy-slice

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

export const fivvySlice = createSlice({
  name: "fivvy",
  initialState: <CounterState>{
    counter: 10,
  },
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.counter += 1;
    },
  },
});

export const { increment } = fivvySlice.actions;
```

```ts
// fivvy-api

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FivvyAPI = createApi({
  reducerPath: "FivvyAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api/v2/" }),
  endpoints: (builder) => ({
    getFivvyByName: builder.query({
      query: () => "endpoint",
    }),
  }),
});

export const { useGetFivvyByNameQuery } = FivvyAPI;
```

Typescript & react components (.tsx)

```tsx
// fivvy-component

/* #region IMPORTS */
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
/* #endregion */

/* #region TYPES */
/* #endregion */

/* #region STYLED COMPONENTS */
/* #endregion */

export const FivvyComponent = () => {
  /* #region HOOKS */
  /* #endregion */

  /* #region STATES */
  /* #endregion */

  /* #region REFS */
  /* #endregion */

  /* #region REDUCERS */
  /* #endregion */

  /* #region ACTIONS */
  /* #endregion */

  /* #region METHODS */
  /* #endregion */

  /* #region EFFECTS */
  /* #endregion */

  /* #region RENDER */
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>FivvyComponent</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  /* #endregion */
};
```

```tsx
// fivvy-simple-component

/* #region IMPORTS */
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
/* #endregion */

export const FivvyComponent = () => {
  /* #region RENDER */
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>FivvyComponent</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  /* #endregion */
};
```

```tsx
// fivvy-styled-component

const FivvyStyleComponent = styled(View)`
  /* Where and how the box is placed */
  display: ;
  position: ;
  float: ;
  clear: ;

  /* Can the box be seen? */
  visibility: ;
  opacity: ;
  z-index: ;

  /* Layers of the box model */
  margin: ;
  outline: ;
  border: ;
  background: ;
  padding: ;

  /* Content dimensions and scrollbars */
  height: ;
  width: ;
  overflow: ;

  /* Text */
  color: ;
  text: ;
  font: ;
`;
```
