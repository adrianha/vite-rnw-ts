import { Text, View } from "react-native";
import { DRNBadge, DRNButton, R } from "@traveloka/district-ui";
import IcBrandTraveloka from "@traveloka/district-icon/IcBrandTraveloka";
import DRNViewDescription from "@traveloka/district-view-description";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Square } from "@adr/pkgg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: R.spacing.xl,
      }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Square color="blue" />
      <Text
        // @ts-expect-error TODO
        style={{
          ...R.typography.hero,
          color: R.color.lightPrimary,
        }}
      >
        Vite + RNW + TS
      </Text>
      {/** @ts-expect-error TODO */}
      <IcBrandTraveloka width={60} height={60} style={{ display: "block" }} />
      <DRNBadge variant="ALERT" label="DRNBadge" />
      <DRNButton
        text="DRNButton"
        onPress={() => alert("DRNButton.onPressed")}
      />
      <View style={{ width: "50%", backgroundColor: R.color.lightNeutral }}>
        <DRNViewDescription
          data={[
            {
              id: "5c6a3f9ad0238",
              componentName: "CardView",
              type: "VIEW",
              children: [
                {
                  id: "5c6a3f9ad0399",
                  componentName: "Title",
                  type: "VIEW",
                  children: [],
                  marginTop: null,
                  marginBottom: null,
                  marginLeft: null,
                  marginRight: null,
                  paddingTop: null,
                  paddingBottom: null,
                  paddingLeft: null,
                  paddingRight: null,
                  backgroundColor: null,
                  width: null,
                  height: null,
                  styleSheet: {
                    marginTop: 16,
                    marginHorizontal: 24,
                  },
                  styleSheetGroup: undefined,
                  validations: [],
                  text: "1. Shinjuku Gyoen",
                  style: "TITLE_3",
                  color: null,
                  uid: "IvsevP-fzB",
                  parentUID: "wMGRVKBBc",
                },
                {
                  id: "5c6a3f9ad0511",
                  componentName: "ImageGallery",
                  type: "VIEW",
                  children: [],
                  marginTop: null,
                  marginBottom: null,
                  marginLeft: null,
                  marginRight: null,
                  paddingTop: null,
                  paddingBottom: null,
                  paddingLeft: null,
                  paddingRight: null,
                  backgroundColor: null,
                  width: null,
                  height: 200,
                  styleSheet: {
                    marginTop: 16,
                    marginHorizontal: 16,
                  },
                  styleSheetGroup: undefined,
                  validations: [],
                  imageUrls: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdkw4AcqfuwrwrLrjC2MKsLVay7KhI4xbjA&usqp=CAUhttps://tvlk-blog.imgix.net/2019/02/Tokyo-Shinjuku-Gyoen-1017018754.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1",
                  ],
                  uid: "43r86xCe7_",
                  parentUID: "wMGRVKBBc",
                },
                {
                  id: "5c6a3f9ad05c3",
                  componentName: "Paragraph",
                  type: "VIEW",
                  children: [],
                  marginTop: null,
                  marginBottom: null,
                  marginLeft: null,
                  marginRight: null,
                  paddingTop: null,
                  paddingBottom: null,
                  paddingLeft: null,
                  paddingRight: null,
                  backgroundColor: null,
                  width: null,
                  height: null,
                  styleSheet: {
                    // @ts-expect-error TODO
                    lineHeight: 24,
                    marginTop: 16,
                    marginHorizontal: 24,
                    fontSize: 16,
                  },
                  styleSheetGroup: undefined,
                  validations: [],
                  htmlText:
                    "Bosan berkeliling kota ataupun berbelanja di Tokyo? Coba ke Shinjuku Gyoen saja! Sebagai salah satu taman kota tercantik di Tokyo, Shinjuku Gyoen menjadi tempat yang populer untuk menikmati bunga sakura sambil bersantai. Maka dari itu, tak perlu heran jika kamu melihat ada banyak pengunjung yang justru berpiknik di bawah teduhnya pepohonan di area ini. Terbagi ke dalam beberapa taman utama, tempat wisata ini memiliki koleksi berbagai jenis tanaman tropis maupun subtropis.",
                  style: "BODY_1",
                  color: null,
                  uid: "BjJqWDVBOw",
                  parentUID: "wMGRVKBBc",
                },
              ],
              marginTop: null,
              marginBottom: null,
              marginLeft: null,
              marginRight: null,
              paddingTop: null,
              paddingBottom: null,
              paddingLeft: null,
              paddingRight: null,
              backgroundColor: null,
              width: null,
              height: null,
              styleSheet: {
                marginBottom: 8,
              },
              styleSheetGroup: undefined,
              validations: [],
              uid: "wMGRVKBBc",
            },
            {
              id: "RBPa6c8z4",
              componentName: "Countdown",
              type: "VIEW",
              endTimestamp: 1674324614000,
              columnTitle: {
                day: "HARI",
                hour: "JAM",
                minute: "MENIT",
                second: "DETIK",
              },
              color: {
                number: "#232323",
                border: "blue",
                text: "white",
                numberBackground: "white",
                textBackground: "blue",
                colon: "blue",
              },
              uid: "RBPa6c8z4",
            },
            {
              id: "lDxQg581B",
              componentName: "ProductWidget",
              type: "VIEW",
              title: "enim unde velit",
              subTitle: "Strackestad",
              imageUrl:
                "https://ideastest.org.uk/wp-content/uploads/2019/06/default-avatar-150x150.jpg",
              ratingLabel: "Rating: ",
              rating: "7.8/10",
              price: "Rp 640.000",
              deepLink: "traveloka://home",
              styleSheetGroup: {
                container: {},
                image: {},
                subTitleText: {},
                titleText: {},
                priceText: {},
              },
              uid: "lDxQg581B",
            },
          ]}
        />
      </View>
    </div>
  );
}

export default App;
