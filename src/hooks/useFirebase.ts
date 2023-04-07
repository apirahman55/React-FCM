import { useEffect, useMemo, useState } from 'react';
import FirebasePlugin from '../plugins/firebase';

const useFirebase = () => {
  const instance = useMemo(() => FirebasePlugin.instance, []);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    instance.getFcmToken((token) => {
      setToken(token);
    });
  }, []);

  return { token, message: instance.messaging };
};

export default useFirebase;
