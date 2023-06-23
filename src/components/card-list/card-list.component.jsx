import { Component } from "react";
import React from "react";
import './card-list.styles.css';
import Card from "../card-container/card-container.component";

class CardList extends Component {

    render() {
        console.log(this.props.monsters);
        const {monsters} = this.props;
        console.log("Render from card list");
        
        return ( 
            <div className='card-list'>        
                {monsters.map((monster) => (
                    <Card monster={monster} />
                ))}
            </div>
        );
    }
}
const MemoizedCardList = React.memo(CardList);  
export default MemoizedCardList;