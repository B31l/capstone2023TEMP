import React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Pressable, Text } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
// https://www.npmjs.com/package/react-daum-postcode
// https://github.com/actbase/react-daum-postcode
// https://postcode.map.daum.net/guide#attributes

export default function FindAddress() {
  const [isModal, setModal] = useState(false);

  const onSelected = (data: any) => {
    let fullAddress: string = data.address; // data의 기본 주소
    let extraAddress: string = ''; // 추가 주소
    // addressType: 검색된 기본 주소 타입: R(도로명), J(지번)
    // bname: 법정동/법정리 이름
    // buildingName: 건물명

    // 도로명 주소인 경우, bname 또는 buildingName을 추가한 주소를 반환한다.
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(fullAddress);
    setModal(false);
  };

  return (
    <>
      <Modal visible={isModal}>
        <Postcode
          style={styles.postcode}
          jsOptions={{ animation: true, hideMapBtn: true }}
          onSelected={onSelected}
          onError={(err) => console.error(err)}
        />
      </Modal>
      <Pressable onPress={() => setModal(true)}>
        <Text>주소</Text>
      </Pressable>
    </>
  );
  //   return <DaumPostcodeEmbed onComplete={handleCompolete} />;
}

const styles = StyleSheet.create({
  postcode: {
    width: '100%',
    height: '100%',
  },
});
