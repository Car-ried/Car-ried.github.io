/*
 * Data model for individual projects. Each key corresponds to a slug
 * used in the query string of project.html (e.g. project.html?slug=custom-cold-air-intake).
 * The objects contain detailed information about the project that will
 * populate the project detail page. Feel free to add more projects or
 * extend the fields as your portfolio grows.
 */
window.projectData = {
  
  /* TEMPLATE ------------------------------
  
  "PROJECT-NAME": {
    tileTitle: "TILE TITLE",
    tileDescription: "TILE DESCRIPTION",
    tileImage: "Assets/project-X.png",
    tileAlt: "ALT TEXT",
    dataCategory: "cad prototype 3d-print build testing complete ongoing",
    
    title: "PROJECT TITLE",
    subtitle: "PROJECT SUB TITLE",
    heroImage: "Assets/project-X.png",
    heroAlt: "ALT TEXT",
    status: "STATUS", //complete/ongoing
    overview:
      "PROJECT OVERVIEW",
    designMotivation:
      "DESIGN MOTIVATIONS",
    problem:
      "DESIGN PROBLEMS",
    solution:
      "DESIGN SOLUTIONS",
    skills: [
      "SKILL 1",
      "SKILL 2",
      "SKILL 3",
      "Skill X"
    ],
    lessons:
      "LESSONS LEARNED",
    gallery: [
      {
        src: "Assets/PROJECT-X.png",
        alt: "ALT TEXT"
      },
      {
        src: "IMAGE.png",
        alt: "ALT TEXT"
      }
    ]
  }
  */
  // -------------------------------------------------------
  
  "custom-cold-air-intake": {
    tileTitle: "Custom Cold-Air Intake",
    tileDescription: "Designing and building a custom carbon fibre intake for a Mk7.5 Golf GTI, developing skills in Fusion 360 forms, product design, 3D scanning, and composite fabrication.",
    tileImage: "Assets/project-1.png",
    tileAlt: "CAD rendering of the custom cold-air intake on a Golf GTI engine bay",
    dataCategory: "cad prototype 3d-print build",
    
    title: "Custom Cold-Air Intake",
    subtitle: "Mk7.5 Golf GTI Carbon Fibre Intake",
    heroImage: "Assets/project-1.png",
    heroAlt: "CAD rendering of the custom cold-air intake on a Golf GTI engine bay",
    status: "ongoing",
    overview:
      "This project involves designing and building a custom carbon-fibre cold-air intake for my Mk7.5 Golf GTI. The goal is to improve airflow into the turbocharger while practising advanced CAD modelling, reverse engineering and hands-on composite manufacturing techniques. Of course, there is always the benefit of it looking cool too.",
    designMotivation:
      "Factory intake systems are often a compromise between cost, noise reduction and ease of manufacture. I wanted to explore how custom components could potentially increase performance while honing my design skills. A cold-air intake is a relatively self-contained system that offered an excellent opportunity to experiment with carbon-fibre lay-up and form modelling.",
    problem:
      "The challenge is packaging the new intake within the tight confines of the engine bay without interfering with existing components. It needs to align with OEM mounting points, avoid heat sources and deliver a smooth, unrestricted path for air. Because carbon fibre is labour-intensive to rework, the design also needs to be correct the first time.",
    solution:
      "I used my phone, and a 3D scanner app, Polycam, to capture the geometry of the engine bay and imported the mesh into Zeiss Inspect. Using Zeiss Inspect enabled me to align multiple meshes and  assign a global coordinate system, which was then imported into Fusion 360. Using the forms workspace I sculpted an intake shape that hugged the contours of the engine bay ensuring minimal redirection of the airstream. Additionally, I kept the OEM passthrough feature of the stock intake to retain the factory airflow into the engine bay.\n\nThe tooling for the carbon-fibre lay-up will be 3D-printed, sanded and sealed. Multiple layers of carbon fabric will be vacuum-bagged over the form, cured and then trimmed to final dimensions. The finished intake installs using stock hardware and aims to dramatically improve induction sound and aesthetics.",
    skills: [
      "Fusion 360 forms & surface modelling",
      "3D scanning & reverse engineering",
      "Carbon-fibre lay-up & vacuum bagging",
      "Product design & prototyping"
    ],
    lessons:
      "Still in progress — lessons around composite lay-up, fitment tolerances, and design iteration to come.",
    /*  Iterative prototyping helped avoid costly mistakes in composite fabrication. I gained confidence in working with carbon fibre and learned the importance of fibre orientation for structural integrity. */
    gallery: [
      {
        src: "Assets/project-1.png",
        alt: "CAD render of the cold-air intake"
      }
    ]
  },
  "mmsf-tensile-load-limiter": {
    tileTitle: "MMSF Tensile Load Limiter",
    tileDescription: "Metal Matrix Syntactic Foams (MMSFs) are noted for their energy absorption capabilities. This testing apparatus was engineered to include a shear pin mechanism enabling controlled activation at a defined load.",
    tileImage: "Assets/project-2.png",
    tileAlt: "CAD assembly of the MMSF tensile load limiter",
    dataCategory: "cad testing build",
    
    title: "MMSF Tensile Load Limiter",
    subtitle: "Tensile Load Limiter Apparatus with Integrated Shear Pin",
    heroImage: "Assets/project-2.png",
    heroAlt: "CAD assembly of the MMSF tensile load limiter",
    status: "ongoing",
    overview:
      "Metal Matrix Syntactic Foams (MMSFs) are an excellent material for absorbing sudden, high-load impacts by plastically deforming. As part of my Final Year Project (FYP) at University, I am designing a testing apparatus that integrates a mechanical fuse, such as a shear-pin, to ensure consistent and controlled failure at a predefined threshold. This allows the mechanism to only activate under the desired conditions, avoiding unnecessary deformation of the MMSF in low-load scenarios.",
    designMotivation:
      "My supervising professor, and past student collaborators, lacked a reliable fixture to evaluate the compressive behaviour of MMSFs. Although the test rig is loaded in tension, the MMSF specimen is subjected to compressive loading through the mechanical arrangement. The redesign aims to resolve known issues related to asymmetric compression, shear pin over-performance, limited sample variability, and limited compression range. Designing a bespoke load limiter provided an opportunity to apply mechanical design principles and expand my knowledge of fracture mechanics.",
    problem:
      "The fixture needed to be compatible with standard testing machines while providing repeatable activation at a predetermined load. Additionally, it should address the previously identified issues. Safety was a key concern, as components of the device were intentionally designed to fail under specific loading conditions.",
    solution:
      "After analysing previous iterations of the device and consulting standards, I designed a two-shackle system to hold the sample and integrated a removable shear pin sized using shear force calculations. The apparatus was manufactured and assembled using off-the-shelf flat bar and hardware. The shear pins will be evaluated with the apparatus to validate shear pin performance. The final shear force aims to be within ±20 % of the target load. Subsequently, MMSF samples will be cast, and a fully-integrated test will be performed to validate system performance.",
    skills: [
      "Mechanical design of test fixtures",
      "Test protocol development",
      "Shear-pin sizing & failure analysis",
      "Design for manufacturing",
      "Casting",
    ],
    lessons:
      "This project reinforced the importance of early identification of critical path constraints in the timeline. I also learned to balance the need for adjustability with the benefits of design simplicity; the final design uses simple pins rather than more complex mechanisms involving linkages or moving parts. Collaborating with researchers broadened my understanding of material science and test protocol, including insights into MMSF behaviour under compressive load.",
    gallery: [
      {
        src: "Assets/project-2.png",
        alt: "CAD rendering of the load limiter"
      }
    ]
  },
  "print-in-place-gimbal": {
    tileTitle: "Print-In-Place Gimbal",
    tileDescription: "A short project allowing for a gimballed mechanism, similar to those found in aerospace applications, to be 3D-Printed all at once, with little to no post-processing required.",
    tileImage: "Assets/project-3.png",
    tileAlt: "Rendered image of the print-in-place gimbal",
    dataCategory: "cad prototype 3d-print",
    
    title: "Print-In-Place Gimbal",
    subtitle: "3D-Printed Gimbal Mechanism",
    heroImage: "Assets/project-3.png",
    heroAlt: "Rendered image of the print-in-place gimbal",
    status: "complete",
    overview:
      "This short project explored the limits of print-in-place mechanisms. The goal was to design a two-axis gimbal that could be printed in one piece on a hobby FDM 3D printer, with no assembly and minimal post-processing.",
    designMotivation:
      "Gimbals are common in aerospace and robotics, but printing one fully assembled poses challenges due to clearances and support removal. I wanted to test my ability to design moving assemblies for additive manufacturing and to create a model that demonstrates the DoF of a gimbal.",
    problem:
      "Ensuring each axis had sufficient clearance to rotate freely while minimising backlash was critical. Printed tolerances vary by machine, and supports can fuse parts together. The geometry was therefore designed such that no support material was required.",
    solution:
      "The axes, about which each component rotates, are not traditional through axles, and are instead conical protrusions and recesses. This geometry allows for printing without the use of supports, while properly locating the components. I iterated upon the design, adjusting tolerances as needed, until the optimal tolerance was reached. The model serves as a tactile demonstration of gimbal mechanics.",
    skills: [
      "Parametric modelling in Fusion 360",
      "Design for additive manufacturing",
      "Rapid prototyping & testing",
      "Tolerance analysis"
    ],
    lessons:
      "Designing print-in-place assemblies taught me to think critically about printer capabilities and tolerances. Small design tweaks, like chamfers and gradual clearances, make the difference between parts fusing or moving freely. Rapid iteration with physical prototypes is invaluable.",
    gallery: [
      {
        src: "Assets/project-3.png",
        alt: "Render of the print-in-place gimbal"
      },
      {
        src: "Assets/gimbal-section.png",
        alt: "Cross section of the print-in-place gimbal showing the conical axes"
      },
      {
        src: "Assets/swivel.mp4",
        alt: "Animation showing the swivel motion of the gimbal"
      }
    ]
  },
  "custom-workbench": {
    tileTitle: "Custom Workbench",
    tileDescription: "A custom made workbench providing more space and allowing more ambitious projects. Designed and built with my brother.",
    tileImage: "Assets/project-4.png",
    tileAlt: "Photo of the custom timber workbench",
    dataCategory: "build",
    
    title: "Custom Workbench",
    subtitle: "Timber Fabrication Project",
    heroImage: "Assets/project-4.png",
    heroAlt: "Photo of the custom timber workbench",
    status: "complete",
    overview:
      "A sturdy, spacious workbench is the heart of any workshop. Together with my brother, I designed and built a custom bench to suit our space and projects, providing more area for assembly and storage than commercially available options.",
    designMotivation:
      "Off-the-shelf benches were either too small or lacked the rigidity needed for heavy projects. Building our own allowed us to tailor the dimensions and include features like a tool shelf and vice mounts while learning carpentry skills.",
    problem:
      "We had to work within the physical limits of the garage, primarily the two large poles in the middle, and source affordable materials. The bench needed to be level, strong enough to support heavy equipment and easy to assemble with basic tools.",
    solution:
      "Using simple 2D sketches, we planned a frame built from dimensional timber and plywood. Mortise-and-tenon style joints and carriage bolts provide stability. We measured twice and cut once to ensure all legs and stretchers were square. The final bench has ample storage underneath and has become the cornerstone of our workshop.",
    skills: [
      "Woodworking & joinery",
      "2D drafting & dimensioning",
      "Workshop safety",
      "Team collaboration"
    ],
    lessons:
      "Taking the time to plan and cut accurately avoids frustration later. Building something tangible with family was rewarding and improved my hands-on fabrication skills.",
    gallery: [
      {
        src: "Assets/project-4.png",
        alt: "Finished custom workbench"
      }
    ]
  },
  "omni-wheel-robot": {
    tileTitle: "OMNI-Wheel Robot",
    tileDescription: "A 3D-printed omni-directional robot with simple Arduino control.",
    tileImage: "Assets/project-5.png",
    tileAlt: "Completed OMNI-Wheel Robot",
    dataCategory: "cad prototype 3d-print build",
    
    title: "OMNI-Wheel Robot",
    subtitle: "An Omni-Directional Robot Using 3D-Printable Wheels",
    heroImage: "Assets/project-5.png",
    heroAlt: "Completed OMNI-Wheel Robot",
    status: "complete",
    overview:
      "A budget-friendly, omni-directional robot built using 3D-printed wheels, salvaged electronics, and an Arduino. The robot can move in any planar direction—forward, sideways, and diagonally—thanks to linked omni-wheels, despite not supporting rotation due to motor driver limitations.",
    designMotivation:
      "This project was motivated by a desire to experiment with unconventional drive systems and explore the mechanical principles behind omni-directional movement. I wanted to build something hands-on that combined 3D printing with real-world electronics—without relying on expensive hardware.",
    problem:
      "Traditional robots using fixed-direction wheels are limited in how they manoeuvre. Achieving smooth, multi-directional motion often requires complex control systems and expensive components. I wanted to explore how far I could get with minimal tools and a constrained budget.",
    solution:
      "Using 3D-printed omni-wheels and a basic two-channel motor driver, I created a mechanically simple robot where each side's wheels are linked. This allowed for planar movement across a surface. An Arduino handles basic motor control, with no rotation control due to the two-motor constraint. Despite the limited control, the robot is somewhat manoeuvrable and effective for demonstrating omni-directional motion. It primarily suffered from a lack of grip, which was solved using electrical tape around each wheel.",
    skills: [
      "3D Design & Printing",
      "Arduino Prototyping",
      "Basic Motor Control",
      "Resourceful Hacking",
      "Mechanical Assembly"
    ],
    lessons:
      "This project taught me how to work creatively within hardware limitations. I learned how omni-wheels function mechanically, how to repurpose old electronics. It also reinforced the value of iteration and physical prototyping.",
    gallery: [
      {
        src: "Assets/omni-wheel-closeup.png",
        alt: "Close-up of 3D-printed omni wheel"
      }
    ]
  }

};