import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";
import { Rounded, Tags } from "@/components";

export default function Hero() {
	const str = [
		{
			id: 1,
			title: "All",
			href: "/",
		},
		{
			id: 2,
			title: "IG Reels",
			href: "/",
		},
		{
			id: 3,
			title: "Blogs",
			href: "/",
		},
	];
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								INSIGHTS
							</h1>
						</div>
					</div>
					
					
				</div>
			</div>
		</section>
	);
}
