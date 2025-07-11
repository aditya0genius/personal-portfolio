
export default function Homepage() {
  return (
    <div>
        <div className="container">
        <section id="about" className="about">
            <h2><b>About Me</b></h2>
            <p>
            I am a passionate Full Stack Engineer with two years of experience specializing in frontend web design and development. I have a keen eye for creating visually appealing, user-friendly interfaces while ensuring seamless functionality across the entire web stack.

Proficient in HTML, CSS, JavaScript, React, and Vue.js, I focus on crafting responsive and interactive web applications that enhance user engagement. On the backend, I have experience working with Node.js, Express, and databases like MongoDB and MySQL, enabling me to develop robust, scalable solutions.

I thrive in collaborative environments, working closely with designers, developers, and stakeholders to bring creative ideas to life. Always eager to learn and adapt to new technologies, I am committed to writing clean, maintainable code that drives efficiency and innovation.

Let’s build something amazing together! 🚀
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
            <p>Email: adityadeshmukh168@gmail.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/aditya0genius" target="_blank">linkedin.com/in/aditya0genius</a></p>
            <p>GitHub: <a href="https://github.com/aditya0genius" target="_blank">github.com/aditya0genius</a></p>
        </section>
    </div>

    </div>
  );
}
