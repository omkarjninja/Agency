import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
			<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">  
    Two core principles that guide us  
    <br className="sm:hidden xm:hidden" /> in every project we create:  
</h1>

			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
						<p className="paragraph font-NeueMontreal text-secondry">  
    Whether a website needs to engage or  
    <br /> convert, it must always leave a lasting  
    <br /> impression. We dive deep into insights  
    <br /> to craft digital experiences that truly  
    <br /> captivate and inspire.  
</p>

						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
						<p className="paragraph font-NeueMontreal text-secondry">  
    A website reveals what’s hidden,  
    <br /> showcases the unseen, and brings ideas to life.  
    <br /> We use design to capture attention,  
    <br /> guide focus, and make every message  
    <br /> unforgettable.  
</p>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
