import React, { Component } from "react";
import Card from "./Card";


class CardList extends Component {
    state = {
        data: [
            {
                firstName: "marry",
                lastName: "Doe",
                EmailaAdress: "marrydoe@gmail.com",
                PhoneNumber: "6543287654",
                Profession : "teacher"

            },
            {
                firstName: "Jane",
                lastName: "Doe",
                EmailaAdress: "janedoe@gmail.com",
                PhoneNumber: "6543287654",
                Profession : "artist"
            },
            {
                firstName: "Jack",
                lastName: "Doe",
                EmailaAdress: "jackdoe@gmail.com",
                PhoneNumber: "8905787224",
                Profession : "doctor"
            },
        ],

    };render() {
        return (
            <div>
                
                {
                    this.state.data.map((item, key) => (
                        <Card
                            profile={item}
                            key={key}
                            handleName={this.handleName}
                        />
                    ))}
            </div>
        );
    }
}
export default CardList;
