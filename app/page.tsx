import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Portfolio</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Creative Developer &<span className="text-primary"> Digital Craftsman</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif mb-8 leading-relaxed">
              I build exceptional digital experiences that combine beautiful design with robust functionality.
              Passionate about creating solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg font-serif leading-relaxed">
                  With over 5 years of experience in web development, I specialize in creating modern, responsive
                  applications using cutting-edge technologies. My passion lies in bridging the gap between design and
                  functionality.
                </p>
                <p className="text-lg font-serif leading-relaxed">
                  I believe in writing clean, maintainable code and creating user experiences that are both intuitive
                  and delightful. Every project is an opportunity to learn something new and push the boundaries of
                  what's possible.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with payment integration and admin dashboard",
                tech: ["Next.js", "Stripe", "PostgreSQL"],
                image: "/modern-ecommerce-interface.png",
              },
              {
                title: "Task Management App",
                description: "Collaborative project management tool with real-time updates",
                tech: ["React", "Socket.io", "MongoDB"],
                image: "/clean-task-management-dashboard.png",
              },
              {
                title: "Portfolio Website",
                description: "Responsive portfolio site with smooth animations and modern design",
                tech: ["Next.js", "Framer Motion", "Tailwind"],
                image: "/elegant-portfolio-website.png",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="font-serif">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Frontend Development", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { icon: Globe, title: "Backend Development", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
              { icon: Palette, title: "UI/UX Design", skills: ["Figma", "Adobe XD", "Prototyping", "User Research"] },
              { icon: Smartphone, title: "Mobile Development", skills: ["React Native", "Flutter", "iOS", "Android"] },
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-sm text-muted-foreground font-serif">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Exceptional work quality and attention to detail. Delivered exactly what we needed on time.",
                author: "Sarah Johnson",
                role: "Product Manager, TechCorp",
              },
              {
                quote: "Professional, creative, and easy to work with. I highly recommend for any web project.",
                author: "Michael Chen",
                role: "CEO, StartupXYZ",
              },
              {
                quote: "Transformed our vision into a beautiful, functional website that exceeded expectations.",
                author: "Emily Davis",
                role: "Marketing Director, GrowthCo",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <blockquote className="text-lg font-serif italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground font-serif mb-12">
              Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can collaborate.
            </p>

            <Card className="text-left">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Project inquiry" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell me about your project..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-muted-foreground">
          <p className="font-serif">© 2024 Portfolio. Crafted with passion and attention to detail.</p>
        </div>
      </footer>
    </div>
  )
}
