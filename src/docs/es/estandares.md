# Estándares

## Ramas

### Norma de denominación de ramas

| Tipo       | Nombre  |
| ---------- | ------- |
| Producción | master  |
| UAT        | uat     |
| Testing    | test    |
| Desarrollo | develop |

### Norma de denominación de ramas - tickets

| Tipo    | Ticket  | Nombre                        | Ejemplo                 |
| ------- | ------- | ----------------------------- | ----------------------- |
| General | B2C-123 | {TICKET}-{DESCRIPTION}        | B2C-745-Social-Login    |
| Hotfix  | B2C-123 | Hotfix-{TICKET}-{DESCRIPTION} | Hotfix-B2C-745-Facebook |
| Bug     | B2C-123 | Bug-{TICKET}-{DESCRIPTION}    | Bug-B2C-745-Google      |

### Otras ramas

| Tipo     | Nombre                   | Ejemplo           |
| -------- | ------------------------ | ----------------- |
| Others   | {DESCRIPTION}-{DEV_NAME} | Delete-Fonts-Maxi |
| Refactor | Refactor-{DESCRIPTION}   | Refactor-Redux    |

## Nombres de carpetas y archivos

1. Utilice minúsculas en cualquier carpeta a excepción de Pantallas y Componentes.
2. Utilice PascalCase en la carpeta de pantallas/componentes y archivos, Ejemplo: `Login`.
3. Utilice `-` en cualquier otro archivo, Ejemplo: `use-login.ts`.

## Estilos de componentes y pantallas

1. Los componentes estilizados se escribirán utilizando la guía de estilo CSS concéntrica para los mismos, que pretende basarse en el modelo de caja, una alternativa al orden alfabético.

La plantilla básica es algo así:

```css
const Example = styled(View)`
    display: ;    /* Dónde y cómo se coloca la caja */
    position: ;
    float: ;
    clear: ;

    visibility: ; /* ¿Se puede ver la caja? */
    opacity: ;
    z-index: ;

    margin: ;     /* Capas del modelo de caja */
    outline: ;
    border: ;
    background: ;
    padding: ;

    width: ;      /* Dimensiones del contenido y barras de desplazamiento */
    height: ;
    overflow: ;

    color: ;      /* Texto */
    text: ;
    font: ;
`;
```

2. La estructura de los componentes debe seguir un orden basado en regiones plegables. Para poder utilizar esta función, será necesario tener instalada la extensión "[#region folding for VS Code](https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder)" en Visual Studio Code.

Each region will be named according to the following structure:

```jsx
/* #region <REGION_NAME> */

// CONTENIDO DE LA REGIÓN

/* #endregion */
```

Sin embargo, se recomienda utilizar sólo las siguientes regiones en cada componente:

```jsx
/* #region IMPORTS */
// Declaraciones de importación
/* #endregion */

/* #region HOOKS */
// Hooks & custom hooks
/* #endregion */

/* #region STATES */
// declaraciones useState y otras variables mutables
/* #endregion */

/* #region REFS */
// Refs
/* #endregion */

/* #region REDUCERS */
// Redux reducers
/* #endregion */

/* #region ACTIONS */
// Redux actions
/* #endregion */

/* #region METHODS */
// Métodos de los componentes utilizados en el componente, por ejemplo: `onPress`.
/* #endregion */

/* #region EFFECTS */
// declaraciones UseEffect
/* #endregion */

/* #region RENDER */
// JSX
/* #endregion */
```

Ejemplo

```jsx
/* #region IMPORTS */
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import { ProfileActions } from '../../actions/profileActions';
import { useActions } from '../../hooks';
import { useShallowEqualSelector } from '../../utils/reduxUtils';
/* #endregion */

/* #region TYPES */
interface Props {
  title: string;
  counter: number;
}
/* #endregion */

/* #region STYLED COMPONENTS */
const Card = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px auto 16px auto;
  border-radius: 16px;
  background-color: white;
  height: 80px;
`;
/* #endregion */

const ExampleComponent = () => {
  /* #region HOOKS */
  const { t } = useTranslation();
  /* #endregion */

  /* #region STATES */
  const [showCard, setShowCard] = useState(true);
  /* #endregion */

  /* #region REFS */
  const _scrollViewRef = useRef<ScrollView>();
  /* #endregion */

  /* #region REDUCERS */
  const { data: userInformation } = useShallowEqualSelector(
    state => state.profileReducer
  );
  /* #endregion */

  /* #region ACTIONS */
  const { fetchPersonalInformation } = useActions({
    fetchPersonalInformation: ProfileActions.fetchPersonalInformation
  });
  /* #endregion */

  /* #region METHODS */
  const hideShowCard = (): void => {
    setShowCard(!showCard);
  };
  /* #endregion */

  /* #region EFFECTS */
  useEffect(() => {
    fetchPersonalInformation();
  }),
    [fetchPersonalInformation];
  /* #endregion */

  /* #region RENDER */
  return (
    <ScrollView ref={_scrollViewRef}>
      {showCard && (
        <Card>
          <Text>{t('example.title')}</Text>
          <Text>{userInformation.name}</Text>
        </Card>
      )}
    </ScrollView>
  );
  /* #endregion */
};
```

Si el componente no es muy grande, puede crearlo utilizando sólo las siguientes regiones:

```jsx
/* #region IMPORTS */
import Reactfrom 'react';
import { Text, View } from 'react-native';
/* #endregion */

const ExampleComponent = () => {
  /* #region RENDER */
  return (
    <View>
      <Text>Title</Text>
    </View>
  );
  /* #endregion */
};
```

## Navegación

El contenedor de navegación raíz tiene dos pilas principales, authNavigator y mainNavigator. Estas pilas cambiarán cuando el usuario inicie o cierre la sesión dentro de la aplicación.

```tsx
const RootNavigator = () => {
  /*******************************************
   *                                         *
   * stuff within the ./Navigation/index.tsx *
   *                                         *
   ******************************************/
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={deepLinking}
      onReady={user ? () => {} : handleNavigationReady}
      onStateChange={handleNavigationChangeScreen}
    >
      <StatusBar
        animated
        barStyle={
          routeName === t("Home") || routeName === t("Settings")
            ? "light-content"
            : "dark-content"
        }
        translucent
        backgroundColor="transparent"
      ></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user || loggedIn ? (
          <Stack.Screen
            name={"Main"}
            component={mainNavigator}
            options={options}
          />
        ) : (
          <Stack.Screen name={"Auth"} component={authStack} options={options} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
```

El componente authNavigator contiene todas las pantallas del flujo de autenticación, como onboarding, login, socialMediaLogin, signUp, etc... que están en el authStack.

```tsx
import { authStack } from "../containers/AuthStack/navigation";

export const authNavigator = () => {
  return authStack;
};
```

El mainNavigator es un navegador de pestañas, este componente contiene el resto de pantallas. Cada pestaña tiene una pila de pantallas y éstas están ordenadas por cada módulo de la aplicación, que son HomeStack, InsightsStack, AccountsStack y SettingsStack.

```tsx

export const mainNavigator = () => {
  /***************************************************
   *                                                 *
   * stuff within the ./Navigation/mainNavigator.tsx *
   *                                                 *
   ***************************************************/

 return (
    <Mainnav.Navigator initialRouteName={'Home'} tabBarOptions={tabBarOptions}>
      <Mainnav.Screen
        name='Home'
        component={homeStack}
        options={({ route }) => ({
          tabBarVisible: (route => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? 'Apploading';
            return routeName === 'NewHome' ? true : false;
          })(route),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeNavActive width={NAV_ICONS_SIZE} />
            ) : (
              <HomeNav width={NAV_ICONS_SIZE} />
            )
        })}
      />
      <Mainnav.Screen
        name='Insights'
        component={insightsStack}
        options={({ route }) => ({
          tabBarVisible: (route => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? 'Transactions';

            return routeName === 'Transactions' ? true : false;
          })(route),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <StatisticsNavActive width={NAV_ICONS_SIZE} />
            ) : (
              <StatisticsNav width={NAV_ICONS_SIZE} />
            )
        })}
      />
      <Mainnav.Screen
        name='Accounts'
        component={AccountsStack}
        options={({ route }) => ({
          tabBarVisible: (route => {
            const routeName =
              getFocusedRouteNameFromRoute(route) ?? 'LoyaltyHomePage';

            return routeName === 'LoyaltyHomePage' ? true : false;
          })(route),
          tabBarIcon: ({ focused }) => handleAccountIconSelection(focused)
        })}
        initialParams={{ fromBlackList: false, fromNavBar: true }}
      />

      <Mainnav.Screen
        name='Profile'
        component={settingsStack}
        options={({ route }) => ({
          tabBarVisible: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Profile';

            return routeName === 'Profile' ? true : false;
          })(route),
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileNavActive width={NAV_ICONS_SIZE} />
            ) : (
              <ProfileNav width={NAV_ICONS_SIZE} />
            )
        })}
      />
    </Mainnav.Navigator>
  );
```

Todas los "stacks" del mainNavigator están en la carpeta src/screens. Cada carpeta del "stack" tiene un archivo navigation.tsx que contiene el componente del "stack" con sus pantallas.

```
·
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
```

```tsx
//all stacks have the following structure

import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Login from "./Login";
import EmailSignIn from "./Login/EmailSignin/EmailSignin";
import Onboarding from "./Onboarding";
import ForgotPassword from "./PasswordReset";
import MailCheck from "./PasswordReset/MailCheck";
import SignUpForm from "./Register/signUpForm";
import SignUpStepTwo from "./Register/signUpStepTwo";

export const authStack = () => {
  const Authstack = createStackNavigator();

  return (
    <Authstack.Navigator
      initialRouteName={"Login"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Authstack.Screen name="Login" component={Login} />
      <Authstack.Screen name="Onboarding" component={Onboarding} />
      <Authstack.Screen name="EmailSignIn" component={EmailSignIn} />
      <Authstack.Screen name="SignUpForm" component={SignUpForm} />
      <Authstack.Screen name="SignUpStepTwo" component={SignUpStepTwo} />
      <Authstack.Screen name="MailCheck" component={MailCheck} />
      <Authstack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Authstack.Navigator>
  );
};
```

## i18n

TODO:

## Testing

TODO:
