import React from 'react';
import { StyleSheet, View } from 'react-native';

import helpers from '../../helpers';
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
    <View
      style={[
        styles.container,
        content.background
          ? { backgroundColor: content.background }
          : { backgroundColor: helpers.colors.primary },
        content.hasPadding ? styles.hasPadding : null,
        content.isRow ? styles.isRow : null,
        content.overflow ? null : { overflow: 'hidden' },
        content.spaceAtTop ? null : styles.noTop,
        content.noMargin ? null : styles.defaultMargin,
        content.borderRadius ? { borderRadius: helpers.sizes.normal } : null,
      ]}>
      {content.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  defaultMargin: {
    margin: helpers.sizes.normal,
  },
  noTop: {
    marginHorizontal: helpers.sizes.normal,
    marginBottom: helpers.sizes.normal,
  },
  hasPadding: {
    padding: helpers.sizes.normal,
  },
  isRow: {
    flexDirection: 'row',
  },
});

export default DefaultContainer;
