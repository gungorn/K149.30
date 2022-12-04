/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { LoginStack } from '~/navigation/stacks/loginStack';
import { MainStack } from '~/navigation/stacks/mainStack';
import { connect } from 'react-redux';
import { getColor } from '~/utils/core/ui/theme';

const Navigation = connect(
  ({ app }) => ({ app }),
  undefined,
)(props => {
  const { app } = props;
  const { loginStatus } = app;

  const rntheme = Appearance.getColorScheme() === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...rntheme,
    colors: {
      ...rntheme.colors,
      background: getColor('background'),
    },
  };

  return useMemo(
    () => (
      <>
        <StatusBar backgroundColor={getColor('background')} barStyle={app.selectedTheme === 'dark' ? 'light-content' : 'dark-content'} />
        <NavigationContainer theme={theme}>{loginStatus ? <MainStack /> : <LoginStack />}</NavigationContainer>
      </>
    ),
    [loginStatus, theme],
  );
});

export { Navigation };
