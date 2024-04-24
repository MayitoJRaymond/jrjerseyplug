import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productCard/ProductCard";
import Navbar from "./components/navbar/Navbar";
import SliderImage from "./components/slider/SliderImage";
import Shop from "./components/shop/shop";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
<main>
  {/* <div>hello World Next js here i come</div>
  <Link href='/users'>Userss</Link>
  <ProductCard/>  */}
  <Navbar/>
  <SliderImage/>
  <ProductCard/>
  <Shop/>
  <Footer/>
</main>
  );
}
