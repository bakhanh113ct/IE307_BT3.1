import {  View,  Text,  Image,  StyleSheet,  Switch,  TextInput,  TouchableHighlight,  useColorScheme,  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import CustomMultipleLineInput from '../components/CustomMultipleLineInput';
import ListQuestion from '../components/ListQuestion';
//20521450 - Nguyen Ba Khanh
const Lab1_2 = () => {
  const theme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme == 'dark');
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [isNotify, setIsNotify] = useState(true);
  const addFeedback = () => {
    setFeedbacks([...feedbacks, `Q: ${feedback.trim()}`]);
  };
  return (
    <View style={isDarkTheme ? styles.containerDark : styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={isDarkTheme ? {color: '#fff'} : styles.pageTitle}>
        React native app
      </Text>
      <View style={styles.switch}>
        <Text style={isDarkTheme ? {color: '#fff'} : {color: '#000'}}>
          Dark mode
        </Text>
        <Switch
          value={isDarkTheme == true}
          onChange={() => setIsDarkTheme(isDarkTheme ? false : true)}></Switch>
      </View>
      <View style={styles.switch}>
        <Text style={isDarkTheme ? {color: '#fff'} : {color: '#000'}}>
          Notifications
        </Text>
        <Switch
          value={isNotify == true}
          onChange={() => setIsNotify(isNotify ? false : true)}
        />
      </View>
      <Text style={isDarkTheme ? styles.feedbackTextDark : styles.feedbackText}>
        Feedback
      </Text>
      <CustomMultipleLineInput
        feedback={feedback}
        isDarkTheme={isDarkTheme}
        setFeedback={setFeedback}
      />
      <TouchableHighlight
        onPress={() => {
          if (feedback == '') return;
          addFeedback();
          if (isNotify) alert('Thanks for your feedback!');
          setFeedback('');
        }}
        style={styles.sendFeedbackButton}>
        <Text style={styles.sendFeedbackTextButton}>Send feedback</Text>
      </TouchableHighlight>
      <Text style={isDarkTheme ? styles.frequentlyDark : styles.frequently}>
        Frequently Asked Questions
      </Text>
      <ListQuestion feedbacks={feedbacks} isDarkTheme={isDarkTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  containerDark: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  switch: {
    paddingHorizontal: 8,
    paddingTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  feedbackText: {
    paddingTop: 20,
    fontSize: 20,
    alignSelf: 'flex-start',
    color: '#000',
  },
  feedbackTextDark: {
    paddingTop: 20,
    fontSize: 20,
    alignSelf: 'flex-start',
    color: '#fff',
  },

  frequently: {
    paddingTop: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  frequentlyDark: {
    paddingTop: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  sendFeedbackButton: {
    alignItems: 'center',
    backgroundColor: '#2196f3',
    padding: 10,
    width: '100%',
  },
  sendFeedbackTextButton: {color: '#fff', textTransform: 'uppercase'},
});

export default Lab1_2;
