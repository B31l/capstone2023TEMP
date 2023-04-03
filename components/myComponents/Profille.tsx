import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, Pressable } from 'react-native';

interface IProfile {
  id: string;
}

export default function Profile({ id }: IProfile) {
  const NN = 'https://via.placeholder.com/150/';
  const EE = '/000000';
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.image} source={{ uri: NN + id + EE }} />
        <View style={styles.uWrapper}>
          <View style={styles.unameWrapper}>
            <Text style={styles.uname}>사용자 이름</Text>
            <Pressable
              onPress={() => {
                console.log('사용자 이름을 편집하고 이를 서버에 전송합니다.');
              }}>
              <Image
                style={styles.unameEdit}
                source={{
                  uri: 'https://cdn.icon-icons.com/icons2/1572/PNG/512/3592815-compose-create-edit-edit-file-office-pencil-writing_107734.png',
                }}
              />
            </Pressable>
          </View>

          <Text style={styles.uid}>UID: {id}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 112,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    borderRadius: 40,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  uWrapper: {
    marginLeft: 16,
  },
  unameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uname: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  unameEdit: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  uid: {
    color: '#7286D3',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
