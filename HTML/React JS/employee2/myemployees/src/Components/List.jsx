import React from "react";
import "./List.css"
class List extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        const {employees} = this.props;
       
        return(
            <div className='list'>
                <div className='header'>
                    <div className='cell'>Name</div>
                    <div className='cell'>LastName</div>
                    <div className='cell'>City</div>
                    <div className='cell'>State</div>
                </div>

                { 
                employees.map(employee=>{
                    const { id, first_name, last_name, city, state} = employee
                    return (
                        <div key={id} className='row' >
                            <div className='cell'>{first_name}</div>
                            <div className='cell'>{last_name}</div>
                            <div className='cell'>{city}</div>
                            <div className='cell'>{state}</div>
                        </div>
                    )
                })
                }      
            </div>
        );
    }
}

export default List;