// import React, { useState } from 'react';
// import "./ProductListPage.css";
// import { IoIosArrowDown } from "react-icons/io";

// import data1 from './Data1';
// import data2 from './Data2';

// import { FaRegHeart } from "react-icons/fa";
// import Card from '../Card/Card';

// const ProductList = () => {

//     const [clicked, setClicked] = useState(0);


//     const [checkedItems, setCheckedItems] = useState({});
//     const [value, setValue] = useState(50);

//     // Handle range input change
//     const handleChange2 = (event) => {
//         setValue(event.target.value);
//     };

//     function handleChange(event) {

//         const { value, checked } = event.target;
//         setCheckedItems((prevObj) => {
//             return {
//                 ...prevObj,
//                 [value]: checked,
//             }
//         })



//     }



//     function handleClick(currId) {
//         console.log(currId);
//         // setClicked(currId);
//         (clicked === null) ? setClicked(currId) : setClicked(null);

//     }


//     return (
//         <div className="product-list-page">
//             <div className="img-container">
//                 <img src="src/Components/ProductListPage/Assets/HeroImg.png" alt="" />
//             </div>

//             <div className="down-container">
//                 <div className="info-subcontainer">
//                     <div className="info-subcontainer-left">
//                         <h2>Filters</h2>
//                     </div>

//                     <div className="info-subcontainer-right">

//                     </div>
//                 </div>

//                 <div className="filter-product-container">
//                     <div className="filter-container">
//                         <ul className="filter-list">
//                             {data1.map((item, index) => {
//                                 return (
//                                     <div key={index} id={index}>
//                                         <div className='filter-head-div'>
//                                             <h3 className='filter-title'>{item.title}</h3>
//                                             <span onClick={() => { handleClick(item.id) }}><IoIosArrowDown size={25} /></span>
//                                         </div>


//                                         {(clicked === item.id) ? <div className='actual-filter-list' >
//                                             <ul>
//                                                 {item.filters.map((filters, index) => {
//                                                     return (
//                                                         <div className="filter-item" key={index} id={index}>
//                                                             <input type="checkbox" name="" id="" value={filters} checked={!!checkedItems[filters]} onChange={handleChange} /><span>{filters}</span>
//                                                         </div>
//                                                     )
//                                                 })}
//                                             </ul>
//                                         </div> : null}
//                                     </div>


//                                 )
//                             })}

//                             <div>
//                                 <div className="filter-head-div">
//                                     <h3 className="filter-title">Price</h3>
//                                     <span><IoIosArrowDown size={25} /></span>
//                                 </div>

//                                 <div className="filter-item">

//                                 </div>

//                             </div>

//                             <div className="range-container" style={{ margin: '20px' }}>
//                                 <label htmlFor="myRange" className="range-label" style={{ marginBottom: '10px' }}>
//                                 </label>
//                                 <input
//                                     type="range"
//                                     id="myRange"
//                                     min="0"
//                                     max="100"
//                                     value={value}
//                                     step="1"
//                                     onChange={handleChange2}
//                                     style={{ width: '100%' }}
//                                 />
//                                 <div className="range-value" >
//                                     <span>₹0</span>
//                                     <span>₹{value}</span>
//                                 </div>
//                             </div>



//                         </ul>
//                     </div>

//                     <div className='product-flex'>
//                         {data2.map((item, index) => {
//                             const checkedFilterKeys = Object.keys(checkedItems).filter(key => checkedItems[key]); // Get an array of checked filter keys

//                             const noProductTypeFilters = checkedFilterKeys.length === 0; // Much simpler check

//                             if (noProductTypeFilters || checkedFilterKeys.some(key => item.productType.toLowerCase() === key.toLowerCase())) {
//                                 return (
//                                     <Card 
//                                     key={index} 
//                                     title={item.title} 
//                                     img={item.img} 
//                                     price={item.price}
//                                     offer={item.offer}
//                                     oldPrice={item.oldPrice}
//                                     />
//                                 );
//                             }
//                             return null;
//                         })}

//                     </div>


//                 </div>


//             </div>
//         </div>
//     )
// }

// export default ProductList;

import React, { useState, useMemo } from 'react';
import "./ProductListPage.css";
import { IoIosArrowDown } from "react-icons/io";
import data1 from './Data1';
import data2 from './Data2';
import Card from '../Card/Card';

const ProductList = () => {
    const [clicked, setClicked] = useState(null);
    const [checkedItems, setCheckedItems] = useState({});
    const [value, setValue] = useState(2000);

    const filterKeyMap = useMemo(() => {
        return {
            "producttype": "productType",
            "skintype": "skinType",
            "concern": "concern",
            "ingredients": "ingredients",
            "preferences": "preferences"
        };
    }, []);

    const handleChange2 = (event) => {
        setValue(parseInt(event.target.value, 10));
    };

    const handleChange = (event) => {
        const { value, checked } = event.target;

        // Calculate filter title based on the filter name
        const filterTitle = data1.find(item => item.filters.includes(value))?.title.toLowerCase().replace(/\s+/g, '');

        if (!filterTitle) return;

        const filterKey = filterKeyMap[filterTitle];

        setCheckedItems((prevObj) => {
            const updatedFilterValues = checked
                ? [...(prevObj[filterKey] || []), value.toLowerCase()]
                : (prevObj[filterKey] || []).filter(item => item !== value.toLowerCase());

            return {
                ...prevObj,
                [filterKey]: updatedFilterValues,
            };
        });
    };

    const handleClick = (currId) => {
        setClicked(clicked === currId ? null : currId);
    };

    const filteredProducts = useMemo(() => {
        return data2.filter((item) => {
            return Object.entries(checkedItems).every(([filterKey, selectedOptions]) => {
                if (selectedOptions.length === 0) return true;

                const productValues = item[filterKey];

                if (!productValues) return false;

                return selectedOptions.some((option) =>
                    Array.isArray(productValues)
                        ? productValues.map(val => val.toLowerCase()).includes(option)
                        : productValues.toLowerCase() === option
                );
            });
        }).filter(item => item.price <= value);
    }, [checkedItems, value]);

    return (
        <div className="product-list-page">
            <div className="img-container">
                <img src="src/Components/ProductListPage/Assets/HeroImg.png" alt="" />
                <h1 className="main-title">Bath Care</h1>
            </div>

            <div className="down-container">
                <div className="info-subcontainer">
                    <div className="info-subcontainer-left">
                        <h2>Filters</h2>
                    </div>
                    <div className="info-subcontainer-right"></div>
                </div>

                <div className="filter-product-container">
                    <div className="filter-container">
                        <ul className="filter-list">
                            {data1.map((item, index) => (
                                <div key={index}>
                                    <div className='filter-head-div'>
                                        <h3 className='filter-title'>{item.title}</h3>
                                        <span onClick={() => handleClick(item.id)}>
                                            <IoIosArrowDown size={25} />
                                        </span>
                                    </div>
                                    {clicked === item.id && (
                                        <div className='actual-filter-list'>
                                            <ul>
                                                {item.filters.map((filter, index) => (
                                                    <div className="filter-item" key={index}>
                                                        <input
                                                            type="checkbox"
                                                            value={filter}
                                                            checked={checkedItems[filterKeyMap[item.title.toLowerCase().replace(/\s+/g, '')]]?.includes(filter.toLowerCase()) || false}
                                                            onChange={handleChange}
                                                        />
                                                        <span>{filter}</span>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div>
                                <div className="filter-head-div">
                                    <h3 className="filter-title">Price</h3>
                                    <span><IoIosArrowDown size={25} /></span>
                                </div>
                            </div>

                            <div className="range-container" style={{ margin: '20px' }}>
                                <input
                                    type="range"
                                    id="myRange"
                                    min="0"
                                    max="2000"
                                    value={value}
                                    step="1"
                                    onChange={handleChange2}
                                    style={{ width: '100%' }}
                                />
                                <div className="range-value" >
                                    <span>₹0</span>
                                    <span>₹{value}</span>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className='product-flex'>
                        {filteredProducts.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                offer={item.offer}
                                oldPrice={item.oldPrice}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
