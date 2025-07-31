import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, RefreshCw, Shield, TrendingUp, BarChart, CheckCircle, Briefcase, Settings, FlaskConical } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Head>
        <title>Resonant Intel - Enterprise AI for Critical Business Decisions</title>
        <meta name="description" content="Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80% while maintaining enterprise security and compliance." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.resonantintel.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.resonantintel.com/" />
        <meta property="og:title" content="Resonant Intel - Enterprise AI That Accelerates Critical Business Decisions" />
        <meta property="og:description" content="Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80%." />
        <meta property="og:image" content="https://www.resonantintel.com/og-image.png" />
        <meta property="og:site_name" content="Resonant Intel" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.resonantintel.com/" />
        <meta name="twitter:title" content="Resonant Intel - Enterprise AI That Accelerates Critical Business Decisions" />
        <meta name="twitter:description" content="Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80%." />
        <meta name="twitter:image" content="https://www.resonantintel.com/og-image.png" />
      </Head>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <section className="relative text-center py-20 sm:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-8">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format"
              alt="Professional data analyst working with business intelligence dashboards and multiple monitors"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Enterprise AI That Accelerates Critical Business Decisions
            </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80% while maintaining enterprise security and compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request" passHref>
              <Button size="lg">Request a Demo</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button size="lg" variant="outline">Contact Sales</Button>
            </Link>
          </div>
          </div>
        </section>

        {/* Value Proposition Block */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">Accelerated Decision Intelligence</h3>
              <p className="text-muted-foreground">
                AI-powered signal processing converts raw feedback into executive-ready insights in minutes, not weeks.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <RefreshCw className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">Complete Ideation-to-Action Pipeline</h3>
              <p className="text-muted-foreground">
                Signal captures input, Solution prioritizes by impact, and orchestrated agents execute follow-through automatically.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">Enterprise-Grade Security & Compliance</h3>
              <p className="text-muted-foreground">
                SOC 2 compliant architecture with on-premises deployment options and granular access controls.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <TrendingUp className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">Seamless Integration at Scale</h3>
              <p className="text-muted-foreground">
                Native integration with Claude, Codex, and immersive AVP environments across unlimited enterprise users.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Snapshots */}
        <section className="relative py-20 sm:py-24 bg-muted -mx-4 px-4 overflow-hidden">
            {/* Dashboard Background Image */}
            <div className="absolute left-0 top-1/3 w-1/4 h-1/2 opacity-15">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
                alt="Business analytics dashboard displaying data visualization and performance metrics"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="relative container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">A Platform for Transformation</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <Card className="transition-transform duration-300 ease-in-out hover:scale-105">
                        <CardHeader>
                            <CardTitle>Signal Enterprise Platform</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Process 10,000+ feedback points in real-time with automated pattern recognition.</p>
                            <p className="font-semibold text-primary">Benefit: Reduce manual review cycles by 70%</p>
                        </CardContent>
                    </Card>
                    <Card className="transition-transform duration-300 ease-in-out hover:scale-105">
                        <CardHeader>
                            <CardTitle>Solution Workflow Dashboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Executive command center for prioritizing high-impact initiatives and tracking implementation.</p>
                            <p className="font-semibold text-primary">Benefit: Increase strategic response rates to 85%</p>
                        </CardContent>
                    </Card>
                    <Card className="transition-transform duration-300 ease-in-out hover:scale-105">
                        <CardHeader>
                            <CardTitle>Agentic System Orchestrator</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Multi-agent coordination platform that automates complex enterprise workflows end-to-end.</p>
                            <p className="font-semibold text-primary">Benefit: Cut operational overhead by 60%</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Use Case Examples */}
        <section className="py-20 sm:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Built for High-Impact Teams</h2>
          <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <Briefcase className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">Corporate Strategy Teams</h3>
              <p className="text-muted-foreground">Aggregate product feedback, customer insights, and market intelligence into prioritized action items for executive review.</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Settings className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">Enterprise Operations</h3>
              <p className="text-muted-foreground">Process thousands of support tickets, employee feedback, and operational data to identify systemic improvements.</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <FlaskConical className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary">R&D Innovation Labs</h3>
              <p className="text-muted-foreground">AVP-powered collaborative spaces where distributed teams can visualize complex data relationships and iterate solutions.</p>
            </div>
          </div>
        </section>

        {/* ROI Bullets */}
        <section className="py-20 sm:py-24">
            <div className="max-w-4xl mx-auto">

                <div className="flex items-center justify-center mb-16">
                    <BarChart className="w-12 h-12 mr-4 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold">Proven Enterprise Impact</h2>
                </div>
                <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                    <div className="flex items-start"><CheckCircle className="w-7 h-7 mr-4 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">70% faster review cycles</span><span className="text-muted-foreground"> - Automated triage and categorization eliminate manual bottlenecks.</span></div></div>
                    <div className="flex items-start"><CheckCircle className="w-7 h-7 mr-4 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">85% response rate improvement</span><span className="text-muted-foreground"> - AI-driven prioritization ensures critical issues receive immediate attention.</span></div></div>
                    <div className="flex items-start"><CheckCircle className="w-7 h-7 mr-4 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">60% reduction in support costs</span><span className="text-muted-foreground"> - Intelligent routing and automated resolution for routine inquiries.</span></div></div>
                    <div className="flex items-start"><CheckCircle className="w-7 h-7 mr-4 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">3x faster time-to-market</span><span className="text-muted-foreground"> - Streamlined feedback integration accelerates product development cycles.</span></div></div>
                    <div className="flex items-start"><CheckCircle className="w-7 h-7 mr-4 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">90% accuracy in pattern detection</span><span className="text-muted-foreground"> - Advanced signal processing identifies trends human analysts miss.</span></div></div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer CTA */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
                <Link href="/request" passHref>
                  <Button size="lg">Request a Demo</Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-8">Trusted Technology Platform</p>
                <p className="text-xs text-muted-foreground">Powered by Dreamplanet LLC • Enterprise-grade security • SOC 2 compliant</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
