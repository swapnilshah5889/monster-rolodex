import { Component } from "react";
import React from "react";

class CardList extends Component {

    render() {
        console.log(this.props.monsters);
        const {monsters} = this.props;
        console.log("Render from card list");
        
        return ( 
            <div>        
                {monsters.map((monster) => (
                    <p key={monster.id}>{monster.name}</p>
                ))}
            </div>
        );
    }
}
const MemoizedCardList = React.memo(CardList);  
export default MemoizedCardList;