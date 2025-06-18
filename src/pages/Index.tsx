
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Sparkles, Heart, Zap, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWaitlistSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    if (email) {
      toast({
        title: "Thanks for joining our waitlist!",
        description: "We'll notify you when our products are ready.",
      });
      (e.target as HTMLFormElement).reset();
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              Alpha Corp
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-slate-300 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-slate-300 hover:text-white transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in-on-scroll">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8 animate-glow">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm text-slate-300">Building the future of habit transformation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Changing Habits.</span>
              <br />
              <span className="gradient-text">Changing Lives.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We build human-centered software to make everyday change achievable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('products')} 
                className="glow-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Empowering Human Potential
            </h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              At Alpha Corp, we believe that small, consistent changes lead to extraordinary transformations. 
              Our mission is to create technology that understands human psychology and makes positive change not just possible, but inevitable.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105 fade-in-on-scroll">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Human-Centered</h3>
                  <p className="text-slate-400">Every feature designed with empathy and understanding of human behavior.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105 fade-in-on-scroll" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Cutting-Edge Tech</h3>
                  <p className="text-slate-400">Leveraging the latest in AI and behavioral science for maximum impact.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-105 fade-in-on-scroll" style={{animationDelay: '0.4s'}}>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Community Driven</h3>
                  <p className="text-slate-400">Building tools that connect people and amplify collective progress.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center fade-in-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Products Coming Soon
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              We're crafting revolutionary tools that will transform how you approach personal change. 
              Be the first to experience the future of habit formation.
            </p>
            
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Join Our Waitlist</h3>
              <p className="text-slate-400 mb-6">Get exclusive early access and be part of the beta community.</p>
              
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full glow-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-xl transition-all duration-300"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
            
            <p className="text-sm text-slate-500">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center fade-in-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Have a question or want to collaborate? We'd love to hear from you.
            </p>
            
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-xl text-white">founder@alphacorp.global</span>
              </div>
              
              <Button 
                className="glow-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => window.location.href = 'mailto:founder@alphacorp.global'}
              >
                Send Email
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">
              Alpha Corp
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>&copy; 2024 Alpha Corp. All rights reserved.</p>
              <p className="text-sm mt-1">Building software to change habits and improve lives.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
