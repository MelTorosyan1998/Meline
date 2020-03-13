import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact.js';
class App extends Component {
	foo(){
  return <h2>Contacts</h2>
};
render() {
	const a = [
	{name:'Meline',surname:'Torosyan', img:'https://lh3.googleusercontent.com/proxy/UNYbuUpxbdvtCF9XVJ8ayu6VZZzmCu2NaSfcSyM0PeBrGlK56ASZmEJwRTK3eJQEs4dELceFMgzHXxjD2h-azEBc8bvTF27RJsnpW7H-0dpwGK10FrNn6mnmClGQHSxv0r-oYF2ADw', mail:'meltorosyan1@mail.ru', tel:'+37498384064'}
	
	];
  return (
    <div className="App">
	<div className="contacts">
	{a.map(i => <Contact img={i.img} name={i.name} surname={i.surname} mail={i.mail} tel={i.tel} key={i.name} />)}
	</div>
    </div>
	
  );
}
}

export default App;