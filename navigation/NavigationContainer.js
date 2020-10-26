
import React, { useEffect, useRef } from 'react';
import { NavigationActions } from 'react-navigation';
import { useSelector } from 'react-redux';
import Navigator from './Navigator';

export default const NavigationContainer = props => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: 'Auth' })
      );
    }
  }, [isAuth]);

  return <Navigator ref={navRef} />;
};
