# Folder Structure

This folder and file structure is an ideal that we are constantly trying to achieve in the team, so there may be discrepancies between the structure presented here and the one actually used in the project.

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
