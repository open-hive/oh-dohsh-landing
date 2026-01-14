import Link from "next/link";
import { CheckCircle2, Award, Users, Scale, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
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
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> &gt; <span className="text-primary">About Us</span>
          </div>
          
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Your Partner in Occupational Safety <br /> & Environmental Stewardship.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            DOHSH All Safety Consultancy is a Motswana-founded entity dedicated to empowering organizations with comprehensive OHSE solutions.
          </p>
        </div>
      </section>

      {/* ================= 2. WHO WE ARE (Story) ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Image (Alternating from Home) */}
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional Consultation" 
                className="w-full h-full object-cover"
              />
              {/* Decorative Cyan Frame */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/20 rounded"></div>
            </div>

            {/* Right Column: Text Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                Driving Safety Culture in Botswana.
              </h2>
              
              {/* The "Visual Element" - Vertical Cyan Line */}
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  With a team of experienced professionals, we specialize in helping companies navigate challenges, streamline operations, and unlock safety opportunities. Whether you are in mining, construction, or healthcare, our tailored solutions ensure your workforce returns home safely every day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. STATS BAR (Gradient) ================= */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Compliance Focus</div>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">ISO</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Standards Aligned</div>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">Zero</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Harm Philosophy</div>
            </div>

            <div className="space-y-2">
              <div className="font-heading text-4xl font-bold">7+</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Core Industries</div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. MISSION & VISION ================= */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Block A: Mission (Cyan Bar) */}
            <div className="bg-white p-10 rounded shadow-md border-l-8 border-primary">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To network and empower organizations to create safer, healthier, and more sustainable workplaces through innovative solutions, expert guidance, and a commitment to excellence.
              </p>
            </div>

            {/* Block B: Vision (Deep Blue Bar) */}
            <div className="bg-white p-10 rounded shadow-md border-l-8 border-secondary">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading OHSE consultancy in Botswana, fostering a culture where zero harm is achievable and every worker returns home safely.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. WHY CHOOSE US GRID ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-dark">Why Choose DOHSH?</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We combine local understanding with international standards to deliver safety results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Item 1: Expertise */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Proven Expertise</h4>
                <p className="text-gray-600 text-sm">Highly skilled professionals with extensive experience in the Jwaneng mining sector and industrial safety.</p>
              </div>
            </div>

            {/* Item 2: Customization */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Tailored Customization</h4>
                <p className="text-gray-600 text-sm">Personalized services maintaining open communication to fit your specific operational needs.</p>
              </div>
            </div>

            {/* Item 3: Regulatory */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <Scale className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Regulatory Knowledge</h4>
                <p className="text-gray-600 text-sm">Up-to-date with evolving Botswana regulations to help you avoid penalties and ensure compliance.</p>
              </div>
            </div>

            {/* Item 4: Excellence */}
            <div className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 w-12 h-12 rounded flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-dark mb-2">Commitment to Excellence</h4>
                <p className="text-gray-600 text-sm">Dedication to quality results and integrity in every audit, plan, and inspection we perform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. ZERO HARM QUOTE ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
          <blockquote className="font-heading text-2xl md:text-3xl font-medium text-dark leading-relaxed italic mb-8">
            "We believe that zero harm is achievable. Our goal is a workplace where everyone safely goes back to their families."
          </blockquote>
          <div className="font-bold text-secondary uppercase tracking-widest text-sm">
            — DOHSH Management
          </div>
        </div>
      </section>

    </div>
  );
}