import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {ic_automatic, ic_horsepower, ic_welcome} from './src/assets';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const images = [
  require('./src/Assets/image1.png'),
  require('./src/Assets/image2.png'),
  require('./src/Assets/image3.png'),
  require('./src/Assets/image1.png'),
  require('./src/Assets/image2.png'),
  require('./src/Assets/image3.png'),
  require('./src/Assets/image1.png'),
  require('./src/Assets/image2.png'),
  require('./src/Assets/image3.png'),
  require('./src/Assets/image1.png'),
  require('./src/Assets/image2.png'),
  require('./src/Assets/image3.png'),
];

const carDetails = [
  {
    title: 'Mercedes SL',
    subTitle: '63 AMG',
    price: '2000 AED/day',
    desc: 'The Mercedes SL 63 AMG is a sports car created using advanced technologies that have made it incredibly fast and powerful.',
    specs: [
      {label: 'Horsepower', value: '585 hp', img: ic_horsepower},
      {label: 'Transmission', value: 'Automatic', img: ic_automatic},
    ],
  },
  {
    title: 'BMW',
    subTitle: 'X5',
    price: '5000 AED/day',
    desc: 'The BMW X3 is a sports car created using advanced technologies that have made it incredibly fast and powerful.',
    specs: [
      {label: 'Horsepower', value: '605 hp', img: ic_horsepower},
      {label: 'Transmission', value: 'Automatic', img: ic_automatic},
    ],
  },
  {
    title: 'Audi',
    subTitle: 'Q5',
    price: '4000 AED/day',
    desc: 'The Audi Q5 is a sports car created using advanced technologies that have made it incredibly fast and powerful.',
    specs: [
      {label: 'Horsepower', value: '555 hp', img: ic_horsepower},
      {label: 'Transmission', value: 'Automatic', img: ic_automatic},
    ],
  },
];

const App = () => {
  const [selectedImage, setSelectedImage] = useState(
    require('./src/Assets/image1.png'),
  );

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
  };

  const imageView = detail => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <View>
          <View style={styles.selectedImageContainer}>
            <Image style={styles.selectedImage} source={selectedImage} />
          </View>
          <View>
            <FlatList
              horizontal
              data={images}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{
                    height: 60,
                    marginTop: 15,
                  }}
                  onPress={() => handleImageClick(item, index)}>
                  <Image style={styles.imageThumbnail} source={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.carTitle}>{detail?.title}</Text>
              <Text style={styles.carTitle}>{detail?.subTitle}</Text>
            </View>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#314FF6',
              }}>
              <Text style={{color: 'white', fontFamily: 'Satoshi-Bold'}}>
                {detail?.price}
              </Text>
            </View>
          </View>
          <Text style={styles.desc}>{detail?.desc}</Text>

          <View style={styles.lineView} />

          <View>
            <Text style={styles.title}>Specifications</Text>
            <View style={styles.specsContainer}>
              {detail?.specs?.map((val, idx) => {
                return (
                  <View key={idx} style={styles.spec}>
                    <Image source={val.img} style={styles.icon} />
                    <View>
                      <Text style={styles.specLabel}>{val.label}</Text>
                      <Text style={styles.specValue}>{val.value}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.bookBtn}>
          <Text style={{color: 'white', fontFamily: 'Satoshi-Bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    );
  };

  const insideView = (item, index) => {
    return (
      <View key={index}>
        <ScrollView pagingEnabled>
          <View style={styles.imageContainer}>
            <Image
              style={{
                height: Dimensions.get('window').height,
                width: '100%',
                resizeMode: 'contain',
              }}
              source={ic_welcome}
            />
          </View>
          {imageView(item)}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedPagerView
        style={styles.outerPagerView}
        initialPage={0}
        orientation="horizontal">
        {carDetails.map((item, index) => {
          return insideView(item, index);
        })}
      </AnimatedPagerView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  outerPagerView: {
    flex: 1,
  },
  innerPagerView: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageList: {
    marginTop: 20,
    backgroundColor: 'red',
  },
  imageThumbnail: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },
  selectedImageContainer: {
    marginTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
  },
  sliderIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sliderIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Satoshi-Regular',
  },
  specsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spec: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.5,
    padding: 20,
    justifyContent: 'space-around',
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    flex: 0.25,
  },
  specLabel: {
    color: '#8C8BA7',
    fontSize: 14,
    fontFamily: 'Satoshi-Bold',
  },
  specValue: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
  },
  carTitle: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'Satoshi-Bold',
  },
  bookBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#314FF6',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  lineView: {
    width: '95%',
    alignSelf: 'center',
    height: 1,
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 20,
  },
  desc: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Satoshi-Light',
  },
  viewPager: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
