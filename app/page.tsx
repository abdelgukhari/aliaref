"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Globe, Ship, Truck, Plane } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const handleEmailClick = () => {
    window.location.href = "mailto:alyareff@gmail.com"
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+971585244845"
  }

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/aly-areff", "_blank")
  }

  const handleViewExperienceClick = () => {
    const experienceSection = document.getElementById("experience-section")
    experienceSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Aly Said Ahmed Aref
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-pretty opacity-90">
                Navigating Global Logistics with Precision
              </p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-80 leading-relaxed">
                Logistics and shipping professional with over 15 years of expertise in managing shipping documents,
                coordinating complex processes, and optimizing workflows across multiple continents.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto" onClick={handleEmailClick}>
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent w-full sm:w-auto"
                  onClick={handleViewExperienceClick}
                >
                  View Complete Experience
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent w-full sm:w-auto"
                  onClick={handleLinkedInClick}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/20">
                <Image
                  src="/images/aly-portrait.jpg"
                  alt="Aly Said Ahmed Aref - Professional Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-card py-4 sm:py-6 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-center sm:text-left">JLT, Dubai, United Arab Emirates</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="text-center sm:text-left">alyareff@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="text-center sm:text-left">+971 58 524 4845</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Globe className="w-4 h-4 flex-shrink-0" />
              <span className="text-center sm:text-left">linkedin.com/in/aly-areff</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">Core Expertise</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive logistics solutions spanning freight forwarding, supply chain optimization, and
              international trade management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ship className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Freight Forwarding</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Sea, air, and road logistics solutions with end-to-end shipment management
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Supply Chain Optimization</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Cross-border logistics coordination and workflow optimization for maximum efficiency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl">International Trade</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Documentation, customs clearance, and regulatory compliance across multiple regions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience-section" className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">Professional Journey</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              15+ years of experience across multiple countries and logistics sectors
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">
                      Overseas Freight Forwarding Pricing & Operations
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      IKRA Logistics MENA
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mb-1">October 2023 – Present | Azerbaijan & UAE</p>
                    <p className="text-xs text-muted-foreground">Turkey-Azerbaijan-Georgia-Iraq-UK-Germany</p>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    Current
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Identified pricing trends across multiple regions to improve profitability</li>
                  <li>• Recommended and executed pricing adjustments based on market conditions</li>
                  <li>• Developed tools to optimize margins and enhance pricing accuracy</li>
                  <li>• Ensured compliance with shipping documentation and regulatory requirements</li>
                  <li>• Managed end-to-end logistics, resolving issues in imports, exports, and transportation</li>
                  <li>• Collaborated with internal departments and external partners to ensure seamless operations</li>
                  <li>• Evaluated customer needs to deliver optimal air, sea, and road logistics solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">
                      Cross Trade Logistics Customer Service & Documentation
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Rakha Al-Khaleej International LLC (POLYDIST Middle East)
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">February 2022 – October 2023 | Dubai, UAE</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Enhanced digitalization of logistics processes for improved efficiency</li>
                  <li>
                    • Managed shipping documentation, including proforma invoices, purchase orders, and delivery notes
                  </li>
                  <li>• Ensured accurate data entry for payment terms, material stock, and shipment statuses</li>
                  <li>• Coordinated shipping processes, including bookings, customs clearance, and delivery</li>
                  <li>• Addressed customer inquiries and solved issues related to international trade agreements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">Event Logistics Project Manager</CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Kingdom of Spain Ministry of Culture (Spanish Pavilion - Expo 2020)
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">August 2021 – February 2022 | Dubai, UAE</p>
                  </div>
                  <Badge variant="outline" className="self-start">
                    Expo 2020
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Executed sea-air freight shipments for materials and supplies</li>
                  <li>• Ensured compliance with municipal and customs requirements</li>
                  <li>• Coordinated daily material movement and reporting using Microsoft Teams</li>
                  <li>• Managed purchasing processes, including supplier contracts and approvals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">Export Customer Service & Documentation</CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Zim Shipping Line
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">November 2019 – January 2021 | Alexandria, Egypt</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Followed the export process from booking to bill of lading delivery</li>
                  <li>• Created invoices for ocean freight, THC, and storage charges</li>
                  <li>• Reviewed shipping declarations for compliance with customs laws and regulations</li>
                  <li>• Submitted cargo manifests to port authorities prior to vessel departure</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">Export Marketing & Supply Chain Executive</CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Alsawary for Artificial Marble Factory
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">September 2018 – October 2019 | Saudi Arabia</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Opened new markets with marble importers worldwide</li>
                  <li>• Oversaw the export process, including production and payment coordination</li>
                  <li>• Prepared packing lists, invoices, and bill of lading documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">Supply Chain Foreign Purchase Executive</CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Hygint Pharmaceutical Innovation
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">May 2015 – August 2018 | Alexandria, Egypt</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Maintained communication between production, planning, and logistics teams</li>
                  <li>• Prepared reports for purchase orders and delivery notes</li>
                  <li>• Ensured timely raw material delivery for production forecasts</li>
                  <li>• Tracked shipments and managed customs clearance processes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">Customer Service & Documentation</CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Evergreen Shipping Line (Gulf Badr Agency)
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">November 2013 – April 2015 | Alexandria, Egypt</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Took bookings for outbound traffic from Alexandria and Ein Sokhna ports</li>
                  <li>• Prepared bills of lading drafts and submitted cargo manifests</li>
                  <li>• Ensured compliance with Egyptian and destination customs regulations</li>
                  <li>• Collaborated with overseas agents to resolve pending issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl mb-2">
                      Head Office Representative (Outbound Traffic)
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-accent mb-1">
                      Evergreen Shipping Line
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">May 2013 – November 2013 | Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Supported sales by attending business meetings and resolving client issues</li>
                  <li>• Represented company interests in Ethiopian market expansion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Supply Chain Optimization",
                  "Freight Forwarding",
                  "Import/Export Management",
                  "Cross-Border Logistics",
                  "Route Planning & Scheduling",
                  "Customs Clearance",
                  "Documentation Management",
                  "Customer Relations",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Languages & Tools</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Arabic (Native)
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      English (Professional)
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Spanish (Good)
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Microsoft Office
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Teams
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Zoom
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Adobe Photoshop
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 text-pretty">
            Let's discuss how my expertise can streamline your supply chain and enhance your global operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto" onClick={handleEmailClick}>
              <Mail className="w-5 h-5" />
              alyareff@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent w-full sm:w-auto"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5" />
              +971 58 524 4845
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-6 sm:py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-sm sm:text-base">&copy; 2025 Aly Said Ahmed Aref. All rights reserved.</p>
          <p className="text-xs sm:text-sm mt-2">
            Bachelor of Commerce (Minor in Accounting) | Alexandria University | Egypt | 2010
          </p>
        </div>
      </footer>
    </div>
  )
}
