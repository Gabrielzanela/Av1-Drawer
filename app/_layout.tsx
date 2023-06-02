// import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
   
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Index",
            title: "App",
          }}
        />
        <Drawer.Screen
          name="telaA" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Sobre",
            title: "Sobre",
            drawerItemStyle: { height: 0 }
          }}  
        />
         <Drawer.Screen
        name="telaB" // This is the name of the page and must match the url from root
        options= {{
          drawerLabel: "Cadastro",
          title: "cadastro",
          drawerItemStyle: { height: 0 }
        }}
        />
      </Drawer>
    );
  }
