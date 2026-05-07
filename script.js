// // كلمة السر المخزنة
// var correctPassword = "1234";

// // عدد المحاولات
// var maxAttempts = 3;

// for (var i = 1; i <= maxAttempts; i++) {

//     var userPassword = prompt("Enter Password:");

//     // استخدام switch
//     switch (userPassword) {

//         case correctPassword:
//             alert("Access Granted ✅");
//             i = maxAttempts + 1; // يخرج من اللوب
//             break;

//         default:
//             // استخدام if / else
//             if (i < maxAttempts) {
//                 alert("Wrong Password ❌ Try again");
//             } else {
//                 alert("Access Denied 🚫");
//                 // تحويل لصفحة تانية أو إخفاء المحتوى
//                 document.body.innerHTML = "<h1>Access Denied</h1>";
//             }
//     }
// }



// // ============================================
// // EELU Team Portfolio - Main JavaScript
// // ============================================

// // Portfolio data for each team member
// const portfolioData = {
//     anas: {
//         fullName: "انس",
//         role: "Full Stack Developer",
//         about: "I am a passionate full stack developer with expertise in both frontend and backend technologies. I love creating web applications that solve real-world problems. With a strong foundation in JavaScript, React, and Node.js, I strive to build efficient and scalable solutions.",
//         skills: [
//             "JavaScript",
//             "React.js",
//             "Node.js",
//             "MongoDB",
//             "HTML/CSS",
//             "REST APIs",
//             "Express.js",
//             "Git"
//         ],
//         email: "anas@eelu.edu.eg",
//         phone: "+20 1234567890",
//         linkedin: "linkedin.com/in/anas",
//         github: "github.com/anas"
//     },
//     ahmed: {
//         fullName: "احمد",
//         role: "Frontend Specialist",
//         about: "A creative frontend developer dedicated to building beautiful and responsive user interfaces. I specialize in modern web design principles and focus on creating exceptional user experiences. My expertise includes React, Vue.js, and CSS frameworks.",
//         skills: [
//             "HTML5",
//             "CSS3",
//             "JavaScript",
//             "React.js",
//             "Vue.js",
//             "Responsive Design",
//             "UI/UX Principles",
//             "Bootstrap"
//         ],
//         email: "ahmed@eelu.edu.eg",
//         phone: "+20 1234567891",
//         linkedin: "linkedin.com/in/ahmed",
//         github: "github.com/ahmed"
//     },
//     moaz: {
//         fullName: "معاذ",
//         role: "Backend Developer",
//         about: "I am a backend developer focused on building robust server-side applications and designing efficient databases. I have extensive experience with Python, Java, and relational databases. I'm passionate about clean code, security, and scalability.",
//         skills: [
//             "Python",
//             "Java",
//             "SQL",
//             "PostgreSQL",
//             "MySQL",
//             "Firebase",
//             "API Development",
//             "Docker"
//         ],
//         email: "moaz@eelu.edu.eg",
//         phone: "+20 1234567892",
//         linkedin: "linkedin.com/in/moaz",
//         github: "github.com/moaz"
//     },
//     raghda: {
//         fullName: "رغدا",
//         role: "UI/UX Designer",
//         about: "A creative designer with a passion for creating intuitive and visually stunning interfaces. I believe good design is about understanding users and solving their problems. My work focuses on user-centered design principles and modern aesthetics.",
//         skills: [
//             "Figma",
//             "UI Design",
//             "UX Research",
//             "Wireframing",
//             "Prototyping",
//             "Color Theory",
//             "Typography",
//             "Adobe XD"
//         ],
//         email: "raghda@eelu.edu.eg",
//         phone: "+20 1234567893",
//         linkedin: "linkedin.com/in/raghda",
//         github: "github.com/raghda"
//     },
//     caroline: {
//         fullName: "كارولين",
//         role: "Project Manager",
//         about: "A detail-oriented project manager committed to ensuring smooth project execution and effective team collaboration. I specialize in Agile methodologies and have a proven track record of delivering projects on time and within scope.",
//         skills: [
//             "Project Management",
//             "Agile/Scrum",
//             "Team Leadership",
//             "Communication",
//             "Risk Management",
//             "Planning & Analysis",
//             "Documentation",
//             "Time Management"
//         ],
//         email: "caroline@eelu.edu.eg",
//         phone: "+20 1234567894",
//         linkedin: "linkedin.com/in/caroline",
//         github: "github.com/caroline"
//     }
// };

// // // ============================================
// // // Initialize on Page Load
// // // ============================================

// // document.addEventListener("DOMContentLoaded", function() {
// //     initializeEventListeners();
// // });

// // // ============================================
// // // Event Listeners Setup
// // // ============================================

// // function initializeEventListeners() {
// //     // Get all team cards
// //     const teamCards = document.querySelectorAll(".team-card");

// //     // Add click event to each card
// //     teamCards.forEach(card => {
// //         card.addEventListener("click", function() {
// //             const memberName = this.getAttribute("data-member");
// //             showPortfolio(memberName);
// //         });

// //         // Add keyboard interaction
// //         card.addEventListener("keypress", function(e) {
// //             if (e.key === "Enter" || e.key === " ") {
// //                 const memberName = this.getAttribute("data-member");
// //                 showPortfolio(memberName);
// //             }
// //         });
// //     });

// //     // Back button functionality
// //     const backBtn = document.getElementById("back-btn");
// //     if (backBtn) {
// //         backBtn.addEventListener("click", showMainSection);
// //     }
// // }

// // // ============================================
// // // Display Portfolio Section
// // // ============================================

// // function showPortfolio(memberName) {
// //     // Get the member data
// //     const member = portfolioData[memberName];

// //     if (!member) {
// //         console.error("Member not found:", memberName);
// //         return;
// //     }

// //     // Hide main section
// //     const mainSection = document.getElementById("main-section");
// //     const portfolioSection = document.getElementById("portfolio-section");

// //     mainSection.classList.add("hidden");
// //     portfolioSection.classList.add("active");

// //     // Generate portfolio HTML
// //     const portfolioHTML = generatePortfolioHTML(member);

// //     // Insert portfolio content
// //     const portfolioContainer = document.querySelector(".portfolio-container");
// //     portfolioContainer.innerHTML = portfolioHTML;

// //     // Smooth scroll to top
// //     window.scrollTo({
// //         top: 0,
// //         behavior: "smooth"
// //     });

// //     // Add animation to portfolio items
// //     animatePortfolioItems();
// // }

// // // ============================================
// // // Generate Portfolio HTML
// // // ============================================

// // function generatePortfolioHTML(member) {
// //     return `
// //         <div class="portfolio-header">
// //             <h1>${member.fullName}</h1>
// //             <p>${member.role}</p>
// //         </div>

// //         <div class="portfolio-about">
// //             <h2 class="portfolio-section-title">About Me</h2>
// //             <p class="about-text">${member.about}</p>
// //         </div>

// //         <div class="portfolio-skills">
// //             <h2 class="portfolio-section-title">Skills</h2>
// //             <ul class="skills-list">
// //                 ${member.skills.map(skill => `<li>${skill}</li>`).join("")}
// //             </ul>
// //         </div>

// //         <div class="portfolio-contact">
// //             <h2 class="portfolio-section-title">Contact Information</h2>
// //             <div class="contact-info">
// //                 <div class="contact-item">
// //                     <strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a>
// //                 </div>
// //                 <div class="contact-item">
// //                     <strong>Phone:</strong> ${member.phone}
// //                 </div>
// //                 <div class="contact-item">
// //                     <strong>LinkedIn:</strong> <a href="https://${member.linkedin}" target="_blank">${member.linkedin}</a>
// //                 </div>
// //                 <div class="contact-item">
// //                     <strong>GitHub:</strong> <a href="https://${member.github}" target="_blank">${member.github}</a>
// //                 </div>
// //             </div>
// //         </div>
// //     `;
// // }

// // // ============================================
// // // Return to Main Section
// // // ============================================

// // function showMainSection() {
// //     const mainSection = document.getElementById("main-section");
// //     const portfolioSection = document.getElementById("portfolio-section");

// //     // Remove active state from portfolio
// //     portfolioSection.classList.remove("active");
    
// //     // Show main section again
// //     mainSection.classList.remove("hidden");

// //     // Smooth scroll to top
// //     window.scrollTo({
// //         top: 0,
// //         behavior: "smooth"
// //     });
// // }

// // // ============================================
// // // Animation Effects
// // // ============================================

// // function animatePortfolioItems() {
// //     // Animate skills list items
// //     const skillsItems = document.querySelectorAll(".skills-list li");
// //     skillsItems.forEach((item, index) => {
// //         item.style.animation = `slideUp 0.5s ease ${index * 0.1}s both`;
// //     });

// //     // Add hover effect to skills
// //     skillsItems.forEach(item => {
// //         item.addEventListener("mouseenter", function() {
// //             this.style.transform = "scale(1.05)";
// //         });

// //         item.addEventListener("mouseleave", function() {
// //             this.style.transform = "scale(1)";
// //         });
// //     });
// // }

// // // ============================================
// // // Keyboard Navigation
// // // ============================================

// // document.addEventListener("keydown", function(e) {
// //     // Press Escape to go back
// //     if (e.key === "Escape") {
// //         const portfolioSection = document.getElementById("portfolio-section");
// //         if (portfolioSection.classList.contains("active")) {
// //             showMainSection();
// //         }
// //     }
// // });
