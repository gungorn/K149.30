import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { connect } from 'react-redux';
import { light, night } from '~/assets';

import { spacing } from '~/configs';

import { createUserWithFB, loginUserWithFB, requestLogin, setApp } from '~/redux/actions';

import { getColor } from '~/utils/core/ui/theme';
import { W } from '~/utils/core/ui/dimensions';

const Login = connect(
  ({ app }) => ({ app }),
  dispatch => ({ dispatch }),
)(props => {
  const { dispatch, app } = props;
  const { selectedTheme } = app;

  const isDark = selectedTheme === 'dark';

  const changeTheme = () => dispatch(setApp('selectedTheme', selectedTheme === 'dark' ? 'light' : 'dark'));

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} keyboardType="email-address" value={app.username} onChangeText={d => dispatch(setApp('username', d))} />
        <View style={{ margin: spacing.xs }} />
        <TextInput style={styles.input} secureTextEntry value={app.password} onChangeText={d => dispatch(setApp('password', d))} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(requestLogin())}>
        <Text style={styles.buttonText}>Login with dummyJson</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(createUserWithFB())}>
        <Text style={styles.buttonText}>Create With firebase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(loginUserWithFB())}>
        <Text style={styles.buttonText}>Login With firebase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.themeButton} onPress={changeTheme}>
        {<Image source={isDark ? light : night} style={styles.image} />}
      </TouchableOpacity>

      {app.loginLoading && <Text>LOADING LOADING</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  main: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  inputContainer: { width: '70%', marginVertical: spacing.s },
  input: {
    borderWidth: 1,
    borderColor: getColor('lightGray'),
    borderRadius: 4,
    textAlign: 'center',
    backgroundColor: getColor('inputBackground'),
  },

  button: {
    width: '70%',
    paddingVertical: spacing.s,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getColor('main'),
    marginBottom: 8,
  },
  buttonText: {
    color: getColor('white'),
  },

  themeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  image: {
    width: W(8),
    height: W(8),
  },
});

export { Login };
