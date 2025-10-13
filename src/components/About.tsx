const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate fullstack developer with expertise in building modern web applications. 
            I love turning complex problems into elegant, user-friendly solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong foundation in both frontend and backend technologies, I create 
            seamless experiences that delight users and drive business results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
