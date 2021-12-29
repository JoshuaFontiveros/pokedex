import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Pokemon = props => {
  const [stats, setStats] = useState([]);

  /* Use effect can implement
    1. componentDidMount
    2. componentDidUpdate
    3. componentWillUnmount
  */

  // componentDidMount - missing dependency
  useEffect(() => {
    axios.get(props.url).then(newData => {
      setStats(newData.data.stats);
    });
  }, []); /* missing dependency */

  // componentDidUpdate - with dependency
  useEffect(() => {
    console.log(`Display Pokemons with stats`);
  }, [stats]);

  // componentWillUnmount - missing dependency
  useEffect(() => {
    return () => {
      console.log(`Hiding Pokemon and its stats`);
    };
  }, []); /* missing dependency */

  return (
    <div className='pokemon-container'>
      <div className='pokemon-header d-flex flex-row'>
        <h3>{props.name}</h3>
      </div>
      <div className='pokemon-data'>
        {stats.length > 0 &&
          stats.map(pokedata => {
            return (
              <div>
                <h4> {pokedata.stat.name} </h4>
                <p>Base Stat: {pokedata.base_stat} </p>
                <p>Effort: {pokedata.effort} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
// class Pokemon extends Component {
//     constructor(props){
//         super(props);
//         this.state = {data: {}, stats: [] };
//     }
//         componentDidMount(){
//         /* Debug if there is an error */
//          axios.get(this.props.url).then(newData => {
//             this.setState( {stats: newData.data.stats});
//         });
//     }
//     render() {
//         return (
//             <div className="pokemon-container">
//                 <div className="pokemon-header d-flex flex-row">
//                     <h3>{this.props.name }</h3>
//                 </div>
//                  <div className="pokemon-data">

//                    {
//                             this.state.stats.length > 0 && this.state.stats.map( pokedata => {
//                             return (
//                                 <>
//                                     <h4> {pokedata.stat.name}; </h4>
//                                     <p>Base Stat: {pokedata.base_stat}; </p>
//                                     <p>Effort: {pokedata.effort}; </p>
//                                 </>
//                             )
//                         })
//                     };
//                 </div>
//             </div>
//         )
//     }
// }

export default Pokemon;
