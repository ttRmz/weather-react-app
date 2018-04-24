import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div className='weather__infos'>
                { this.props.city && this.props.country && 
                    <p className='weather__key'>
                        Location : <span className='weather__value'>{ this.props.city }, { this.props.country }</span>
                    </p> 
                }
                { this.props.temperature && 
                    <p className='weather__key'>
                        Temperature : <span className='weather__value'>{ this.props.temperature }°C</span>
                    </p>
                }
                { this.props.humidity && 
                    <p className='weather__key'>
                        Humidity : <span className='weather__value'>{ this.props.humidity }%</span>
                    </p> 
                }
                { this.props.description && 
                    <p className='weather__key'>
                        Conditions : <span className='weather__value'>{ this.props.description }</span>
                    </p> 
                }
                { this.props.error && <p className='weather__error'><i>{ this.props.error }</i></p> }
            </div>
        );
    }
};

// const Weather = props => (
//     <div className='weather__infos'>
//         {
//             props.city && props.country && 
//             <p className='weather__key'>
//                 Location : <span className='weather__value'>{ props.city }, { props.country }</span>
//             </p>
//         }
//         {
//             props.temperature && 
//             <p className='weather__key'>
//                 Temperature : <span className='weather__value'>{ props.temperature }</span>
//             </p>
//         }
//         {
//             props.humidity && 
//             <p className='weather__key'>
//                 Humidity : <span className='weather__value'>{ props.humidity }</span>
//             </p>
//         }
//         {
//             props.description && 
//             <p className='weather__key'>
//                 Conditions : <span className='weather__value'>{ props.description }</span>
//             </p>
//         }
//         {
//             props.error && 
//             <p className='weather__error'><i>{ props.error }</i></p>
//         }
//     </div>
// )

export default Weather