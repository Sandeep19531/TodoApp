import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ListItem from './ListItem';

function ListBox() {
    const {tasks} = useSelector(state => state.taskState);
    const {searchValue} = useSelector(state => state.searchState);
    function isValid(val){
        if(searchValue === ''){
            return true;
        }else if(val?.data?.toLowerCase().includes(searchValue.toLowerCase()) ||  val?.date?.toLowerCase().includes(searchValue.toLowerCase()) ){
            return true;
        }
        return false;
    }
    return (
        <ListBoxContainer>
            {tasks?.filter(isValid).map(item =>(
                <ListItem
                    id = {item.id}
                    date = {item.date}
                    data = {item.data}
                />
            ))}
        </ListBoxContainer>
    )
}

export default ListBox;

const ListBoxContainer = styled.div`
    height: 50vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;