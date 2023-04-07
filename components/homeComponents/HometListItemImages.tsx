import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native';

interface IHomeListItemImages {
  UidList: string[];
}

export default function HomeListItemImages({ UidList }: IHomeListItemImages) {
  const NN = 'https://via.placeholder.com/150/';
  const EE = '/000000';
  switch (UidList.length) {
    case 1:
      return (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: NN + UidList[0] + EE }} />
        </View>
      );
    default:
      return (
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: NN + UidList[0] + EE }} />
        </View>
      );
  }
  //   return (
  //     <View>
  //       <Image style={style.image} source={{ uri: NN + UidList[0] + EE }} />
  //     </View>
  //   );
}

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: 16,
    borderWidth: 1,
  },
  image: {
    width: 108,
    height: 108,
    // borderRadius: 16,
  },
});
