# Development environment

For the configuration of the development environments for ios and android
we strongly recommend following the official [React Native documentation](https://reactnative.dev/docs/environment-setup).

Once the initial development environment is configured, it will be necessary to clone the project to continue with the configuration of the development environments specific to it.

## Android enviroment

For android, the [JDK](https://www.oracle.com/ar/java/technologies/javase/javase8-archive-downloads.html) version used by the project when compiling is "1.8.0". To download and install this version you can visit the following [link](https://www.oracle.com/ar/java/technologies/javase/javase8-archive-downloads.html).

Once the correct version of the [JDK](https://www.oracle.com/ar/java/technologies/javase/javase8-archive-downloads.html) is installed, it will be necessary to configure the environment variables within the operating system so that it is recognizable during the compilation process.

Windows:

1. Right click My Computer and select Properties.
2. On the Advanced tab, select Environment Variables, and then edit JAVA_HOME
   to point to where the JDK software is located, for example, C:\Program Files\Java\jdk1.8.0.

Mac:

- For Korn and bash shells, run the following commands:
  ```
  export JAVA_HOME=jdk-install-dir
  export PATH=$JAVA_HOME/bin:$PATH
  ```
- For the bourne shell, run the following commands:
  ```
  JAVA_HOME=jdk-install-dir
  export JAVA_HOME
  PATH=$JAVA_HOME/bin:$PATH
  export PATH
  ```
- For the C shell, run the following commands:
  ```
  setenv JAVA_HOME jdk-install-dir
  setenv PATH $JAVA_HOME/bin:$PATHopen -a /Applications/Android\ Studio.app
  export PATH=$JAVA_HOME/bin:$PATH
  ```

Once the JDK version is installed and configured,
we will open the project with android studio
(For Mac computers with M1 chip or higher it is
recommended to use the command open -a /Applications/Android Studio.app).
And we will wait for the Gradle synchronization
to finish in it to continue with the following steps:

> IMPORTANT: If the gradle synchronization does not finish, you can try to download the environment files from [here](https://drive.google.com/drive/u/0/folders/1OpPVyA0zE8t3qFnKT0yhgJbI_tdya-2A), paste _.env.dev_, _.env.test_, _.env.uat_ and _.env.prod_ in the root folder (/) and create a new file called _.env_, in this file copy all the content of some other _.env.\*_ file (we recommend .env.test) and try again the gradle synchronization in android studio.

1. Open the android studio SDK Manager, located in the upper right corner of the program.
   ![](https://i.imgur.com/BLIiqyc.png)
2. We go to the "SDK Tools" tab and check the "Show Package Details" box,
   then in the main window we select the NDK version 21.0.6113669
   by clicking on the SDK collapsible and click on "Apply" or "Ok" to proceed with the installation.
   ![](https://i.imgur.com/x9xETcG.png)
3. Once the installation is finished, go to "File" and then to "Project Structure".
   ![](https://i.imgur.com/HzKeUeQ.png)
4. In the "SDK Location" tab "Android NDK Location" section we will select
   the version of the NDK we have just installed.
   ![](https://i.imgur.com/7nK9SEM.png)

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

## VSCode Extensions

To help you write the code based on the Fivvy style guide, we also provide a set of snippets available at this [link](https://github.com/KazmerMaximiliano/fivvy-snippets).

To install them in VSCode you should follow the steps below.

```

cd <user home>/.vscode/extensions
git clone https://github.com/KazmerMaximiliano/fivvy-snippets

// restar vs code

```

### Available snippets

Typescript and redux toolkit (.ts)

```
fivvy-slice
```

```
fivvy-api
```

Typescript and react components (.tsx)

```
fivvy-component
```

```
fivvy-simple-component
```

```
fivvy-styled-component
```
