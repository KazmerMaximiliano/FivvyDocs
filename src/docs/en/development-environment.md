# Development environment

For the configuration of the development environments for ios and android
we strongly recommend to follow the [official React Native documentation](https://reactnative.dev/docs/environment-setup).

If your operating system is Windows, you will need to install the "Chocolatey" package manager.

To do this, just search in the windows toolbar for "Windows PowerShell" and run it as an administrator with
_right click > Run as administrator_

![](https://i.imgur.com/Oz6qEjm.png)

Then, copy and paste the following command and press the enter key

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

To start using "Chocolatey" it will be necessary to close and reopen "Windows PowerShell" as administrator.

_We recommend executing all the commands in the installation guide in a command console launched as administrator_

You can now continue with the [official React Native documentation](https://reactnative.dev/docs/environment-setup).

> IMPORTANT: Be sure to follow the instructions in the "React Native CLI Quickstart" column.
>
> ![](https://i.imgur.com/SRFW7EG.png)
>
> You can skip the steps from the "Creating a new application" section onwards.

## Android environment

Once the corresponding execution environments have been installed, it will be necessary to perform a first synchronization of the project with gradle to finalize its correct configuration.

For this we will use git to clone the project from this [link](https://gitlab.com/savvyapp/savvy-mobile)

_They need to request access to the repository administrators to continue_

```
git clone https://gitlab.com/savvyapp/savvy-mobile.git
```

Next, we will move to the branch in which we usually make changes to the project

```
cd savvy-mobile

git checkout -b refactor

git pull origin refactor
```

Next, we will need to set our environment variables

> IMPORTANT: This step is also required for the iOS project.

1. Download the configuration files from the following [link](https://drive.google.com/drive/folders/1OpPVyA0zE8t3qFnKT0yhgJbI_tdya-2A?usp=sharing)
2. Paste them in the root of the project
3. Create a file in the root of the project with the name ".env" (DON'T FORGET THE POINT)
4. Copy the content of one of the previously downloaded files to this file (we recommend copying the content of the .env.dev file).

Once the configuration of the environment variables is finished, we will proceed with the first synchronization of the project in Android. To do this we must follow the following steps.

1. Open Android Studio
2. Select the "Open" option to open a new project.
3. Select the "android" folder inside the project that we cloned with git
4. We wait for the gradle synchronization to finish.

![](https://i.imgur.com/IBXPGWZ.png)

Done, the configuration of our development environment and project is finished.

## iOS enviroment

In the case of iOS, no additional configurations are needed,
with those specified in the official React Native guide the development
environment will already be correctly configured to work with the project.

## VSCode enviroment

We recommend using [Visual Studio Code](https://code.visualstudio.com/) as the default development IDE.

We recommend installing the following extensions to facilitate and enhance the development experience.

- [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [JS JSX Snippets](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets)
- [JSX HTML <tags/>](https://marketplace.visualstudio.com/items?itemName=angelorafael.jsx-html-tags)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [React-Native/React/Redux snippets for es6/es7](https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
- [#region folding for VS Code](https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder)

We also recommend activating the automatic import order by following these steps:

- Press ctrl + shift + p (cmd in mac) an type "Open User Settings (JSON)"
- Select the first option and edit the code as follows:

  ```
  ...

  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },

  ...
  ```

## Official Snippets

To help you write the code based on the Fivvy style guide, we also provide a set of snippets available at this [link](https://github.com/KazmerMaximiliano/fivvy-snippets).

To install them in VSCode you should follow the steps below.

```

cd user_home/.vscode/extensions
git clone https://github.com/KazmerMaximiliano/fivvy-snippets

// restar vs code

```

> "user_home" is the root of your user in your operating system, for example, in windows it could be "C:\Users\user" on mac "~".

### Available snippets

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
