import { FC } from "react";

export interface FooterNavProps {
	nav: string[];
};

const FooterNav: FC<FooterNavProps> = ({ nav }) => {
	return (
		<div>
			<div className="container mx-auto p-10">
				<div className="justify-center bg-shades-black flex w-full font-normal leading-4	font-sans tracking-[.16em] px-16 m-auto h-[72px] items-center text-shades-white flex-col sm:flex-row">
					{nav.map((item, index) => (
						<div key={index} className="cursor-pointer m-4">
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default FooterNav;
