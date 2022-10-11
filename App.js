
import { StyleSheet, Text, View,FlatList, SafeAreaView,Image, Button } from 'react-native';

export default function App() {
  const animals = [
    {
      id:1,
      name: 'shark',
      image : require('./assets/avatars/dolphin.png'),
    },
    {
      id:2,
      name: 'herring',
      image : require('./assets/avatars/chameleon.png'),
    },
    {
      id:3,
      name: 'lion',
      image : require('./assets/avatars/lion.png'),
    },{
      id:4,
      name: 'polar bear',
      image : require('./assets/avatars/snake.png'),
    },
    {
      id:5,
      name: 'penguin',
      image : require('./assets/avatars/penguin.png'),
    },{
      id:6,
      name: 'parrot',
      image : require('./assets/avatars/dolphin.png'),
    }
  ];
  const oneAnimal = ({item}) =>(
    <View style = {styles.item}>
      <View style= {styles.avatarContainer}>
        <Image source= {item.image} style = {styles.avatar}/>
      </View>
      <Text style = {styles.name}>{item.name}</Text>
      <Button title='hello boy'/>
    </View>
    
    
  );
  const headerComponent = ()=>{
    return <Text style = {styles.listHeadLine}>Animals</Text>
  }
  const itemSeparator = () =>{
    return <View  style = {styles.separator}/>
  }
  return (
    <SafeAreaView >
      <FlatList 
        ListHeaderComponentStyle = {styles.listHeader}
        ListHeaderComponent={headerComponent}
        data={ animals}
        renderItem = {oneAnimal}
        ItemSeparatorComponent = {itemSeparator}
        ListEmptyComponent = {<Text>this is a very animals</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator:{
    height:1,
    width:'100%',
    backgroundColor:'#CCC',
  },
  listHeader:{
    height:55,
    justifyContent:'center',
    alignItems:'center',
  },
  listHeadLine:{
    color:'#333',
    fontSize:21,
    fontWeight:'bold',
  },
  item:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:13,
    paddingHorizontal:13,
  },
  avatarContainer:{
    backgroundColor:'#D9D9D9',
    borderRadius:100,
    height:89,
    width:89,
    justifyContent:'center',
    alignItems:'center',
  }
  ,
  avatar:{
    height:55,
    width:55,
  },
  name:{
    fontWeight:'600',
    fontSize:16,
  },
});
