import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence, animate } from "framer-motion";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          className="base-page-size"
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {

            },
          }}>
        <Navbar />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
