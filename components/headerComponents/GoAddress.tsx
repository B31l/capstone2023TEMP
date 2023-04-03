import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderWidget from './HeaderWidget';
import Postcode from '@actbase/react-daum-postcode';

// https://www.npmjs.com/package/react-daum-postcode
// https://github.com/actbase/react-daum-postcode
// https://postcode.map.daum.net/guide#attributes

export default function GoAddress() {
  const [isModal, setModal] = useState(false);
  const [address, setAddress] = useState('');
  const onSelected = (data: any) => {
    // let fullAddress: string = data.address; // data의 기본 주소
    // let extraAddress: string = ''; // 추가 주소
    // addressType: 검색된 기본 주소 타입: R(도로명), J(지번)
    // bname: 법정동/법정리 이름
    // buildingName: 건물명
    setAddress(data.bname || data.bname1 || data.bname2);

    // 도로명 주소인 경우, bname 또는 buildingName을 추가한 주소를 반환한다.
    // if (data.addressType === 'R') {
    //   if (data.bname !== '') {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== '') {
    //     extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    // }
    // setAddress(fullAddress);
    setModal(false);
  };

  return (
    <View style={localStyles.container}>
      <Modal visible={isModal} animationType="fade" transparent={true}>
        <View style={localStyles.wrapper}>
          <View style={localStyles.border}>
            <Postcode
              style={localStyles.postcode}
              jsOptions={{ animation: true, hideMapBtn: true }}
              onSelected={onSelected}
              onError={(err) => console.error(err)}
            />
            <View style={localStyles.pressalbeWrapper}>
              <Pressable style={localStyles.pressable} onPress={() => setModal(false)}>
                <Text>닫기</Text>
                <Icon name="close" size={16} color="black" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={localStyles.textWrapper} onPress={() => setModal(true)}>
        <HeaderWidget iconName="https://cdn.icon-icons.com/icons2/2346/PNG/512/marker_placeholder_location_pin_icon_142928.png" />
        <Text style={localStyles.text}>{address || '지역을 설정해주세요'}</Text>
      </Pressable>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingVertical: 64,
    paddingHorizontal: 16,
    // borderWidth: 1,
    // backgroundColor: 'red',
  },
  border: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#333',
  },
  pressalbeWrapper: {
    width: '100%',
    height: 32,
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 32,
  },
  postcode: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
