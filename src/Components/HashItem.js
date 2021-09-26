import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addValue } from '../features/Search';

function HashItem({data}) {
    console.log(data);
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(addValue(data));
    }
    return (
        <HashItemContainer>
            <button onClick={() => handleClick()} >{data}</button>
        </HashItemContainer>
    )
}

export default HashItem;

const HashItemContainer = styled.div`
    margin-right: 10px;
    padding: 2px;
    overflow-x: none;
    height: fit-content;
    >button{
        background-color: #fffdb8;
        cursor: pointer;
    }
`;