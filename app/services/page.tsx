import Link from "next/link";
import { 
  Shield, 
  Leaf, 
  ClipboardCheck, 
  HardHat, 
  Siren, 
  HeartPulse, 
  Users, 
  PackageCheck,
  ArrowRight
} from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full py-20 md:py-28 bg-dark overflow-hidden">
        {/* Background: Cleaner, blurred office/meeting setting */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Corporate Office Blur" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b4d]/90 to-[#002b4d]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> &gt; <span className="text-primary">Services</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Comprehensive Safety & <br/> Environmental Solutions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            From ISO alignment to on-site safety officers, we provide the expertise to keep your operations compliant, sustainable, and safe.
          </p>
        </div>
      </section>

      {/* ================= 2. CORE SERVICES GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: OHS Management */}
          <ServiceCard 
            icon={<Shield className="h-8 w-8 text-white" />}
            title="OHS Management"
            description="Complete oversight of your occupational health and safety needs."
            features={["Risk Assessments (Baseline/Job)", "SHE Files & Safety Plans", "ISO 45001 Alignment", "Incident Investigations"]}
          />

          {/* Card 2: Environmental Mgmt */}
          <ServiceCard 
            icon={<Leaf className="h-8 w-8 text-white" />}
            title="Environmental Solutions"
            description="Sustainable strategies to minimize ecological impact."
            features={["Impact Assessments (EIA)", "Waste Management Plans", "Pollution Control Strategies", "Sustainability Reporting"]}
          />

          {/* Card 3: Compliance Audits */}
          <ServiceCard 
            icon={<ClipboardCheck className="h-8 w-8 text-white" />}
            title="Compliance Audits"
            description="Ensuring you meet all legal and mine-specific regulations."
            features={["Legal Compliance Audits", "Gap Analysis", "Regulatory Inspections", "Audit Preparation"]}
          />

          {/* Card 4: On-Boarding (Jwaneng Specific) */}
          <ServiceCard 
            icon={<Users className="h-8 w-8 text-white" />}
            title="On-Boarding Support"
            description="Streamlining the complex mine access process."
            features={["Medical Examination Booking", "SHE & Security Inductions", "Access Permit Facilitation", "Contractor Pack Approval"]}
          />

          {/* Card 5: Emergency Response */}
          <ServiceCard 
            icon={<Siren className="h-8 w-8 text-white" />}
            title="Emergency Preparedness"
            description="Readying your team for the unexpected."
            features={["Evacuation Drills", "Emergency Response Plans", "Fire Simulation Training", "First Aid Protocols"]}
          />

          {/* Card 6: Health & Wellness */}
          <ServiceCard 
            icon={<HeartPulse className="h-8 w-8 text-white" />}
            title="Occupational Health"
            description="Prioritizing the physical and mental well-being of workers."
            features={["Ergonomics Assessments", "Industrial Hygiene Surveys", "Stress Management", "Substance Abuse Prevention"]}
          />

        </div>
      </section>

      {/* ================= 3. SPECIALIZED SUPPLY & SUPPORT ================= */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Beyond Consulting</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Specialized Supply & <span className="text-secondary">Project Support</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We don't just advise; we equip. DOHSH provides the personnel and gear necessary to execute safety strategies on the ground.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <HardHat className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">Project Personnel Supply</h3>
                    <p className="text-gray-600">Placement of qualified Safety Officers, Fire Marshals, and First Aiders for long or short-term projects.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <PackageCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">PPE & Corporate Wear</h3>
                    <p className="text-gray-600">Supply of specialized underground PPE, high-visibility corporate wear, and safety signage.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                alt="PPE and Safety Gear" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. CTA BANNER ================= */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-6">
            Ready to elevate your safety standards?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for a gap analysis or a quote on our safety management services.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-primary font-bold px-8 py-3 rounded shadow hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Component for the Grid Cards to keep code clean
function ServiceCard({ icon, title, description, features }: { icon: any, title: string, description: string, features: string[] }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/50 transition-all hover:shadow-xl group">
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <h3 className="font-heading text-xl font-bold text-dark mb-3">{title}</h3>
      <p className="text-gray-500 mb-6 text-sm">{description}</p>
      
      {/* Feature List */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-primary mt-1">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-gray-100">
        <Link href="/contact" className="text-secondary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Request Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}