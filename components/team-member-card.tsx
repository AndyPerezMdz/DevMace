import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

interface SocialLinks {
  email: string
  github: string
  linkedin: string
  twitter: string
}

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  socialLinks: SocialLinks
}

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#233567]/10 to-[#3a5ca9]/5 dark:from-[#233567]/20 dark:to-[#3a5ca9]/10">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover object-center" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
        <p className="text-[#233567] dark:text-blue-400 font-medium mb-4">{member.role}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{member.bio}</p>

        <div className="flex space-x-4">
          <a
            href={`mailto:${member.socialLinks.email}`}
            className="text-gray-500 hover:text-[#233567] dark:hover:text-blue-400 transition-colors"
            aria-label={`Email a ${member.name}`}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={member.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#233567] dark:hover:text-blue-400 transition-colors"
            aria-label={`GitHub de ${member.name}`}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#233567] dark:hover:text-blue-400 transition-colors"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

