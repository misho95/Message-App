import {useState, createContext, ReactNode, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {act} from 'react-test-renderer';

type RadioContextType = {
  active: string;
  setActive: (arg: string) => void;
};

export const ActiveContext = createContext<RadioContextType | null>(null);

type PropsType = {
  children: ReactNode;
  defVal: string;
  onChange: (arg: string) => void;
};

const FormsRadioGroup = ({children, defVal, onChange}: PropsType) => {
  const [active, setActive] = useState(defVal);

  useEffect(() => {
    onChange(active);
  }, [active]);

  return (
    <ActiveContext.Provider value={{active, setActive}}>
      <View style={styles.container}>{children}</View>
    </ActiveContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
  },
});

export default FormsRadioGroup;
