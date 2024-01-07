import Image from 'next/image'
import ArraivalSection from './Components/ArraivalSection/ArraivalSection'
import BestSelling from './Components/BestSelling/BestSelling'
import CategorySection from './Components/CategorySection/CategorySection'
import ExploreProduct from './Components/ExploreProduct/ExploreProduct'
import ProductSection from './Components/ProductSection/ProductSection'
import { Slider } from './Components/Slider/Slider'
import { AccordianCom } from './SignUp/Components/Accordian/AccordianCom'
export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4">
          <AccordianCom />
          <p className='md:ml-10 text-[#495057] font-bold mt-3 ml-5'>Electronics</p>
          <p className='md:ml-10 text-[#495057] font-bold mt-5 ml-5'>Home & LifeStyle</p>
          <p className='md:ml-10 text-[#495057] font-bold mt-5 ml-5'>Medicine</p>
          <p className='md:ml-10 text-[#495057] font-bold mt-5 ml-5'>Sports & Outdoor</p>
          <p className='md:ml-10 text-[#495057] font-bold mt-5 ml-5'>Baby's & Toys</p>
          <p className='md:ml-10 text-[#495057] font-bold mt-5 ml-5'>Groceries & Pets</p>
          <p className='md:ml-10 text-[#495057] font-bold mt-5 ml-5'>Health & Beauty</p>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <Slider />
        </div>
      </div>
      <div className='mx-10'>
        <ProductSection />
        <CategorySection />
        <BestSelling />
        <ExploreProduct />
        <ArraivalSection />
      </div>
    </main>

  )
}
