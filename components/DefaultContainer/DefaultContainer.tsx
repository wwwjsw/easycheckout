import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IDefaultContainer {
  children: React.ReactChild | React.ReactChild[];
  spaceAtTop?: boolean;
  hasPadding?: boolean;
  isRow?: boolean;
  overflow?: boolean;
  background?: string;
  bottomSpace?: boolean;
  noMargin?: boolean;
  borderRadius?: boolean;
}

const DefaultContainer = (content: IDefaultContainer) => {
  return (
    <View style={[
      styles.container,
      content.background ? { backgroundColor: content.background } : { backgroundColor: '#d4d740' }, 
      content.hasPadding ? styles.hasPadding : null,
      content.isRow  ? styles.isRow : null,
      content.overflow ? null : { overflow: 'hidden' },
      content.spaceAtTop ? null : styles.noTop,
      content.noMargin ? null : styles.defaultMargin,
      content.borderRadius ? { borderRadius: 10 } : null,
    ]}>
      {content.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 50,
  },
  defaultMargin: {
    margin: 10,
  },
  noTop: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  hasPadding: {
    padding: 10,
  },
  isRow: {
    flexDirection: 'row',
  }
});

export default DefaultContainer;
