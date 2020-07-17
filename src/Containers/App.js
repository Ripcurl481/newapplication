import React ,{Component} from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import AuthContext from '../context/Auth-Context'


class App extends Component {
  constructor(props) {
    console.log('[App.js] constructor rendering')
    super(props);
    this.inputElement = React.createRef(null);
  }
  state = {
    persons:[
      {id:1,name: 'Sandesh' , age: 30},
      {id:2,name: 'Bigyan' ,  age:34},
      {id:3,name: 'Shalik' ,  age:24},
      {id:4,name: 'Sara' ,    age:67}
    ],
    showPerson:false,
    removeToggle:true,
    changeCounter: 0,
    authentication:false
  }
  static getDerivedStateFromProps(){
    console.log('[App.js] getDerivedStateFromProps')
      return null;
  }
  componentDidMount(){
    this.inputElement.current.click();
    console.log('[App.js] componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }
  Handler = () => {
    this.setState({authentication: !this.state.authentication})
  }
  TogglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }
  NamedPersonHandler = (id) => {
   const person = [...this.state.persons];
   person.splice(id , 1);
   this.setState({persons: person})
  }
  PersonchangeHandler = (event, id) => {
    const PersonIndex = this.state.persons.findIndex(value => {
      return value.id === id;
    });
    const person = {...this.state.persons[PersonIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[PersonIndex] = person;

    this.setState((prevState , props) => {
      return{
        persons:persons ,
        changeCounter:prevState.changeCounter + 1
      }
    })
  }
  render() {
    console.log('[App.js] render is rendering')
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <Persons persons = {this.state.persons}
        clicked = {this.NamedPersonHandler}
        changed = {this.PersonchangeHandler}
    
      />
      )}
    return (
      <div className= {classes.App}>
        <button 
        ref = {this.inputElement} 
        onClick={() => {this.setState({removeToggle:!this.state.removeToggle})}}>
          Remove Toggle</button>

        <AuthContext.Provider value = {{
          authentication: this.state.authentication,
          loginHandler:this.Handler
        }}>
        {this.state.removeToggle ?<Cockpit
        title = {this.props.appTitle} 
        personsLength = {this.state.persons.length}
        Handler = {this.TogglePersonHandler}/>:null}
                {persons}
                </AuthContext.Provider>
       </div>
    );
  }
}
export default App;
