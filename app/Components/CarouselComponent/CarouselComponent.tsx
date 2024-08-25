import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ResponsiveCarouselProps } from "types/types";
import '../../Style/carouselcomponent.scss';


const ResponsiveCarousel:React.FC<ResponsiveCarouselProps> = ({items}) => {
  const [active, setActive] = useState(0);
  const n = items.length;
  const updateActive = (option:number) => {
    const update = option%n;
    setActive(update);
  }

  useEffect(() => {
    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if(active > 0 && active < (n-1)) {
        if (touchendX < touchstartX ) updateActive(active-1); 
        if  (touchendX > touchstartX ) updateActive(active+1);
      }
    }

    document.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })
  }, [updateActive,active,n]);

  return (
    <div className="carousel-component-container">
      <button className="prev-button" onClick={() => updateActive(active-1)} disabled={active == 0}/>
      <button className="next-button" onClick={() => updateActive(active+1)} disabled={active == (n-1)}/>
      <div className="carousel-container">
        {items.map((item,index) => (
          <div key={index} className={`content-container ${active == index? 'active' : 'move-left'}`}> 
           {item.title && <h2>{item.title}</h2>}
           <Image src={item.imageUrl as string} alt=""/>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {items.map((item, index) => (<i key={index} className={`${active == index ? 'active':''} dot ${index}`} onClick={() => updateActive(index)}/>))}
      </div>
    </div>
  );
}

export default ResponsiveCarousel;