import React, { useState } from 'react';
import styled from 'styled-components';
import ListBox from './ListBox';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from 'react-redux';
import { addToBasket } from '../features/Tasks';
import HashTags from './HashTags';

function HomeBody() {
    const dispatch = useDispatch();
    const [taskValue, setTaskValue] = useState('');
    const addtolist = (e) =>{
        e.preventDefault();
        if(taskValue !== ''){
            var today = new Date();
            var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            dispatch(addToBasket({
                id: parseInt(Date.now()),
                date: todayDate,
                data: taskValue
            }))
        }
        setTaskValue('');
    }
    return (
        <HomeBodyContainer>
            <AddTasks>
                <form onSubmit={(e)=>addtolist(e)}>
                    <TaskBar placeholder="Add tasks here" onChange={e => setTaskValue(e.target.value)} value={taskValue} />
                    <TaskBarBtn type="submit" >
                        <AddIcon />
                    </TaskBarBtn>
                </form>
            </AddTasks>
            <HashTags />
            <ListBox />
        </HomeBodyContainer>
    )
}

export default HomeBody;

const HomeBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AddTasks = styled.div`
    width: 80%;
    justify-content: center;
    align-items: center;
    padding: 2vw;
    >form{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const TaskBar = styled.input`
    width: 60vw;
    height: 6vh;
    font-weight: bold;
    padding: 0px 10px;
    :focus{
        outline: none;
    }
`;

const TaskBarBtn = styled.button`
    height: 6.5vh;
    width: fit-content;
    background-color: pink;
`;