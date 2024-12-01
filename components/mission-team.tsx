import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Kaylee Li",
    role: "Co-Founder and CEO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Gordon Carroll",
    role: "Co-Founder and Chief Scientist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "James Blissett",
    role: "CFO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Brooke Mills",
    role: "COO & Project Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Morris Lee",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Brooke Mills",
    role: "COO & Project Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Dillon de Silva",
    role: "Software Specialist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Alexander Chin",
    role: "Data Analyst & Actuarial Specialist",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Anel Kapur",
    role: "Operation Consultant",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sepher Saryazdi",
    role: "R&D Specialist",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function MissionTeam() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Mission Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
                <p className="text-sm text-gray-400 text-center mb-2">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

