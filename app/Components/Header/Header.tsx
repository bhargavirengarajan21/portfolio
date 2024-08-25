"use client"
import React from 'react';
import useMobile from '../../common-hooks/IsMobile';
import Link from 'next/link';
import '../../Style/header.scss';


const Header = ({onClickHandler}:{onClickHandler: React.Dispatch<React.SetStateAction<string>>}) => {
  const {isMobile} = useMobile();
  const headerItems = ['About', 'Projects' ,'Experience', 'Certification', 'Feedback', 'Skills'];
  return(
    <div className={`header ${isMobile ? 'desktop':'mobile'}`}>
        {headerItems.map((items,index) => 
           <Link key={index} className='item' href="" onClick={() => onClickHandler(items)}>{items}</Link>
        )}
    </div>
  );
} 

export default Header;