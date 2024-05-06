import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FONTS} from '../themes/Fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../themes/Colors';
import {Controller, useFormContext} from 'react-hook-form';
type Props = {
  label?: string;
  placeholder?: string;
  icon?: string;
  isPassword?: boolean;
  name: string;
};

const CInput = ({label, placeholder, icon, isPassword, name}: Props) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const {
    control,
    formState: {errors},
  } = useFormContext();
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.viewInput}>
        {icon && <Ionicons name={icon} size={24} color={COLORS.PRIMARY} />}
        <Controller
          name={name}
          control={control}
          render={({field: {value, onChange, onBlur}}) => (
            <TextInput
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={isPassword && isShow}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsShow(prev => !prev)}>
            <Ionicons
              name={isShow ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color={COLORS.GRAY}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors[name] && (
        <Text style={styles.txtError}>{errors[name]?.message ?? ''}</Text>
      )}
    </View>
  );
};

export default CInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
  },
  viewInput: {
    borderWidth: 1,
    borderColor: COLORS.LINE,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 4,
    borderRadius: 8,
    gap: 6,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.REGULAR,
    color: COLORS.BLACK,
  },
  txtError: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    color: 'red',
    marginTop: 4,
  },
});
