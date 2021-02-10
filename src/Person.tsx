import React from 'react';

class Person extends React.Component {
    render() {
        return (
        <div>
            <h1>이름 :{this.props.name} 나이는 : {this.props.age} </h1>
        </div>
        )
    }
}

export { Person };
// 컴포넌트 하나 export default Person; 




// const Person = (props : any) => (
//     <div>
//         <h1>이름 :{props.name} 나이는 : {props.age} </h1>
//     </div>
//     )

