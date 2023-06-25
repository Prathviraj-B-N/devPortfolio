import { StarsCanvas } from "../components/canvas";
import {Navbar,Hero,About,Tech,Works,Experience,Contact,Footer} from "@/components";
import { datadogLogs } from '@datadog/browser-logs';


export default function Home() {
  datadogLogs.init({
    clientToken: `${process.env.NEXT_PUBLIC_DATADOG_TOKEN}`,
    site: 'us5.datadoghq.com',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100
});
  return (
    <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
  )
}
