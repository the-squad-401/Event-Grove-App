import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function SubscribedScreen() {
  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
}

SubscribedScreen.navigationOptions = {
  title: 'Your Subscribed Businesses',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
