import { animation } from "@/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

type AnimatedLinkItem = {
  text: string;
  href: string;
};

export default function AnimatedLinks({ children }: { children: AnimatedLinkItem[] }) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const router = useRouter();

  const handleRedirect = (url: string) => {
    // if it's external (starts with http), use window.open
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // otherwise use Next.js router
      router.push(url);
    }
  };

  return (
    <div ref={ref}>
      {children.map((item, index) => (
        <div key={index} className="overflow-hidden text-[277px] leading-[207px] lg:text-[230px] lg:leading-[170px] md:text-[150px] md:leading-[100px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] text-center font-bold font-FoundersGrotesk text-secondry uppercase">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "visible" : ""}
            onClick={() => handleRedirect(item.href)}
            className="cursor-pointer hover:underline transition-colors duration-300"
          >
            {item.text}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
