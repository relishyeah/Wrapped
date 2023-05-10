import './styles.css'

type yearsProps={
  years:any;
}

//years [# of years, unique songs %,  Explicit %]
export const Years = (props:yearsProps) => {
  
  let calendars = [];

   for (let i = 0; i < props.years[0]; i++) {
       calendars.push(<svg key={i}width="4.5vh" height="4.5vh" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="7.3291" width="31" height="26.1707" rx="7.5" fill="#D9D9D9" stroke="black" strokeWidth="5"/>
        <rect x="4" y="7" width="28" height="7" fill="black"/>
        <rect x="26.6493" width="5.61039" height="7.02438" fill="black"/>
        <rect x="4.20779" width="5.61039" height="7.02438" fill="black"/>
        </svg>
       );
   }

  
  return (
    <div className='yearsContainer'>
      <div className="facts">
      <div className="smallTextContainer">
      <div className='large'>{props.years[0]}</div>
      <div className="yearsText">{props.years[0] <=1?'year':'years'}, wrapped</div>
    </div>
    <div className="smallTextContainer">
      <div className='large'>{parseFloat(props.years[2]).toFixed(0)+'%'}</div>
      <div className="yearsText"> explicit songs</div>
    </div>
    <div className="smallTextContainer">
      <div className='large'>{props.years[1]}</div>
      <div className="yearsText">unique songs</div>
    </div>
      </div>
    
    <div className="calendars">
      {calendars }
    </div>

    </div>
    
  )
}
