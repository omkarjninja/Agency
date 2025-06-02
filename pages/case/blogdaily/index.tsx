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
import { workiz, workizhero,B2, B1, B3, B4, B5, B6 } from "@/public";
import { Curve, Ready } from "@/components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Chelenge";
import Results from "@/components/Result";
import Credits from "@/components/Credit";
import { title } from "process";


const content={
	title: "Blog Daily",
	description: "Blog Daily is a platform that provides daily updates on various topics, including technology, health, and lifestyle. The platform aims to keep its users informed and engaged with the latest trends and news.",
	services: [
		"Content Creation",
		"SEO Optimization",
		"Social Media Management",
		"Email Marketing",
	],
	about: "Blog Daily is a platform that provides daily updates on various topics, including technology, health, and lifestyle. The platform aims to keep its users informed and engaged with the latest trends and news.",
	industry: "Media",
	companySize: "50-100",
	challenge: "The challenge was to create a user-friendly platform that allows users to easily navigate through various topics and find relevant content. Additionally, the platform needed to be optimized for search engines to increase visibility and attract more visitors.",
	result: "The result was a fully functional platform that provides daily updates on various topics. The platform is user-friendly and optimized for search engines, resulting in increased visibility and traffic.",
	feedback: "The team at Blog Daily was extremely satisfied with the final product. They appreciated the attention to detail and the ability to meet their specific needs. The platform has received positive feedback from users, and the team is excited to continue growing and improving the platform.",
	client: "Blog Daily",
	service: 
	"Content Creation, SEO Optimization, Social Media Management, Email Marketing",
}


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
				<Hero title={content.title} description={content.description} services={content.services} imageSrc={B1} bgImage={B2}/>
				<About about={content.about} industry={content.industry} companySize={content.companySize} imageSrc={B2}></About>
				<Challenge service={content.service} imageSrc={{img1: B1, img2: B2, img3: B3, img4: B4, img5: B5, img6: B6}}></Challenge>
				<Results result={content.result} feedback={content.feedback} />
				<Credits client={content.client} services={content.service} />
			</Curve>
		</>
	);
}
