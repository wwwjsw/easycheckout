import React from 'react';
import { View, StatusBar, StatusBarStyle } from 'react-native';

import styles from './StatusbarColoredStyle';

interface IStatusbarColored {
  backgroundColor: string;
  barStyle: StatusBarStyle;
}

const StatusbarColored = ({ backgroundColor, barStyle }: IStatusbarColored) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} barStyle={barStyle} />
  </View>
);

export default StatusbarColored;
