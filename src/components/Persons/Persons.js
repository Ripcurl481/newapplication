import React,{PureComponent} from 'react';
import Person from '../../components/Persons/Person/Person';


class Persons extends PureComponent {
    // shouldComponentUpdate(nextProps , nextState){
    //     console.log('[Persons.js] shouldComponentUpdate')

    //     if(
    //         nextProps.persons !== this.props.persons||
    //         nextProps.changed !== this.props.changed||
    //         nextProps.clicked !== this.props.clicked){
    //         return true;
    //       } else {
    //         return false;
    //       }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('[Persons.js] componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('[App.js] componentWillMount')
      }
      
    render() {
        console.log('[Persons.js] persons is rendering')
        return(
     
     
       this.props.persons.map((person , index) => {
            return <Person 
            key = {person.id}
            click = {this.props.clicked.bind(this,index)}
            name = {person.name}
            age = {person.age}
       
            change = {(event) => this.props.changed(event , person.id)}/>
       
          })
           
    )}
}
    

    
export default Persons;