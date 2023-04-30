import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { statuses } from '../utils/styles';
import SliderCard from './SliderCard';
import FilterCard from './FilterCard';

const FilterSection = () => {
    const [category, setCategory] = useState("fruits");
    const products = useSelector((state) => state.products);


  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
        <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-2xl text-headingColor font-bold">
                    Our Hot Dishes
                </p>
                <div className="w-40 h-1 rounded-md bg-orange-500"></div>
            </div>
        </div>

       <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
           {statuses && 
             statuses.map((data, i) => (
                <FilterCard 
                    data={data}
                    category={category}
                    setCategory={setCategory}
                    index={i}
                />
             ))}
       </div>

       <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-12">
         {
            products && products.filter((data) => data.product_category === category)
             .map((data, i) => 
             <SliderCard 
                key={i}
                data={data}
                index={i}
             />)
         }
       </div>
    </motion.div>
  )
};


export default FilterSection