import { motion } from "framer-motion";

export default function HomeVideo() {
  return (
    <section className="relative h-[80dvh] overflow-hidden ">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://dmmfmlu2mykln.cloudfront.net/site/home/bannervideo/banner_image_desktop.webp"
        src="https://dmmfmlu2mykln.cloudfront.net/site/home/bannervideo/banner_video_desktop.mp4"
      />
    </section>
  );
}
