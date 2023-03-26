import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native';

interface IChatListItemImages {
  UidList: string[];
}

function ChatListItemImages({ UidList }: IChatListItemImages) {
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
      return <View>메롱</View>;
  }
  //   return (
  //     <View>
  //       <Image style={style.image} source={{ uri: NN + UidList[0] + EE }} />
  //     </View>
  //   );
}

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: 8,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 16,
  },
});

export default ChatListItemImages;
