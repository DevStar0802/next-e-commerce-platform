import { FC } from "react";

export interface TotalQuantityProps {
  title: string;
  value: number;
}

export const TotalQuantity: FC<TotalQuantityProps> = ({ title, value }) => (
  <div className="text-center">
    <div className="text-normal font-normal	text-shades-black leading-[48px] tracking-[0.06em]">
      {value}
    </div>
    <div className="text-sm font-light text-neutral-600 leading-6 tracking-[0.06em]">
      {title}
    </div>      
  </div>
);
