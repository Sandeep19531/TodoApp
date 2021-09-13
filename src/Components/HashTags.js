import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HashItem from './HashItem';

function HashTags() {
    const {hashTags} = useSelector(state => state.taskState);
    var z = new Set();
    hashTags.map(item =>{
        z.add(...item.hashArray)
    });
    var arr = Array.from(z);
    console.log(arr);
    return (
        <HashTagContainer>
            {
                arr.map(item =>(
                    <HashItem 
                        data={item}
                    />
                ))
            }
        </HashTagContainer>
    )
}

export default HashTags;

const HashTagContainer = styled.div`
    background-color: white;
    display: flex;
    width: 50vw;
    font-size: small;
    align-items: center;
    justify-content: center;
    padding: 0.5vw;
    margin-bottom: 1vw;
`;
