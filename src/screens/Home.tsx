import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  useGetProductsQuery,
  usePostProductMutation,
} from '../services/productAPI';

type Props = {};

const Home = (props: Props) => {
  const {data} = useGetProductsQuery({
    //params here
  });
  const [addProduct] = usePostProductMutation();

  // console.log('data', data);
  const handleAddProduct = () => {
    const payload = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };
    addProduct(payload)
      .unwrap()
      .then(res => {
        //success
        console.log('res', res);
      })
      .catch(err => {
        //error
        console.log('err', err);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={handleAddProduct}>
        <Text>Add product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
