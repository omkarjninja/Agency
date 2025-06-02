"use client";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";
import { useEffect } from "react";
import { workiz, workizhero,B2, B1, B3, B4, B5, B6, H1,H2,H3,H4,H5,H6,H7 } from "@/public";
import { Curve, Ready } from "@/components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Chelenge";
import Results from "@/components/Result";
import Credits from "@/components/Credit";
import { title } from "process";


const content = {
	title: "Heroca Restaurant",
	description: "Heroca is a quaint, locally loved restaurant that focuses on creating a timeless dining experience. The brand carries a classic aesthetic, and the website was designed to reflect that refined yet minimal vibe.",
	services: [
		"Minimal Website Design",
		"Classic Brand Styling",
		"Responsive Frontend Development",
	],
	about: "Heroca is a small, charming restaurant that offers a classic, cozy dining atmosphere. With a focus on quality and simplicity, the brand needed a website that conveyed elegance and warmth without overwhelming users.",
	industry: "Food & Beverage / Boutique Restaurant",
	companySize: "5-10",
	challenge: "The goal was to create a minimal and aesthetically pleasing website with just three essential pages—Home, About, and Contact. The website needed to reflect the brand’s classic theme and serve as a digital presence with refined typography and layout.",
	result: "We delivered a beautifully designed, responsive three-page website that captured Heroca's classic identity. With elegant fonts, soft color tones, and simple navigation, the site gives users a smooth experience and leaves a lasting impression.",
	feedback: "The client loved the artistic and clean execution. The design matched their brand vision perfectly, and the site served as a proud digital representation of the restaurant's identity.",
	client: "Heroca Restaurant",
	service: 
	"Minimal Website Design, Classic Brand Styling, Responsive Frontend Development",
};




export default function Work() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Hero title={content.title} description={content.description} services={content.services} imageSrc={H7} bgImage={H2}/>
				<About about={content.about} industry={content.industry} companySize={content.companySize} imageSrc={H1}></About>
				<Challenge service={content.service} imageSrc={{img1: H2, img2: H3, img3: H4, img4: H4, img5: H5, img6: H6}}></Challenge>
				<Results result={content.result} feedback={content.feedback} />
				<Credits client={content.client} services={content.service} />
			</Curve>
		</>
	);
}
