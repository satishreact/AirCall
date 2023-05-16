import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import List from './List.jsx';

let initialdata = [
  {number: 999999991, details:'hello call'},
  {number: 999999992, details:'hello call'},
  {number: 999999993, details:'hello call'},
  {number: 999999994, details:'hello call'},
  {number: 999999995, details:'hello call'},
  {number: 999999996, details:'hello call'},
  {number: 999999997, details:'hello call'},
  {number: 999999998, details:'hello call'},
  {number: 999999999, details:'hello call'},
  {number: 999999990, details:'hello call'},

];

const App = () => {
  const [resultdata, setResultData] = useState(initialdata)

  const archieveAll = () => {
    setResultData([])
  }
  const unarchieveAll = () => {
    setResultData([...initialdata])
  }

  return (
    <div className='container'>
      <Header/>
      <button className="container-view" onClick={archieveAll}>Archiev all calls</button>
      <button className="container-view" onClick={unarchieveAll}>UnArchiev all calls</button>
      <List data={resultdata} />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
