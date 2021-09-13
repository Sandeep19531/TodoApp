import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppIcon from '../AppIcon.png';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {addValue, clearValue} from '../features/Search.js';

function Header() {
    const [search, setSearch] = useState('');
    const {searchValue} = useSelector(state => state.searchState)
    const dispatch = useDispatch();
    const handleSearch = (e)=>{
        e.preventDefault();
        dispatch(addValue(search));
    }
    const handleClose = (e)=>{
        dispatch(clearValue());
        setSearch('');
    }
    if(search === ''){
        dispatch(clearValue());
    }
    return (
        <HeaderContainer>
            <AppLogo>
                <img src={AppIcon} alt="AppIcon"/>
            </AppLogo>
            <form onSubmit={handleSearch} >
                <SearchBar type="text" onChange={e => setSearch(e.target.value)} value={search} />
                <SearchBtn type="submit">
                    {
                        searchValue === '' ? <SearchIcon/> : <CloseIcon onClick={handleClose} />
                    }
                </SearchBtn>
            </form>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    height: 10vh;
    align-items: center;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
    position: sticky;
    >img{
        display: block;
        flex: 0.15;
        width: 100%;
    }
    >form{
        flex: 0.75;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
`;

const SearchBar = styled.input`
    width: 100%;
    :focus{
        outline: none;
    }
    font-weight: 600;
`;

const SearchBtn = styled.button`
    background-color: #7ed7f7;
`;

const AppLogo = styled.div`
    width: 100%;
    flex: 0.1;
    align-items: center;
    justify-content: center;
    >img{
        width: 100%;
        object-fit: contain;
        height: 7vh;
    }
`;

