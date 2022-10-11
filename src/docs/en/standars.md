# Standars

## Branchs

### Branch naming standard

| Type       | Branch Name |
| ---------- | ----------- |
| Production | master      |
| UAT        | uat         |
| Testing    | test        |
| Develop    | develop     |

### Branch naming tickets

| Type    | Ticket  | Branch Name                   | Example                 |
| ------- | ------- | ----------------------------- | ----------------------- |
| General | B2C-123 | {TICKET}-{DESCRIPTION}        | B2C-745-Social-Login    |
| Hotfix  | B2C-123 | Hotfix-{TICKET}-{DESCRIPTION} | Hotfix-B2C-745-Facebook |
| Bug     | B2C-123 | Bug-{TICKET}-{DESCRIPTION}    | Bug-B2C-745-Google      |

### Other branch naming

| Type     | Branch Name              | Example           |
| -------- | ------------------------ | ----------------- |
| Others   | {DESCRIPTION}-{DEV_NAME} | Delete-Fonts-Maxi |
| Refactor | Refactor-{DESCRIPTION}   | Refactor-Redux    |

## Folders and files names

1. Use lowercase on any folder with exception of Screens and Components.
2. Use PascalCase in screens/components folder and files, Example: `Login`.
3. Use `-` in any other file, Example: `use-login.ts`.

## Component and screen styles

1. Styled components will be written using the concentric CSS style guide for the same which is intended to be based on the box model, an alternative to alphabetical order.

The basic template looks something like this:

```css
const Example = styled(View)`
    display: ;    /* Where and how the box is placed */
    position: ;
    float: ;
    clear: ;

    visibility: ; /* Can the box be seen? */
    opacity: ;
    z-index: ;

    margin: ;     /* Layers of the box model */
    outline: ;
    border: ;
    background: ;
    padding: ;

    width: ;      /* Content dimensions and scrollbars */
    height: ;
    overflow: ;

    color: ;      /* Text */
    text: ;
    font: ;
`;
```

2. The structure of the components should follow an order based on collapsible regions. In order to use this function, it will be necessary to have the "[#region folding for VS Code](https://marketplace.visualstudio.com/items?itemName=maptz.regionfolder)" extension installed in Visual Studio Code.

Each region will be named according to the following structure:

```jsx
/* #region <REGION_NAME> */

// REGION CONTENT

/* #endregion */
```

However, it is recommended to use only the following regions in each component:

```jsx
/* #region IMPORTS */
// Import statements
/* #endregion */

/* #region TYPES */
// Typescript types
/* #endregion */

/* #region STYLED COMPONENTS */
// Styled components
/* #endregion */

/* #region HOOKS */
// Hooks and custom hooks
/* #endregion */

/* #region STATES */
// useState statements and other mutable variables
/* #endregion */

/* #region REFS */
// Refs
/* #endregion */

/* #region REDUCERS */
// Store reducers
/* #endregion */

/* #region ACTIONS */
// Store actions
/* #endregion */

/* #region METHODS */
// Components methods used in the component, for example: `onPress`
/* #endregion */

/* #region EFFECTS */
// UseEffect statements
/* #endregion */

/* #region RENDER */
// JSX render
/* #endregion */
```

Example

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

If the component is not very large, you can create it using only the following regions:

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

## Navigation

The root navigation container have two main stacks, authNavigator and mainNavigator. These stacks will switch when the user log in or out within the app.

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

The authNavigator component contains all screens from the authentication flow, like onboarding, login, socialMediaLogin, signUp, etc... which are in the authStack.

```tsx
import { authStack } from "../containers/AuthStack/navigation";

export const authNavigator = () => {
  return authStack;
};
```

The mainNavigator is a Tab Navigator, this component contains all the rest of screens. Each tab has one Stack of screens and these are sorted by each module from the app, which are HomeStack, InsightsStack, AccountsStack and SettingsStack.

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

All the stacks from de mainNavigator are in the src/screens folder. Each stack folder have a navigation.tsx file which contains the stack component with their screens.

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
