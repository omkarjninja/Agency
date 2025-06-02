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
import { workiz, workizhero,B2, B1, B3, B4, B5, B6, P1, P2, P3, P4, P5 } from "@/public";
import { Curve, Ready } from "@/components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Chelenge";
import Results from "@/components/Result";
import Credits from "@/components/Credit";
import { title } from "process";


const content = {
	title: "Parallel Cafe",
	description: "Parallel Cafe is a vibrant space in Kalaburagi, Karnataka, that offers not only great food and coffee but also hosts customized events such as birthday parties, small gatherings, and themed celebrations. It blends a cozy ambience with a lively community vibe.",
	services: [
		"Website Design",
		"Event Promotion",
		"Social Media Management",
		"Branding & Visual Identity",
	],
	about: "Parallel Cafe is more than just a coffee shop. Located in Kalaburagi, it’s a go-to spot for people looking to enjoy quality food and beverages while also celebrating life's moments. From birthdays to Valentine's Day events, the cafe offers a unique and personal touch to every gathering.",
	industry: "Hospitality / Food & Beverage",
	companySize: "10-20",
	challenge: "The challenge was to build a digital presence that reflects the unique atmosphere of the cafe and its event offerings. It needed to attract local audiences, showcase event highlights, and make it easy for customers to discover and book custom events.",
	result: "We delivered a visually rich, easy-to-navigate website that captures the essence of Parallel Cafe. It features event galleries, custom inquiry forms, and social media integration—helping the cafe reach a wider audience and streamline event bookings.",
	feedback: "The team at Parallel Cafe loved how their brand personality was brought to life online. They received an increase in customer inquiries and social engagement soon after launch, and expressed appreciation for the design aesthetics and user-friendly experience.",
	client: "Parallel Cafe",
	service: 
	"Website Design, Event Promotion, Social Media Management, Branding & Visual Identity",
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
				<Hero title={content.title} description={content.description} services={content.services} imageSrc={P1} bgImage={P2}/>
				<About about={content.about} industry={content.industry} companySize={content.companySize} imageSrc={P2}></About>
				<Challenge service={content.service} imageSrc={{img1: P2, img2: P3, img3: P4, img4: P4, img5: P5, img6: P2}}></Challenge>
				<Results result={content.result} feedback={content.feedback} />
				<Credits client={content.client} services={content.service} />
			</Curve>
		</>
	);
}
