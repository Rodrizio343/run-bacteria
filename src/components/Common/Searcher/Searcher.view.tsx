import { Search, SearchIconWrapper, StyledInputBase } from './Searcher.styles';
import SearchIcon from '@mui/icons-material/Search';

const SearcherView = ({handleChange, handleKeyUp}) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </Search>
  )
}
export default SearcherView