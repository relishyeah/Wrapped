import './styles.css'

type textCardProps={
  explicit?:(string|number)[];
  topArtist?:(string|number)[];
  topAlbum?:(string|number)[];
}


export const TextCard = (props:textCardProps) => {

  const swear =<svg width="15vh" height="10vh" viewBox="0 0 205 107" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M79.0145 84.0548H78.7401L78.4722 84.1143C68.7806 86.268 51.5445 87.659 36.7839 84.1236C29.4198 82.3597 22.8687 79.4162 18.1496 74.9209C13.4965 70.4885 10.4787 64.4148 10.3301 56.0032C10.0382 39.4805 23.6896 26.9608 42.7171 18.0202C61.5565 9.16799 84.6289 4.3561 100.913 2.82707C116.935 1.3226 142.336 4.99295 163.775 14.08C185.388 23.241 201.787 37.3524 202.082 56.0867C202.228 65.3848 198.485 71.5796 191.929 75.8849C185.18 80.3172 175.331 82.8093 163.297 84.0684C151.316 85.3219 137.489 85.3263 122.988 85.0087C118.246 84.9049 113.427 84.7664 108.583 84.6272C98.6784 84.3424 88.6709 84.0548 79.0145 84.0548Z" stroke="#DADBDD" strokeWidth="5"/>
  <path d="M172.666 83.5505L170.04 97.6031L164.208 84.5512L172.666 83.5505Z" fill="#D9D9D9" stroke="#DADBDD" strokeWidth="5"/>
  <path d="M4.44792 65.3321C6.41952 71.1662 12.3634 80.3648 19.4376 83.4598" stroke="#DADBDD" strokeWidth="3" strokeLinejoin="round" />
  <path d="M2.23795 71.5222C3.76312 75.3432 8.95259 83.5805 13.6205 86.2459" stroke="#DADBDD" strokeWidth="3" />
  <path d="M82.068 28.645C82.265 35.6227 82.8227 52.8284 83.2123 61.796" stroke="#DADBDD" strokeWidth="3" />
  <path d="M106.376 34.483C99.0801 35.3927 81.1021 37.7521 71.75 39.1414" stroke="#DADBDD" strokeWidth="3" />
  <path d="M106.42 47.7472C99.1156 48.584 81.115 50.7634 71.7494 52.0591" stroke="#DADBDD" strokeWidth="3" />
  <path d="M95.7186 27.3084C95.8866 34.336 96.4179 51.6631 96.8554 60.6918" stroke="#DADBDD" strokeWidth="3" />
  <path d="M169.424 34.0099C165.931 39.2965 157.429 52.4075 153.154 59.3439" stroke="#DADBDD" strokeWidth="3" />
  <path d="M129.508 34.3725C129.509 39.2172 129.76 51.1563 130.232 57.3693" stroke="#DADBDD" strokeWidth="3" />
  <path d="M136.378 35.5529C134.331 40.139 127.896 50.3678 122.632 54.2155" stroke="#DADBDD" strokeWidth="3" />
  <path d="M121.698 36.0251C124.714 40.4502 132.767 50.8434 137.813 55.548" stroke="#DADBDD" strokeWidth="3" />
  <path d="M139.039 46.8557C135.308 46.2986 126.092 45.6266 121.266 46.2404" stroke="#DADBDD" strokeWidth="3" />
  <path d="M186.491 19.2338C182.715 14.3689 174.083 7.6283 166.385 7.02445" stroke="#DADBDD" strokeWidth="3" strokeLinejoin="round" />
  <path d="M186.549 12.6614C183.855 9.55189 176.251 3.47203 170.967 2.48486" stroke="#DADBDD" strokeWidth="3" />
  <path d="M62.0149 61.4058C53.1268 66.356 33.3496 77.4167 36.4388 61.4058C38.0634 52.9853 42.0732 46.5311 48.7792 41.0854C52.0717 38.4117 52.5139 33.2846 49.2268 30.6043V30.6043V30.6043C44.0883 27.3885 37.9088 32.8129 40.4314 38.3249L56.0293 72.4063" stroke="#DADBDD" strokeWidth="3.5" strokeLinejoin="bevel" />
  <circle cx="158.401" cy="35.2668" r="3.42137" stroke="#DADBDD" strokeWidth="2"/>
  <circle cx="163.706" cy="57.3738" r="3.42137" stroke="#DADBDD" strokeWidth="2"/>
  </svg>
  
  const handleProps = (type:any,props:(string|number)[]) =>{

    return <>
      <div className="leftSide">
        <div className='largeText'>
          {type==='explicit' && props[1]+'%'} 
          {type==='topArtist' && props[1]} 
        </div>
        {type==='explicit' && swear}
      </div>
      <div className="sideText">
        {type==='explicit' && 'of your Top Songs in '+ props[0] + ' were explicit, your angriest year'}
        {type==='topArtist' && 'unique songs by '+ props[0] + ", ain't that sweet"}
      </div>

    </>
    };
  

  
  return (
    <div className='yearsContainer'>
    <div className="textContainer">
      {props.explicit &&handleProps('explicit',props.explicit)} 
      {props.topArtist &&handleProps('topArtist',props.topArtist)}
      </div>

    </div>
    
  )
}
