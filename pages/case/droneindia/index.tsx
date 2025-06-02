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
import { workiz, workizhero,B2, B1, B3, B4, B5, B6 ,D1,D2,D3,D4,D5,D6,D7 } from "@/public";
import { Curve, Ready } from "@/components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Chelenge";
import Results from "@/components/Result";
import Credits from "@/components/Credit";
import { title } from "process";


const content = {
	title: "The Drone India",
	description: "The Drone India is an emerging startup focused on making drone technology accessible through an innovative rental platform. The service enables individuals and businesses to rent drones for various purposes such as events, photography, agriculture, and surveying.",
	services: [
		"Branding & Identity Design",
		"Startup Website Development",
		"Rental Platform UI/UX",
		"Go-to-Market Strategy",
	],
	about: "The Drone India is a drone rental startup aiming to simplify access to high-quality drones for creators, farmers, event organizers, and surveyors. With a vision to democratize drone usage across India, they provide a flexible and affordable rental model, supported by expert guidance.",
	industry: "Technology / Drone Rental / Startup",
	companySize: "1-5",
	challenge: "The challenge was to create a sleek and trustworthy brand identity and platform for a new concept in the Indian market—drone rentals. The startup needed to communicate value clearly, build user trust, and allow for easy booking and service exploration.",
	result: "We developed a minimal and bold brand identity along with a streamlined website that introduces the rental model, highlights use-cases, and includes simple inquiry forms. The platform helped The Drone India validate their idea and start building early traction among target users.",
	feedback: "As a young startup, the founders of The Drone India were thrilled with the outcome. The branding gave them confidence to pitch their concept, and the website helped them begin collecting leads and building credibility in the niche drone rental space.",
	client: "The Drone India",
	service: 
	"Branding & Identity Design, Startup Website Development, Rental Platform UI/UX, Go-to-Market Strategy",
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
				<Hero title={content.title} description={content.description} services={content.services} imageSrc={D7} bgImage={D2}/>
				<About about={content.about} industry={content.industry} companySize={content.companySize} imageSrc={D5}></About>
				<Challenge service={content.service} imageSrc={{img1: D1, img2: D2, img3: D3, img4: D4, img5: D5, img6: D6}}></Challenge>
				<Results result={content.result} feedback={content.feedback} />
				<Credits client={content.client} services={content.service} />
			</Curve>
		</>
	);
}
