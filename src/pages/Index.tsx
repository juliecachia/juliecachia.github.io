import { Linkedin, BookOpen, Sparkles, Brain, Mic, Heart, ArrowUpRight, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import keynotePhoto from "@/assets/keynote-photo.jpg";
import natureMountains from "@/assets/nature-mountains.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-accent/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Profile Image - Modern asymmetric design */}
            <div className="relative animate-fade-in lg:order-2 flex-shrink-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-accent to-primary/10 rounded-[2rem] blur-2xl opacity-60 animate-float" />
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-[1.5rem] overflow-hidden shadow-elevated">
                  <img 
                    src={profilePhoto} 
                    alt="Julie Cachia, PhD"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 lg:order-1 text-center lg:text-left">
              {/* Name */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8 animate-fade-in-delay-1 tracking-tight whitespace-nowrap">
                Julie Cachia, PhD
              </h1>

              {/* Primary Descriptor */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4 max-w-xl animate-fade-in-delay-2 font-light">
                Psychologist and co-founder building science&#8209;based tools for everyday well-being.
              </p>

              {/* Secondary Line */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2 max-w-lg animate-fade-in-delay-2">
                Researching emotion, culture, and close relationships.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-lg animate-fade-in-delay-2">
                Applying science at scale.
              </p>

              {/* Simple Text Links */}
              <div className="flex items-center gap-6 animate-fade-in-delay-3 justify-center lg:justify-start flex-wrap">
                <a 
                  href="https://www.linkedin.com/in/juliecachia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="relative">
                    LinkedIn
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=nEGyuZMAAAAJ&hl=en"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="relative">
                    Google Scholar
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
                <a 
                  href="/Julie_Cachia_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span className="relative">
                    CV
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Layered */}
      <section id="about" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-16 tracking-tight">
            About
          </h2>

          {/* Bio Content */}
          <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed font-light">
            <p>
              I'm a co-founder of{" "}
              <a 
                href="https://www.myflourish.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                Flourish Science
              </a>
              , where I help translate behavioral research into practical tools for everyday well-being. At Flourish, I develop science-based content and lead large-scale, multi-institutional randomized controlled trials testing the impact of digital well-being interventions in real-world settings.
            </p>
            <p>
              I earned my PhD in affective science at{" "}
              <a 
                href="https://culture-emotion-lab.stanford.edu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                Stanford University
              </a>
              , where my research focused on emotion, culture, and close relationships. I'm especially interested in what people want to feel in life, the kinds of relationships they hope to build, and how cultural context shapes these preferences.
            </p>
            <p>
              Before Stanford, I earned my Master's and Bachelor's degrees in psychology at{" "}
              <a 
                href="https://wp.nyu.edu/motivationlab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
              >
                New York University
              </a>
              , where I studied motivation and communication in romantic relationships.
            </p>
            <p>
              Alongside my academic and applied work, I have over a decade of experience in meditation and yoga and find deep meaning in exploring the mind–body connection. I'm a certified yoga instructor through YogaX at Stanford Psychiatry and regularly guide evidence-informed practices, including guided imagery and meditations.
            </p>
          </div>
        </div>
      </section>

      {/* Keynote Photo Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img 
              src={keynotePhoto} 
              alt="Julie Cachia speaking at the Stanford Alumni Healthy Living Retreat for Women"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm italic">
            Sharing research and reflection at the Stanford Alumni Healthy Living Retreat for Women.
          </p>
        </div>
      </section>

      {/* What I Work On Section */}
      <section id="work" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-20 tracking-tight">
            What I Work On
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Building & Applied Work */}
            <a 
              href="https://www.myflourish.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group glass-card p-8 md:p-10 rounded-2xl hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-accent rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Building & Applied Work
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I co-founded Flourish Science to bring psychological research out of the lab and into daily life, designing evidence-based tools and AI-supported interventions for proactive mental health.
              </p>
            </a>

            {/* Research & Science */}
            <a 
              href="https://scholar.google.com/citations?user=nEGyuZMAAAAJ&hl=en"
              target="_blank" 
              rel="noopener noreferrer"
              className="group glass-card p-8 md:p-10 rounded-2xl hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-accent rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Research & Science
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                My research explores how emotions, values, and cultural context shape trust, close relationships, and well-being, using experimental, dyadic, and cross-cultural methods.
              </p>
            </a>

            {/* Teaching, Speaking & Workshops */}
            <div className="group glass-card p-8 md:p-10 rounded-2xl">
              <div className="p-3 bg-accent rounded-xl w-fit mb-6">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Teaching, Speaking & Workshops
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I teach, guest lecture, and lead workshops on well-being, habit formation, and social connection for students, educators, and founders, drawing from both research and real-world application.
              </p>
            </div>

            {/* Mind–Body Practice */}
            <a 
              href="https://imagery.myflourish.ai/rainforest?$web_only=true&_branch_match_id=1531367452545618837&utm_medium=guided_imagery&_branch_referrer=H4sIAAAAAAAAAw3IMQqAMAwF0Bs1uyBuXkMqpDZYkvAT0cmz6xtfz/SYiNqwCxJdvFT3MkRPYkIVbQaOXF5wY0D02HbYHYx5lf/s+QCxql/3QwAAAA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group glass-card p-8 md:p-10 rounded-2xl hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-accent rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Mind–Body Practice
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I design and guide meditation, breathing, and imagery-based practices grounded in psychological science and over a decade of lived practice.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Nature Image Divider */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img 
              src={natureMountains} 
              alt="Mountain landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mb-16 tracking-tight">
            Selected Work
          </h2>

          <div className="space-y-0">
            {[
              {
                title: "AI for Proactive Mental Health",
                description: "A multi-institutional, longitudinal, randomized controlled trial",
                href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=68111"
              },
              {
                title: "How Do I Love Thee?",
                description: "Ideal romantic love and partner responses to good news in the US and Japan (Dissertation)",
                href: "https://purl.stanford.edu/pq220gh7596"
              },
              {
                title: "Cultural Variation in the Smiles We Trust",
                description: "The effects of reputation and ideal affect on resource sharing (Emotion)",
                href: "https://psycnet.apa.org/fulltext/2025-59972-001.html"
              },
              {
                title: "Experimentology",
                description: "An open science approach to experimental psychology methods (MIT Press)",
                href: "https://experimentology.io/"
              }
            ].map((work, index) => (
              <a 
                key={index}
                href={work.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start justify-between py-8 border-b border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {work.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 translate-x-0 translate-y-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-4 mt-2" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6">
        <div className="container mx-auto max-w-3xl flex justify-center">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a 
              href="https://www.linkedin.com/in/juliecachia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              <span className="relative">
                LinkedIn
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <span className="text-border text-sm">·</span>
            <a 
              href="https://scholar.google.com/citations?user=nEGyuZMAAAAJ&hl=en"
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              <span className="relative">
                Google Scholar
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <span className="text-border text-sm">·</span>
            <a 
              href="/Julie_Cachia_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              <span className="relative">
                CV
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
