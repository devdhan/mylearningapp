import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const facebook = [
  {
    id: 4,
    user: 'Adam Oshomole',
    post: 'Congratulations to Benin city',
    likes: 98,
    comments: 34,
    shares: 12,
    daysPast: 2,
  },
  {
    id: 2,
    user: 'Christiano Ronaldo',
    post: 'Success comes with training',
    likes: 9008,
    comments: 554,
    shares: 607,
    daysPast: 19,
  },
  {
    id: 5,
    user: 'Peter Obi',
    post: 'Learning Leadership at UNILAG',
    likes: 1001,
    comments: 254,
    shares: 409,
    daysPast: 5,
  },
  {
    id: 6,
    user: 'Barack Obama',
    post: 'We can further learn tolerance from the way we work together',
    likes: 5001,
    comments: 500,
    shares: 201,
    daysPast: 29,
  },
  {
    id: 10,
    user: 'Yemi Osibanjo',
    post: 'The big thinkers of Nigeria will power our economy',
    likes: 701,
    comments: 200,
    shares: 2331,
    daysPast: 13,
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={facebook}
        renderItem={({item}) => {
          return (
            <TouchableOpacity 
            style={styles.post}
            onPress={() => Alert.alert(
              'Engagement', `Likes: ${item.likes}, Comment:${item.comments}, Shares:${item.shares}`,
              [{text:'UNDERSTOOD'}]
            )}
            >
              <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>{item.user}</Text>
                <Text style={styles.userInfoText}>{item.daysPast} days ago</Text>
              </View>

              <Text style={styles.postText}>{item.post}</Text>

              <Text style={styles.actionText}>
                Tap any where to see engagement rates
              </Text>
            </TouchableOpacity>
          );
        }}
        key={({ post }) => post.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'skyblue',
  },
  post: {
    borderWidth: 1,
    borderColor: '#F39C12',
    borderRadius: 10,
    backgroundColor: '#F1C40F',
    marginBottom: 8,
    padding: 8,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoText: {
    color: '#873600',
    fontSize: 12,
  },
  postText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  actionText: {
    fontSize: 10,
    color: '#BA4A00',
  },
});
