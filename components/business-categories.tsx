import { Laptop, Smartphone, Cloud, Shield, ArrowRight, MapIcon } from "lucide-react"
import "@/app/css/style.css";
import { Card, CardContent } from "./ui/card";

export default function BusinessCategories() {
  const features = [
    {
      icon: "search.mov",
      title: "Search for foundational papers",
      description: "Quickly discover seminal papers in your field, seamlessly integrated with Semantic Scholar to provide you with a variety of literature searching options.",
    },
    {
      icon: "hexle2.mp4",
      title: "Use integrated tools while reading articles",
      description: "Dot down questions, annotations and notes using our built-in editor, enhancing your quality of research and creating meaningful analysis of research articles",
    },
  ]

  const featureImages = [
    {
      icon: "images/cite.png",
      title: "Smart assistant and citations",
      description: "Leverage fast AI insights that answer your questions and breaks down complex sections, along with seamless citation management to streamline your research process.",
    },
    {
      icon: "images/save.png",
      title: "Build your research library",
      description: "Save articles for later and organize them into a personalized library, creating a curated collection of research at your fingertips.",
    }
  ]

  return (
    <div className="">
      <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-blue-950">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/payloadsystem.jpg?height=1080&width=1920')`
        }}
      />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              How We Are Approaching It
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              The HIRO-LAB payload aboard the ispace lunar mission represents a breakthrough 
              in space pharmaceutical research, combining cutting-edge technology with 
              practical medical applications.
            </p>

            <div className="pt-4">
              <a href="#learn-more" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                Learn more about our mission
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Mission Objectives */}
          <div className="grid gap-6">
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Radiation Effect Analysis</h3>
                </div>
                <p className="text-gray-300">
                  Measure the radiation effect on pharmaceutical integrity, with a 
                  specific focus on pure ibuprofen during lunar transit and surface operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                    <MapIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Radiation Mapping</h3>
                </div>
                <p className="text-gray-300">
                  Create comprehensive radiation intensity maps for both the lunar 
                  transit path and the Moon's surface environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="relative">
        <img src="images/payloadsystem.jpg" 
        className="p-0 object-cover h-screen w-screen text-primary brightness-[35%]"/>
        <div className="absolute top-1/4 w-2/5 left-10 transform p-12 rounded-lg text-white slide-in
        space-y-8 bg-zinc-900 shadow-2xl p-4 rounded-xl opacity-90">
          <h2 className="text-4xl font-bold">How We Are Approaching It</h2>
          <p className="text-muted-foreground text-justify text-lg">To demonstrate the HIRO-LAB payload on board ispace lunar lander and rover to (1) measure the radiation effect on the integrity of pharmaceuticals, particularly pure ibuprofen, and (2) map the radiation intensity on the way to the moon and of the Moon surface.</p>
        </div>
      </div>
      <div className="relative">
        <img src="images/payloadsystem.jpg" 
        className="p-0 object-cover h-screen w-screen text-primary brightness-[35%]"/>
        <div className="absolute top-1/4 w-2/5 left-10 transform p-12 rounded-lg text-white slide-in
        space-y-8 bg-zinc-900 shadow-2xl p-4 rounded-xl opacity-90">
          <h2 className="text-4xl font-bold">How We Are Approaching It</h2>
          <p className="text-muted-foreground text-justify text-lg">To demonstrate the HIRO-LAB payload on board ispace lunar lander and rover to (1) measure the radiation effect on the integrity of pharmaceuticals, particularly pure ibuprofen, and (2) map the radiation intensity on the way to the moon and of the Moon surface.</p>
        </div>
      </div> */}
      {/* <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
              <video src={feature.icon} className="h-64 text-primary rounded-2xl shadow-2xl" autoPlay muted loop playsInline/>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left px-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
        {featureImages.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
              <img src={feature.icon} className="h-64 text-primary"/>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left px-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}