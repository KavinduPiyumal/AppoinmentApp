import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form,FormControl,Dropdown } from 'react-bootstrap';
import '../App.css';







const Search = ({query,onQueryChange,sortBy,onSortByChange,orderBy,onOrderByChange}) => {
  return      <Form className="position-relative d-flex align-items-center search mt-4">
  <FormControl
    onChange={(event) => {onQueryChange(event.target.value)}}
    value={query}
    type="search"
    placeholder="Search"
    className="position-absolute searchbox rounded-0"
    aria-label="Search"
  />
  <FontAwesomeIcon icon={faSearch} className='position-absolute mx-2'/>
  <Dropdown align="end" className="position-absolute searchb rounded-0">
    <Dropdown.Toggle id="dropdown-button-dark-example1" className='rounded-0' variant="secondary">
      Sort By
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item  
        onClick={() => onSortByChange('petName')}  
        className={` ${(sortBy === 'petName') ? 'active': ''}`}
        >Pet Name</Dropdown.Item>
      <Dropdown.Item  
        onClick={() => onSortByChange('ownerName')}
        className={` ${(sortBy === 'ownerName') ? 'active': ''}`}
        >Owner Name</Dropdown.Item>
      <Dropdown.Item 
        onClick={() => onSortByChange('aptDate')}
        className={` ${(sortBy === 'aptDate') ? 'active': ''}`}
      >Date</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item 
        onClick={() => onOrderByChange('asc')}
        className={` ${(orderBy === 'asc') ? 'active': ''}`}
      >Asc</Dropdown.Item>
      <Dropdown.Item 
        onClick={() => onOrderByChange('desc')}
        className={` ${(orderBy === 'desc') ? 'active': ''}`}
      >Desc</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Form>;
};

export default Search;
