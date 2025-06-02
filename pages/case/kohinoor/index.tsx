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
import { workiz, workizhero,B2, B1, B3, B4, B5, B6, P1, P2, P3, P4, P5,K1,K2,K3,K4,K5,K6,K7 } from "@/public";
import { Curve, Ready } from "@/components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Chelenge";
import Results from "@/components/Result";
import Credits from "@/components/Credit";
import { title } from "process";


const content = {
	title: "Kohinoor Watches",
	description: "Kohinoor Watches is a trusted retailer in Kalaburagi, Karnataka, specializing in premium and stylish watches for all occasions. With a legacy of quality and customer satisfaction, the store offers a curated selection of both classic and modern timepieces.",
	services: [
		"Website Development",
		"Product Catalog Design",
		"Local SEO Optimization",
		"Brand Identity Enhancement",
	],
	about: "Kohinoor Watches has been serving watch enthusiasts with an impressive collection ranging from affordable daily wear to premium luxury timepieces. Known for reliability and service, the store has built a strong local reputation in Kalaburagi.",
	industry: "Retail / Fashion & Accessories",
	companySize: "5-15",
	challenge: "The main challenge was to create a modern, elegant online presence that reflects the premium nature of the brand while making it easy for customers to explore collections and visit the store. Local search visibility and digital branding were also key goals.",
	result: "We developed a sleek, responsive website with detailed product showcases, brand storytelling, and integrated local SEO. The new digital identity helped Kohinoor Watches increase foot traffic and attract new customers through improved online discoverability.",
	feedback: "Kohinoor Watches appreciated how the website elevated their brand's image. Customers found it easier to browse collections online, and the store reported increased inquiries and local visits within weeks of the launch.",
	client: "Kohinoor Watches",
	service: 
	"Website Development, Product Catalog Design, Local SEO Optimization, Brand Identity Enhancement",
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
				<Hero title={content.title} description={content.description} services={content.services} imageSrc={K1} bgImage={K7}/>
				<About about={content.about} industry={content.industry} companySize={content.companySize} imageSrc={K2}></About>
				<Challenge service={content.service} imageSrc={{img1: K2, img2: K3, img3: K4, img4: K5, img5: K6, img6: K2}}></Challenge>
				<Results result={content.result} feedback={content.feedback} />
				<Credits client={content.client} services={content.service} />
			</Curve>
		</>
	);
}
