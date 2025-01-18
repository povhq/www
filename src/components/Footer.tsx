import React, { useState } from 'react';
import { Monitor, Shield, Cloud, Gauge, DollarSign, ArrowUpCircle, Zap, Calendar, Command, PieChart, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Select from 'react-select';

interface SolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgImage: string;
}

interface FormData {
  name: string;
  email: string;
  companyName: string;
  interests: { value: string; label: string; }[];
}

const Solution: React.FC<SolutionProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-[#1A1C1F] rounded-xl hover:bg-slate-800 transition-all duration-300">
    <div className="text-emerald-400 w-12 h-12 mb-4">
      {icon}
    </div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Product: React.FC<ProductProps> = ({ icon, title, description, bgImage }) => (
  <div 
    className="p-8 rounded-xl relative overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
    style={{
      backgroundImage: `linear-gradient(rgba(26, 28, 31, 0.9), rgba(26, 28, 31, 0.9)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="text-emerald-400 w-12 h-12 mb-4">
      {icon}
    </div>
    <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-slate-300 text-lg">{description}</p>
    <div className="absolute bottom-0 left-0 h-1 bg-emerald-400 transition-all duration-300 w-0 group-hover:w-full"></div>
  </div>
);

function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    companyName: '',
    interests: []
  });

  const solutions = [
    {
      icon: <Monitor className="w-full h-full" />,
      title: "Application Development",
      description: "Build scalable and modern applications tailored to your business needs"
    },
    {
      icon: <Gauge className="w-full h-full" />,
      title: "Observability",
      description: "Gain deep insights into your application's performance and behavior"
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: "DevSecOps",
      description: "Integrate security seamlessly into your development pipeline"
    },
    {
      icon: <DollarSign className="w-full h-full" />,
      title: "Finops",
      description: "Optimize and manage your cloud spending effectively"
    },
    {
      icon: <ArrowUpCircle className="w-full h-full" />,
      title: "Cloud Migration",
      description: "Seamlessly transition your applications to the cloud"
    },
    {
      icon: <Zap className="w-full h-full" />,
      title: "Automation",
      description: "Streamline your processes with intelligent automation solutions"
    }
  ];

  const products = [
    {
      icon: <Calendar className="w-full h-full" />,
      title: "Socially",
      description: "Advanced social media scheduling infrastructure for modern businesses",
      bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
    },
    {
      icon: <Command className="w-full h-full" />,
      title: "Application Command Centre",
      description: "Comprehensive observability dashboard for complete system insights",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      icon: <PieChart className="w-full h-full" />,
      title: "Finops",
      description: "Intelligent cloud cost management and optimization solution",
      bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    }
  ];

  const interestOptions = [
    ...products.map(p => ({ value: p.title, label: p.title })),
    ...solutions.map(s => ({ value: s.title, label: s.title }))
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      companyName: '',
      interests: []
    });
  };

  const footerLinks = {
    products: [
      { name: "Socially", href: "#" },
      { name: "Command Centre", href: "#" },
      { name: "Finops", href: "#" }
    ],
    solutions: [
      { name: "Application Development", href: "#" },
      { name: "Cloud Security", href: "#" },
      { name: "DevSecOps", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#1A1C1F]">
      {/* Solutions Section */}
      <section className="py-20 px-4 md:px-8 border-t border-b border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Solutions</h2>
            <p className="text-slate-400 text-xl">Comprehensive solutions for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Solution key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 md:px-8 bg-[#1A1C1F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Products</h2>
            <p className="text-slate-400 text-xl">Innovative tools to power your success</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Started</h2>
            <p className="text-slate-400 text-xl">Take the first step towards transforming your business</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name *</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-white mb-2">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="interests" className="block text-white mb-2">I'm interested in *</label>
              <Select
                isMulti
                name="interests"
                options={interestOptions}
                value={formData.interests}
                onChange={(selected) => setFormData({ ...formData, interests: selected as { value: string; label: string; }[] })}
                className="react-select-container"
                classNamePrefix="react-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: '#1e293b',
                    borderColor: '#334155',
                    '&:hover': {
                      borderColor: '#475569'
                    }
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: '#1e293b'
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? '#334155' : '#1e293b',
                    color: 'white'
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: '#334155'
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: 'white'
                  }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: 'white',
                    ':hover': {
                      backgroundColor: '#475569'
                    }
                  }),
                  input: (base) => ({
                    ...base,
                    color: 'white'
                  })
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">PovTech.</h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Engineering intelligent software solutions for modern businesses. Transform your operations with our cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} PovTech. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;