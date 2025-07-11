import Image, { StaticImageData } from "next/image";
import {
	after,
	chelengeBg,
	showcase1,
	showcase2,
	showcase3,
	showcase4,
	showcase5,
	showcase6,
} from "@/public";
import { BackgroundImg } from "@/components";
import { stat } from "fs";

type ImagesObject = {
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  img4: StaticImageData;
  img5: StaticImageData;
  img6: StaticImageData;
};

type ChallengeProps = {
  service: string;
  imageSrc: ImagesObject;
};

export default function Challenge({ service, imageSrc }: ChallengeProps) {
	return (
		<section className="w-full pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
			<div className="w-full flex flex-col">
				<h2 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry border-b pb-[50px] border-[#21212155]">
					Challenge & Solution
				</h2>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[15px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Services we provided:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full">
							<div className="flex flex-col gap-y-[20px]">
								<p className="paragraph font-NeueMontreal text-secondry">
									{service}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full padding-x padding-y">
				<BackgroundImg src={imageSrc.img1} />
			</div>

			<div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
				<div className="w-[49%] sm:w-full xm:w-full">
					<Image
						src={imageSrc.img2}
						className="w-full object-cover rounded-[20px]"
						alt="showcase 1"
					/>
				</div>
				<div className="w-[49%] sm:w-full xm:w-full">
					<Image
						src={imageSrc.img3}
						className="w-full object-cover rounded-[20px]"
						alt="showcase 2"
					/>
				</div>
			</div>

			<div className="w-full padding-x padding-y">
				<BackgroundImg src={imageSrc.img4} />
			</div>

			<div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
				<div className="w-[49%] sm:w-full xm:w-full">
					<Image
						src={imageSrc.img5}
						className="w-full object-cover rounded-[20px]"
						alt="showcase 3"
					/>
				</div>
				<div className="w-[49%] sm:w-full xm:w-full">
					<Image
						src={imageSrc.img6}
						className="w-full object-cover rounded-[20px]"
						alt="showcase 4"
					/>
				</div>
			</div>

			<div className="w-full padding-x padding-y">
				<BackgroundImg src={imageSrc.img6} />
			</div>

			<div className="w-[80%] sm:w-full xm:w-full mx-auto padding-x flex gap-[20px]">
				<div className="w-full">
					<Image
						src={imageSrc.img1}
						className="w-full object-cover rounded-[20px]"
						alt="After"
					/>
				</div>
			</div>
		</section>
	);
}
