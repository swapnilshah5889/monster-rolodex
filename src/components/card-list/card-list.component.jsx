import { Component } from "react";
import React from "react";
import './card-list.styles.css'
import './card.styles.css'

class CardList extends Component {

    render() {
        console.log(this.props.monsters);
        const {monsters} = this.props;
        console.log("Render from card list");
        
        return ( 
            <div className='card-list'>        
                {monsters.map((monster) => 
                {
                    const {name, id, email} = monster;

                    return (
                        <div className="card-container" key={id}>
                            <img
                                alt={`monster ${name}`}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <h2 >{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
const MemoizedCardList = React.memo(CardList);  
export default MemoizedCardList;