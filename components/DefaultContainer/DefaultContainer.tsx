import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IDefaultContainer {
  children: React.ReactChild;
  spaceAtTop?: boolean;
  hasPadding?: boolean;
  isRow?: boolean;
}

const DefaultContainer = (content: IDefaultContainer) => {
  return (
    <View style={[
      styles.container,
      content.spaceAtTop ? styles.defaultMargin : styles.noTop,
      content.hasPadding ? styles.hasPadding : null,
      content.isRow  ? styles.isRow : null,
    ]}>
      {content.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: '#3FD37B',
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
