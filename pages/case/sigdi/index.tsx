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
import { workiz, workizhero,B2, B1, B3, B4, B5, B6, S1,S2,S3,S4,S5,S6,S7 } from "@/public";
import { Curve, Ready } from "@/components";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Challenge from "@/components/Chelenge";
import Results from "@/components/Result";
import Credits from "@/components/Credit";
import { title } from "process";


const content = {
	title: "Sigdi Restaurant",
	description: "Sigdi is a popular restaurant located in Vijayapura, Karnataka, known for its authentic flavors and warm dining experience. The restaurant offers a range of North Indian and Tandoori dishes, served in a cozy, family-friendly setting.",
	services: [
		"Website Design & Development",
		"Menu Showcase",
		"Location & Contact Integration",
		"Mobile Optimization",
	],
	about: "Sigdi has been a go-to destination for food lovers in Kalaburagi, offering a curated selection of traditional Indian cuisine. The restaurant blends quality, hospitality, and taste—making it a favorite spot for families, friends, and foodies alike.",
	industry: "Food & Beverage / Hospitality",
	companySize: "10-20",
	challenge: "The challenge was to create a clean and informative website that reflects the restaurant's identity and provides essential information like menu, location, and contact details—especially for new customers searching online.",
	result: "We built a simple, visually pleasing landing-page style website that displays all key details: about the restaurant, menu highlights, Google Maps location, contact info, and operating hours. It works well across devices and helps customers easily find and connect with Sigdi.",
	feedback: "The team at Sigdi appreciated the straightforward and elegant design. The website helped them strengthen their digital presence and made it easier for new customers to discover the restaurant online.",
	client: "Sigdi Restaurant",
	service: 
	"Website Design & Development, Menu Showcase, Location & Contact Integration, Mobile Optimization",
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
				<Hero title={content.title} description={content.description} services={content.services} imageSrc={S1} bgImage={S2}/>
				<About about={content.about} industry={content.industry} companySize={content.companySize} imageSrc={S3}></About>
				<Challenge service={content.service} imageSrc={{img1: S2, img2: S3, img3: S4, img4: S7, img5: S5, img6: S2}}></Challenge>
				<Results result={content.result} feedback={content.feedback} />
				<Credits client={content.client} services={content.service} />
			</Curve>
		</>
	);
}
