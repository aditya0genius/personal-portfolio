
export default function Homepage() {
  return (
    <div>
        <div className="container">
        <section id="about" className="about">
            <h2>About Me</h2>
            <p>
                Hi! I&apos;m John Doe, a passionate full stack developer with 2 years of experience in creating dynamic and responsive web applications. I love crafting clean code and building efficient solutions to solve complex problems.
            </p>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <div className="projects">
                <div className="project">
                    <h3>Project 1: E-commerce Platform</h3>
                    <p>An end-to-end e-commerce application with features like user authentication, product search, and secure checkout. Built with React, Node.js, and MongoDB.</p>
                    <a href="https://github.com/username/ecommerce-platform" target="_blank">View on GitHub</a>
                </div>

                <div className="project">
                    <h3>Project 2: Blogging Website</h3>
                    <p>A content-rich blogging platform allowing users to create, edit, and comment on posts. Developed using Django, PostgreSQL, and Bootstrap.</p>
                    <a href="https://github.com/username/blogging-website" target="_blank">View on GitHub</a>
                </div>

                <div className="project">
                    <h3>Project 3: Portfolio Website</h3>
                    <p>This personal portfolio website showcasing my skills and projects, designed with HTML, CSS, and JavaScript.</p>
                    <a href="https://github.com/username/portfolio-website" target="_blank">View on GitHub</a>
                </div>
            </div>
        </section>

        <section id="contact" className="about">
            <h2>Contact Me</h2>
            <p>If you&apos;d like to collaborate or just say hi, feel free to reach out!</p>
            <p>Email: john.doe@example.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
            <p>GitHub: <a href="https://github.com/username" target="_blank">github.com/username</a></p>
        </section>
    </div>

    </div>
  );
}
