import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  SectionList,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";
import AboutBook from "./aboutbook";
const Stack = createStackNavigator();
function Element({ data }) {
  // const [selectedItem, setSelectItem] = useState([]);
  return (
    <View style={styles.app}>
      <Image source={{ uri: data.img }} style={styles.img} />
      <Text>{data.title}</Text>
      <Text>{data.desc}</Text>
      <Button title="о книге" onPress={data.goToAboutBook} />

      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="AboutBook"
            component={AboutBook}
            // options={{ title: "о книге" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const UserScreen = (props) => {
  const DATA = [
    {
      data: [
        {
          title: "Will.",
          img:
            "https://cv3.litres.ru/pub/c/audiokniga/cover_415/67254938-uill-smit-will-chemu-mozhet-nauchit-nas-prostoy-paren-stavshiy-sa-67254938.webp",
          desc: "Марк Мэнсон"
        },
        {
          title: "Брать, давать и наслаждаться.",
          img:
            "https://cv8.litres.ru/pub/c/audiokniga/cover_415/66159282-tatyana-muzhickaya-brat-davat-i-naslazhdatsya-kak-ostavatsya-v-re-66159282.webp",
          desc: "Татьяна Мужицкая"
        },
        {
          title: "НИ СЫ.",
          img:
            "https://cv9.litres.ru/pub/c/audiokniga/cover_415/37402792-dzhen-sinsero-ni-sy-vostochnaya-mudrost-kotoraya-glasit-bud-uvere-37402792.webp",
          desc: "Джен Синсеро"
        },
        {
          title: "Грани сумерек",
          img:
            "https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_330/67718130-andrey-vasilev-4-grani-sumerek.jpg",
          desc: "Андрей Васильев"
        },
        {
          title: "Прыжок.",
          img:
            "https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_250/68033986-sergey-lukyanenko-pryzhok-red-08-09-22.jpg",
          desc: "Сергей Лукьяненко"
        },
        {
          title: "Вопрос смерти и жизни.",
          img:
            "https://cv9.litres.ru/pub/c/audiokniga/cover_330/65835590-irvin-yalom-vopros-smerti-i-zhizni-65835590.jpg",
          desc: "Ирвин Ялом"
        },
        {
          title: "Тревожные люди.",
          img:
            "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_250/63028197-fredrik-bakman-trevozhnye-ludi.jpg",
          desc: "Фредрик Бакман"
        },
        {
          title: "Билли Саммерс.",
          img:
            "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_250/67303161-stiven-king-billi-sammers.jpg",
          desc: "Стивен Кинг"
        }
      ]
    }
  ];
  function goToAboutBook() {
    //перейти к отзывам
    props.navigation.navigate("AboutBook");
  }
  function goToLogin() {
    //выйти
    props.navigation.navigate("Login");
  }
  return (
    <ScrollView>
      <Button title="о книге" onPress={goToAboutBook} />
      <Button title="выйти" onPress={goToLogin} />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Element data={item} />}
        renderSectionHeader={({ section: { text } }) => <Text>{text}</Text>}
      />
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="AboutBook"
            component={AboutBook}
            options={{ title: "о книге" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  app: {
    alignItems: "center"
  },
  img: {
    width: "150px",
    height: "210px"
  }
});
export default UserScreen;
