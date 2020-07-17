import React from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/Auth-Context'

class person extends React.Component {
     constructor(props){
         super(props);
         this.inputElementRef = React.createRef()
     }
     componentDidMount(){
         this.inputElementRef.current.focus();
     }
    render() {
        console.log('[Person.js] person is rendering')
        return(
            <Aux>
   <AuthContext.Consumer>
          {(context) => context.authentication ? <p>Authenticated</p>:<p>Please login</p>}
    </AuthContext.Consumer>
                 <p key = "1"onClick = {this.props.click}>
                            Hey guys,I am {this.props.name} 
                            and my age is {this.props.age}</p>
                        <input 
                        ref = {this.inputElementRef}
                        key = "2" 
                        type="text"
                        onChange = {this.props.change}
                        value = {this.props.name}/>
            </Aux>
        )
    }
}
person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    change:PropTypes.func,
} 
export default WithClass(person , classes.Person);