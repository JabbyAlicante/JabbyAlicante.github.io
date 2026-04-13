import img from "../assets/jabsicon.jpg";
export default function about(element) {
  element.innerHTML = `
        <div class="about-content">
            <div class="title-about">
                <h2>// About Me</h2>
            </div>
            <div class="about-desc-content">
                <div class="about-left">
                    <div class="image-container-about">
                        <img src="${img}" alt="Profile Picture">
                        <div class="about-icons">
                            <div class="github-icon">
                                <i class="fa-brands fa-github"></i>
                            </div>
                            <div class="linkedin-icon">
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div class="email-icon">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="about-right">
                    <div class="about-right-content">
                        <div class="about-circles">
                            <div class="circle1about"></div>
                            <div class="circle2about"></div>
                            <div class="circle3about"></div>
                        </div>
                        <p>I’m Jabby Alicante, I am a Computer Science graduate with a strong enthusiasm for web and software development. I have experience in both frontend and backend development, including API integration and database management. Most of my experience comes from college projects, along with additional exposure to FlutterFlow during my internship. I am eager to apply my skills in a professional setting while continuously learning new technologies and tools that will help me grow as a developer.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}