import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, RefreshCw, Shield, TrendingUp, BarChart, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Head>
        <title>Resonant Intel - Enterprise AI for Critical Business Decisions</title>
        <meta
          name="description"
          content="Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80% while maintaining enterprise security and compliance."
        />
        <meta name="og:title" content="Resonant Intel - Enterprise AI That Accelerates Critical Business Decisions" />
        <meta name="og:description" content="Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80% while maintaining enterprise security and compliance." />
        <meta name="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <section className="text-center py-20 sm:py-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Enterprise AI That Accelerates Critical Business Decisions
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Transform unstructured feedback into actionable intelligence. Our signal processing platform reduces time-to-insight by 80% while maintaining enterprise security and compliance.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Request a Demo</Button>
            <Button size="lg" variant="outline">Apply Enterprise Access</Button>
          </div>
        </section>

        {/* Value Proposition Block */}
        <section className="py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start">
              <Zap className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Accelerated Decision Intelligence</h3>
              <p className="text-muted-foreground">
                AI-powered signal processing converts raw feedback into executive-ready insights in minutes, not weeks.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <RefreshCw className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Complete Ideation-to-Action Pipeline</h3>
              <p className="text-muted-foreground">
                Signal captures input, Solution prioritizes by impact, and orchestrated agents execute follow-through automatically.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <Shield className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security & Compliance</h3>
              <p className="text-muted-foreground">
                SOC 2 compliant architecture with on-premises deployment options and granular access controls.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <TrendingUp className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Seamless Integration at Scale</h3>
              <p className="text-muted-foreground">
                Native integration with Claude, Codex, and immersive AVP environments across unlimited enterprise users.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Snapshots */}
        <section className="py-16 bg-muted -mx-4 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">A Platform for Transformation</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signal Enterprise Platform</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Process 10,000+ feedback points in real-time with automated pattern recognition.</p>
                            <p className="font-semibold text-primary">Benefit: Reduce manual review cycles by 70%</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Solution Workflow Dashboard</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Executive command center for prioritizing high-impact initiatives and tracking implementation.</p>
                            <p className="font-semibold text-primary">Benefit: Increase strategic response rates to 85%</p>
                        </CardContent>
                    </Card>
                    <Card>
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
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for High-Impact Teams</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-2">Corporate Strategy Teams</h3>
              <p className="text-muted-foreground">Aggregate product feedback, customer insights, and market intelligence into prioritized action items for executive review.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Operations</h3>
              <p className="text-muted-foreground">Process thousands of support tickets, employee feedback, and operational data to identify systemic improvements.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">R&D Innovation Labs</h3>
              <p className="text-muted-foreground">AVP-powered collaborative spaces where distributed teams can visualize complex data relationships and iterate solutions.</p>
            </div>
          </div>
        </section>

        {/* ROI Bullets */}
        <section className="py-16">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-12">
                    <BarChart className="w-10 h-10 mr-4 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold">Proven Enterprise Impact</h2>
                </div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                    <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">70% faster review cycles</span> - Automated triage and categorization eliminate manual bottlenecks.</div></div>
                    <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">85% response rate improvement</span> - AI-driven prioritization ensures critical issues receive immediate attention.</div></div>
                    <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">60% reduction in support costs</span> - Intelligent routing and automated resolution for routine inquiries.</div></div>
                    <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">3x faster time-to-market</span> - Streamlined feedback integration accelerates product development cycles.</div></div>
                    <div className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-500 shrink-0" /><div><span className="font-bold">90% accuracy in pattern detection</span> - Advanced signal processing identifies trends human analysts miss.</div></div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer CTA */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
                <Button size="lg">Get Started</Button>
                <p className="text-sm text-muted-foreground mt-8">Trusted Technology Platform</p>
                <p className="text-xs text-muted-foreground">Powered by Dreamplanet LLC • Enterprise-grade security • SOC 2 compliant</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
