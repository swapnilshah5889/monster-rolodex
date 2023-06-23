import { Component } from "react";

class CardList extends Component {

    render() {
        const {monsters} = this.props;
        console.log(monsters);
        
        return ( 
            <div>        
                {monsters.map((monster) => (
                    <p>{monster.name}</p>
                ))}
            </div>
        );
    }
}

export default CardList;