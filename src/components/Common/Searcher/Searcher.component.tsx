import { useState } from "react";
import SearcherView from "./Searcher.view";

interface ISearcher {
  onSearch: (text: string) => void 
}

const Searcher = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState('');
  const handleOnChange = (event) => {
    const { target: { value } } = event;
    setSearchValue(() => value);
  };
  const handleKeyUp = (event) => {
    if(event.keyCode === 13) {
      onSearch(searchValue);
    }
  };
  const handleOnSearch = () => {
    onSearch(searchValue);
  }
  

  return (
    <SearcherView handleChange={handleOnChange} handleKeyUp={handleKeyUp}/>
  )
}
export default Searcher