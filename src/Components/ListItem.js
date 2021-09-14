import React from 'react';
import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../features/Tasks';

function ListItem({id,date,data}) {
    const dispatch = useDispatch();
    const removefromlist = ()=>{
        dispatch(removeFromBasket(id));
    }
    const HASHTAG_FORMATTER = string => {
        return string.split(/((?:^|\s)(?:#[a-z\d-]+))/gi).filter(Boolean).map((v,i)=>{
          if(v.includes('#')){
            return <span key={i} style={{color:'blue'}}>{v}</span>
          }   else{
            return <span key={i}>{v}</span>
          }
        })
      };
    return (
        <ListContainer>
            <Datadiv>
                <DateDiv>
                    <small>Issued on: {date}</small>
                </DateDiv>
                <TaskDiv>
                <strong>{HASHTAG_FORMATTER(data)}</strong>
                </TaskDiv>
            </Datadiv>
            <div>
                <RemoveBtn onClick={removefromlist} >
                    <CancelIcon />
                </RemoveBtn>
            </div>
        </ListContainer>
    )
}

export default ListItem;

const ListContainer = styled.div`
    display: flex;
    background-color: yellow;
    margin: 0.5vw;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vw;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
`;

const Datadiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const DateDiv = styled.div`
    font-size: 12px;
    font-weight: 700;
`;

const TaskDiv = styled.div`
    font-family: Bookman, URW Bookman L, serif;
    font-weight: 600;
    font-size: 18px;
`;

const RemoveBtn = styled.button`
    background-color: #fffdb8;
    color: #632f02;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 0 0.06vw 0.19vw rgba(0,0,0,0.12),0 0.06vw 0.13vw rgba(0,0,0,0.24);
    > .MuiSvgIcon-root{
        /* color: silver; */
    }
`;

