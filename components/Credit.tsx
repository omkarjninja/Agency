type CreditProps = {
client: string;
services: string;
};


export default function Credits({client, services}: CreditProps) {
	return (
		<section className="w-full pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
			<div className="w-full flex flex-col">
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					Credit
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[15px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Services we provided:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
							<div className="flex flex-col gap-[10px]">
								<div className="flex flex-col">
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Client:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										{client}
									</p>
								</div>
								<div className="flex flex-col">
									<p className="paragraph font-NeueMontreal text-secondry underline">
										Services Provided:
									</p>
									<p className="paragraph font-NeueMontreal text-secondry">
										{services}
									</p>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
