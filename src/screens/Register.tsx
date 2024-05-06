import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FONTS} from '../themes/Fonts';
import CInput from '../components/CInput';
import {COLORS} from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
type Props = {};

const Register = (props: Props) => {
  const navigation = useNavigation<any>();
  const {top: paddingTop} = useSafeAreaInsets();
  const form = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      rePassword: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email('Email invalid')
          .required('Email is required'),
        fullName: yup.string().required('Full name is required'),
        password: yup
          .string()
          .min(6, 'Psasword must be at least 6 characters')
          .required('Password is required'),
        rePassword: yup
          .string()
          .oneOf([yup.ref('password'), ''], 'Password do not match')
          .required('Please confirm your password'),
      }),
    ),
  });

  const handleSubmit = (values: any) => {
    console.log('values', values);
  };
  return (
    <View style={[styles.container, {paddingTop}]}>
      <View style={styles.viewHeader}>
        <Text style={styles.headerTitle}>Register</Text>
        <Text style={styles.headerDesc}>
          Register an account to use the service
        </Text>
      </View>

      <View style={styles.viewForm}>
        <FormProvider {...form}>
          <CInput
            label="Email"
            placeholder="Enter your email"
            icon="mail-outline"
            name="email"
          />
          <CInput
            label="Full name"
            placeholder="Enter your full name"
            icon="text-outline"
            name="fullName"
          />
          <CInput
            label="Password"
            placeholder="Enter your password"
            icon="lock-closed-outline"
            isPassword
            name="password"
          />

          <CInput
            label="Re Password"
            placeholder="Enter your re password"
            icon="lock-closed-outline"
            isPassword
            name="rePassword"
          />
        </FormProvider>

        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => form.handleSubmit(handleSubmit)()}>
            <Text style={styles.txtLogin}>Register</Text>
          </TouchableOpacity>

          <View style={styles.viewOr}>
            <View style={styles.line} />
            <View>
              <Text style={styles.txtOr}>OR</Text>
            </View>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.btnGoogle}>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.imgGoogle}
            />
            <Text style={styles.txtGoogle}>Register with Google</Text>
          </TouchableOpacity>

          <View style={styles.viewSignUp}>
            <Text style={styles.txtDontAccount}>
              If you already have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.txtSignUp}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  viewHeader: {
    gap: 8,
    marginTop: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: FONTS.BOLD,
  },
  headerDesc: {
    fontSize: 18,
    fontFamily: FONTS.MEDIUM,
  },
  viewForm: {
    marginTop: 24,
    gap: 12,
  },
  btnForgot: {
    alignSelf: 'flex-end',
    marginTop: 6,
  },
  txtForgot: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.PRIMARY,
    fontSize: 14,
  },
  viewBtn: {
    gap: 24,
    marginTop: 24,
  },
  btnLogin: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtLogin: {
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    color: 'white',
  },
  viewOr: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  line: {
    flex: 1,
    backgroundColor: COLORS.LINE,
    height: 1,
  },
  txtOr: {
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
    color: COLORS.BLACK,
  },
  btnGoogle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.LINE,
    borderRadius: 8,
    gap: 12,
  },
  imgGoogle: {
    height: 30,
    width: 30,
  },
  txtGoogle: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    color: COLORS.GRAY,
  },
  viewSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    justifyContent: 'center',
  },
  txtDontAccount: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
  },
  txtSignUp: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.PRIMARY,
  },
});
