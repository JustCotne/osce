import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { DefaultTheme} from '@react-navigation/native';
import InfoScreen from '../screens/CalScreen';
import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QR_codeScreen from '../screens/QR_codeScreen';
import QuestScreen from '../screens/QuestScreen';

const Tab = createBottomTabNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = '#252c4a';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CalScreen" component={InfoScreen} />
      <Stack.Screen name="QR_scanner" component={QR_codeScreen}/>
      <Stack.Screen name="Quest" component={QuestScreen} />

    </Stack.Navigator>
  );
}

export const HomeTabs = () => {
  return (
    
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:'#3498db',
                margin:12,
                borderRadius:7,
            },
        })}
    >
      <Tab.Screen options={{
        title:'Home',
          tabBarIcon: ({ focused }) => (
            <Entypo
            
              name="home"
              size={35  }
              color={focused ? "white" : "#252C4A"}
            />
          ),
        }} name="HomeTabs" component={HomeScreen}/>
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="calendar"
              size={35}
              color={focused ? "white" : "#252C4A"}
            />
          ),
        }} name="Info" component={HomeStack} />
    </Tab.Navigator>
  );
}