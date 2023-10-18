const [isShown, setIsshown]= useState(false);
   
 

  return (
    <>
     <nav className='top-nav w-full'>
     <div className='flex'>
      <div className=''>
      <a href=''> <img src='https://cimg.co/p/crypto-news-logo-full.svg' alt='logo'/></a>
        </div>
        <div className='flex ml-4'>
          <button 
          onMouseEnter={()=> setIsshown(true)}
          onMouseOver={()=> setIsshown(false)}>
           <div className='flex' >
             <div className='bold'>
               All
             </div >
              <div className='my-2.5 ml-1 bold '>
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                  <g fill-rule="evenodd">
                   <path d="M0 3.999L12 3.999 12 2.999 0 2.999zM0 7L12 7 12 6 0 6zM0 1L12 1 12 0 0 0z"></path>
                  </g>
                 </svg>
              </div>
           </div>

          </button>
          {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
        
        
        </div>
      </div>
     </nav>
     
     
    </>
  )
}