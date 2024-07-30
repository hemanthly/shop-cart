'use client';
import Banner from "@/components/molecules/Banner/Banner";
import Header from "@/components/organisms/Header/Header";
// import ProductList from "@/components/organisms/ProductList/ProductList";
// import { store } from "@/redux/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="">
      {/* <Provider store={store}> */}
        <Header/>
        <Banner/>
        <div className="mt-8">
            {/* <ProductList /> */}
          </div>

      {/* </Provider> */}
    </main>
  );
}
