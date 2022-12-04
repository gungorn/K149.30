import React from 'react';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Image from 'react-native-scalable-image';
import Carousel from 'react-native-snap-carousel';

import { connect } from 'react-redux';

import { firebaseProductsListener, requestAddProductToFirebase, requestAllProducts, /* requestGetAllPRoductsFromFirebase, */ setApp } from '~/redux/actions';
import { W } from '~/utils/core/ui/dimensions';
import { getColor } from '~/utils/core/ui/theme';

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { app, dispatch } = props;

  useEffect(() => {
    dispatch(requestAllProducts());
    //dispatch(requestGetAllPRoductsFromFirebase());
    dispatch(firebaseProductsListener());

    return () => {
      if (global.firebaseProductsListenerOff) {
        global.firebaseProductsListenerOff();
      }
    };
  }, []);

  const sendfb = item => {
    dispatch(requestAddProductToFirebase(item));
  };

  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity style={styles.topButton} onPress={() => dispatch(setApp('showOnlyFirebase', !app.showOnlyFirebase))}>
          <Text>{app.showOnlyFirebase ? 'Show all' : 'Show Only Firebase'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={app.showOnlyFirebase ? app.fbProducts : app.products.list}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View>
              <Carousel
                //ref={c => {}}
                data={item.images}
                renderItem={(d, i) => <Image source={{ uri: d.item }} width={W(50) - 16 - 2} />}
                sliderWidth={W(50) - 16}
                itemWidth={W(40)}
                layout="stack"
              />
            </View>
            {/* <Image source={{ uri: item.thumbnail }} width={W(50) - 16 - 2} style={{ borderRadius: 1 }} /> */}

            <View style={styles.textContainer}>
              <Text style={styles.text}>brand: {item.brand}</Text>
              <Text style={styles.text}>category: {item.category}</Text>
              <Text style={styles.text}>price: {item.price}</Text>
            </View>

            <TouchableOpacity style={styles.sendfbButton} onPress={() => sendfb(item)}>
              <Text>Send my Firebase db</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(d, i) => d.id}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  topButton: {
    backgroundColor: getColor('main'),
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },

  textContainer: { justifyContent: 'center', alignItems: 'center', flex: 1, padding: 4 },
  text: {
    color: getColor('text'),
  },

  item: {
    borderWidth: 1,
    borderColor: '#00000022',
    borderRadius: 2,
    width: W(50) - 16,
    margin: 8,
  },

  sendfbButton: {
    backgroundColor: getColor('main'),
    borderRadius: 4,
    paddingVertical: 8,
    alignItems: 'center',
  },
});
export { Home };
