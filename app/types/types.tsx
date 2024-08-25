import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement } from "react";

export interface ModalComponentProps {
    modalContent?: ReactElement;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
}

export interface timelineContent {
    isLeft: boolean;
    data: {
      title: string,
      date: string,
    }
}

export interface ModalContentProps {
    modalComponent: ReactElement;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CardComponentProps { 
    header?: string; 
    cardName?: string; 
    description?: string; 
    link?: string; 
    ctaText?: string; 
    imageSrc?: StaticImport | string;
}

export interface BlogProps {
    url: string;
    title: string;
    description: string;
}
  
export interface BlogPageProps {    
    staticData: BlogProps[];
}

    
export interface item {
    imageUrl?: string | StaticImport;
    title?: string;
    description: string;
    id?: number;
    date?: string;
}


export interface ResponsiveCarouselProps {
    items: item[];
}