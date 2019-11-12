import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet , Text} from 'react-native';
import superagent from 'superagent';

export default function EventsScreen() {
  const [events, setEvents] = useState([]); 

  useEffect(() => {
    superagent
      .get('https://event-grove.herokuapp.com/events')
        .then(results => {
          console.log(results.body.results);
          setEvents(results.body.results)
        });
  }, [])

  return (
    <ScrollView style={styles.container}>
      {events.map(event => <Text key={event._id}>{event.name}</Text>)}
    </ScrollView>
  );
}

EventsScreen.navigationOptions = {
  title: 'Upcoming Events',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
