import { Redirect } from 'expo-router'

export default function Page() {
  return (
    <>
      <Redirect href={'/home'} />
      {/* <Redirect href={'/places/addPlace'} /> */}
    </>
    // <View className="flex flex-1">
    //   <Header />
    //   <Content />
    //   <Footer />
    // </View>
  )
}
