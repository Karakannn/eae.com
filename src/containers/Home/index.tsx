import Header from '@components//Page/Header'
import HomeSlider from './components/HomeSlider'
import Products from './components/Products'
import BIMSolutions from './components/BIMSolutions'
import InteractiveWebsite from './components/InteractiveWebsite'
import Sellers from './components/Sellers'
import 'react-tooltip/dist/react-tooltip.css'
import HomeBlog from './components/HomeBlog'
import Footer from '@components//Page/Footer/Footer'


export default function Home() {
  return (
    <div className='bg-gray-50'>
      <Header />
      <HomeSlider />
      <Products/>
      <BIMSolutions/>
      <InteractiveWebsite/>
      <Sellers/>
      <HomeBlog/>
      <Footer/>
    </div>
  )
}
