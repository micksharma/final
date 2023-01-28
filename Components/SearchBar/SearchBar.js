import { useEffect,useState } from "react";
import Datas from '../../Data/data';
import SearchList from "./SearchList.js";
import Scroll from './Scroll.js';

function SearchBar({Datas}) {
    const [searchField , setSearchField] = useState("");
    const [searchShow , setSearchShow] = useState(false);

    const fileredData = Datas?.filter(
        city => {
            return (
                city
                .value
                .toLowerCase()
                .includes(searchField.toLowerCase()) 
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    };

    function searchList(){
        if(searchShow){
            return (
                <Scroll>
                    <SearchList fileredData={fileredData} />
                </Scroll>
            )
        }
    }
      return (
        <>
         <div>
            <p style={{fontSize:'1em',paddingBottom:'1em',color:'black',paddingLeft:'6em'}}>Select A City for Hotel</p>
            <input type="search" placeholder="City" onChange={handleChange} style={{height:'3em',width:'24em'}}/>
        </div>
        {searchList()}
        </>
       
      )
}

export default SearchBar