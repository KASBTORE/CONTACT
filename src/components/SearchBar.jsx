import React, {useState} from 'react'


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const products = [

  { name: "Dell", price: "100000000" },
  { name: "India", price: "102002093" },

  

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
   className='mt-10 border-2 w-full text-center outline-none p-4 w-96'
   type="search"
   placeholder="Search anything here...."
   onChange={handleChange}   
   value={searchInput} />
 
</div>


};

export default SearchBar;