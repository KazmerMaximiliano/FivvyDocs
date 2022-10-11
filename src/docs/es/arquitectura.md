# Arquitectura

La presente estructura de carpetas y archivos, es un ideal que constantemente tratamos de alcanzar en el equipo, por lo que pueden existir discrepancias entre la estructura presentada aquí y la realmente utilizada en el proyecto.

```
·
├── android
├── ios
├── patches
├── src
│   ├── assets
│   │   ├── images
│   │   │   ├── brand
│   │   │   ├── icons
│   │   │   ├── others
|   |   |   └── index.ts
│   │   ├── lottie
│   │   │   ├── <LottieFile>.json
|   |   |   └── index.ts
│   │   ├── svg
│   │   │   ├── brand
│   │   │   ├── icons
│   │   │   ├── others
|   |   |   └── index.ts
│   ├── components
│   │   ├── <ComponentName>
│   │   │   ├── <ComponentName>.tsx
│   │   │   ├── <ComponentNameStyles>.ts
│   │   │   ├── <ComponentNameType>.ts
│   │   │   └── strings.ts
│   ├── context
│   ├── hooks
│   ├── languages
│   │   ├── <Language>
│   │   │   ├── Strings
│   │   │   │   └── <ScreenName>.ts
│   │   │   └── index.ts
│   ├── navigation
│   │   └── index.tsx
│   ├── screens
│   │   ├── <ScreenStackName>
│   │   │   ├── <ScreenName>
│   │   │   │   ├── components
│   │   │   │   │   ├── styledComponents
│   │   │   │   │   │   └── <StyleComponentName>.ts
│   │   │   │   │   ├── <ComponentName>
│   │   │   │   │   ├── <ComponentName>.tsx
│   │   │   │   │   ├── <ComponentNameStrings>.ts
│   │   │   │   │   └── <ComponentNameType>.ts
│   │   │   │   └── index.tsx
│   │   │   └── navigation.tsx
│   ├── store
│   │   ├── <ModuleName>
│   │   │   ├── actions.ts
│   │   │   ├── actionTypes.ts
│   │   │   └── reducers.ts
│   │   └── index.ts
│   │   └── <ModuleName>.ts
│   ├── utils
├── tests
│   └── <ComponentName>
│   │   └── <ComponentName>.test.ts
·   ·
```
