import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Developer & Builder</h4>
                <h5>Self-initiated Projects</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Developing AI-powered applications with real-world use cases. Built a fake news detection system integrating LLM APIs and verification workflows. Exploring startup ideas in hyperlocal services and digital platforms. Working with modern web technologies and various APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Full-Stack Development</h4>
                <h5>Focus Areas</h5>
              </div>
              <h3>Skills</h3>
            </div>
            <p>
              Specialized in NLP-based workflows, LLM API integrations, and building full-stack applications. Experienced with Python for backend services, TypeScript/React for frontend development, and practical implementation of AI solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Problem Solving</h4>
                <h5>Core Philosophy</h5>
              </div>
              <h3>Approach</h3>
            </div>
            <p>
              Focused on creating practical, scalable solutions to real-world problems. Strong interest in solving challenges in hyperlocal services, digital platforms, and AI-driven applications. Actively exploring startup opportunities while continuously strengthening technical and product-building skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
