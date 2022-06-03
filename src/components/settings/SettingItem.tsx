// Copyright (c) 2022 Joseph Hale
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
};

const SettingItem = (props: Props) => {
  return (
    <>
      <View style={styles.top}>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          {props.subtitle && (
            <Text style={styles.subtitle}>{props.subtitle}</Text>
          )}
        </View>
        <View style={styles.right}>{props.right}</View>
      </View>
      <View style={styles.bottom}>{props.bottom}</View>
    </>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bottom: {
    marginBottom: 10,
  },
  details: {
    flex: 3,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'black',
    marginBottom: 10,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
