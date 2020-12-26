import React from 'react';
import { View, StatusBar, StatusBarProps } from 'react-native';

import styles from './StatusbarColoredStyle';

interface IStatusbarColored {
  backgroundColor: string;
  props: StatusBarProps;
}
const StatusbarColored = ({ backgroundColor, ...props }: IStatusbarColored) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default StatusbarColored;
