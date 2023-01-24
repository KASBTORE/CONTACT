import React, {useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const products = [

  { name: "Dell", price: "100000000" },
  { name: "India", price: "102002093" },
  {name:"hp", price :"102398232389"}
  

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    products.filter((product) => {
    return product.name.match(searchInput);
});
}

return <div>

<input
   className='mt-10  border-2 w-full text-left outline-none p-2 w-[50vh] collapse lg:visible'
   type="search"
   placeholder="Search anything here...."
   onChange={handleChange}   
   value={searchInput} 
   icon={< AiOutlineSearch />}
   />
</div>


};

export default SearchBar;