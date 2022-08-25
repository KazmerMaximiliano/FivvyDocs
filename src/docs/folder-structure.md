# Folder Structure

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
│   │   │   └── others
│   │   ├── svg
│   │   │   ├── brand
│   │   │   ├── icons
│   │   │   └── others
│   ├── components
│   │   ├── styledComponents
│   │   │   └── <StyleComponentName>.ts
│   │   ├── <ComponentName>
│   │   │   ├── <ComponentName>.tsx
│   │   │   ├── <ComponentNameStrings>.ts
│   │   │   └── <ComponentNameType>.ts
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
