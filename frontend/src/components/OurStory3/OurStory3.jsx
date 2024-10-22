import React from 'react';
import productImage from '../../assets/b5.png'; // Replace with your image path

const OurProducts = () => {
    return (
        <section className="bg-blush min-h-screen flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-0 flex justify-center items-center">
                <img 
                    src={productImage} 
                    alt="Our Products" 
                    className="max-w-full h-auto" 
                />
            </div>
            <div className="w-full md:w-1/2 py-16 px-8">
               <h1 className="text-4xl font-bold text-black mb-6 text-center" style={{ fontFamily: 'Zeyada' }}>Our Products</h1>
<p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
    All our products are cruelty-free, they belong to a category containing all cosmetics that have not been tested on animals. 
    Each cosmetic is subject to strict control by independent inspection bodies chosen by the Coalition for Consumer Information 
    in Cosmetics (CCIC), which is an NGO founded by 8 international animal protection groups such as: American Anti-Vivisection Society, 
    Animal Alliance of Canada, Doris Day Animal League, etc.
</p>
            </div>
        </section>
    );
};

export default OurProducts;