// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  // This line prevents silent undefined bugs
  if (context === undefined) {
    throw new Error(
      'useAuth must be used inside an AuthProvider. ' +
      'Make sure your component is wrapped in <AuthProvider> or <AuthContext.Provider>.'
    );
  }

  return context;
};

export default useAuth;