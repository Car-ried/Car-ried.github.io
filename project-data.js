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
    dataCategory: "cad simulation prototype 3d-print build testing",
    
    title: "PROJECT TITLE",
    subtitle: "PROJECT SUB TITLE",
    heroImage: "Assets/project-X.png",
    heroAlt: "ALT TEXT",
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
    tileDescription: "Designed and built a custom carbon fibre intake for a Mk7.5 Golf GTI, developing skills in Fusion 360 forms, product design, 3D scanning, and composite fabrication.",
    tileImage: "Assets/project-1.png",
    tileAlt: "CAD rendering of the custom cold-air intake on a Golf GTI engine bay",
    dataCategory: "cad prototype 3d-print build",
    
    title: "Custom Cold-Air Intake",
    subtitle: "Mk7.5 Golf GTI Carbon Fibre Intake",
    heroImage: "Assets/project-1.png",
    heroAlt: "CAD rendering of the custom cold-air intake on a Golf GTI engine bay",
    overview:
      "This project involved designing and building a bespoke carbon-fibre cold-air intake for a Mk7.5 Golf GTI. The goal was to improve airflow into the turbocharger while practising advanced CAD modelling, reverse engineering and hands-on composite manufacturing techniques. Of course, there is always the benefit of it looking cool too.",
    designMotivation:
      "Factory intake systems are often a compromise between cost, noise reduction and ease of manufacture. As an enthusiast, I wanted to explore how custom components could unlock hidden performance while honing my design skills. A cold-air intake is a relatively self-contained system that offered an excellent opportunity to experiment with carbon-fibre lay-up and aerodynamic modelling.",
    problem:
      "The challenge was packaging the new intake within the tight confines of the engine bay without interfering with existing components. It needed to align with OEM mounting points, avoid heat sources and deliver a smooth, unrestricted path for air. Because carbon fibre is labour-intensive to rework, the design also had to be correct the first time.",
    solution:
      "I used a handheld 3D scanner to capture the geometry of the engine bay and imported the mesh into Fusion 360. Using the forms workspace I sculpted an intake shape that hugged the contours of the engine bay. The tooling for the carbon-fibre lay-up was 3D-printed, sanded and sealed. Multiple layers of carbon fabric were vacuum-bagged over the form, cured and then trimmed to final dimensions. The finished intake installs using stock hardware and dramatically improves induction sound and responsiveness.",
    skills: [
      "Fusion 360 forms & surface modelling",
      "3D scanning & reverse engineering",
      "Carbon-fibre lay-up & vacuum bagging",
      "Product design & prototyping"
    ],
    lessons:
      "Precise measurements and clearance studies are essential when designing parts to integrate into existing systems. Iterative prototyping helped avoid costly mistakes in composite fabrication. I gained confidence in working with carbon fibre and learned the importance of fibre orientation for structural integrity.",
    gallery: [
      {
        src: "Assets/project-1.png",
        alt: "CAD render of the cold-air intake"
      },
      {
        src: "placeholder_light_gray_block.png",
        alt: "Composite lay-up process (replace with your photo)"
      },
      {
        src: "placeholder_light_gray_block.png",
        alt: "Installed intake in the engine bay (replace with your photo)"
      }
    ]
  },
  "mmsf-tensile-load-limiter": {
    tileTitle: "MMSF Tensile Load Limiter",
    tileDescription: "Metal Matrix Syntactic Foams (MMSF's) are useful for their energy absorption capabilities. This testing apparatus was designed to integrate a shear pin mechanism allowing for the precise control of an activation threshold.",
    tileImage: "Assets/project-2.png",
    tileAlt: "CAD assembly of the MMSF tensile load limiter",
    dataCategory: "cad testing build",
    
    title: "MMSF Tensile Load Limiter",
    subtitle: "Energy Absorption Test Apparatus",
    heroImage: "Assets/project-2.png",
    heroAlt: "CAD assembly of the MMSF tensile load limiter",
    overview:
      "Metal Matrix Syntactic Foams (MMSFs) exhibit excellent energy absorption characteristics. I designed a testing apparatus that uses a shear-pin mechanism to precisely control when the specimen yields, allowing accurate measurement of the foam’s behaviour under load.",
    designMotivation:
      "The research group I was assisting lacked a reliable fixture to evaluate MMSFs in tension. Existing rigs either failed unpredictably or were too expensive. Designing a bespoke load limiter offered a chance to apply mechanical design principles and expand my knowledge of fracture mechanics.",
    problem:
      "The fixture needed to mount to standard testing machines while providing repeatable activation at a predetermined load. Material variability in MMSFs meant the limiter itself had to be adjustable. Safety was paramount since the device would be intentionally triggered to fail.",
    solution:
      "After analysing similar devices and consulting standards, I designed a modular aluminium frame to hold the sample and integrated a removable shear pin sized using simple tensile calculations. Simulation in ANSYS verified that stresses remained within acceptable limits. The apparatus was manufactured on a CNC mill and assembled with off-the-shelf hardware. Testing showed that the limiter activated within ±5 % of the desired load, providing consistent results and keeping operators safe.",
    skills: [
      "Mechanical design of test fixtures",
      "Finite element analysis in ANSYS",
      "Shear-pin sizing & failure analysis",
      "CNC machining & assembly"
    ],
    lessons:
      "This project reinforced the value of early simulations to identify stress concentrations before fabrication. I also learned to balance adjustability with simplicity; the final design uses modular pins rather than complex mechanisms. Collaborating with researchers broadened my understanding of material science and test protocol.",
    gallery: [
      {
        src: "Assets/project-2.png",
        alt: "CAD rendering of the load limiter"
      },
      {
        src: "placeholder_light_gray_block.png",
        alt: "Shear pin component close-up (replace with your photo)"
      }
    ]
  },
  "print-in-place-gimbal": {
    tileTitle: "Print-In-Place Gimbal",
    tileDescription: "A short project allowing for the a gimballing mechanism, similiar to those found in aerospace applications, to be 3D-Printed all at once, with little to no post processing required.",
    tileImage: "Assets/project-3.png",
    tileAlt: "Rendered image of the print-in-place gimbal",
    dataCategory: "cad prototype 3d-print",
    
    title: "Print-In-Place Gimbal",
    subtitle: "3D-Printed Gimbal Mechanism",
    heroImage: "Assets/project-3.png",
    heroAlt: "Rendered image of the print-in-place gimbal",
    overview:
      "This short project explored the limits of print-in-place mechanisms. The goal was to design a three-axis gimbal that could be printed in one piece on a hobby FDM 3D printer, with no assembly and minimal post-processing.",
    designMotivation:
      "Gimbals are common in aerospace and robotics, but printing one fully assembled poses challenges due to clearances and support removal. I wanted to test my ability to design moving assemblies for additive manufacturing and to create an educational model that demonstrates freedom of rotation.",
    problem:
      "Ensuring each axis had sufficient clearance to rotate freely while maintaining stiffness was tricky. Printed tolerances vary by machine, and supports can fuse parts together. The design also needed to orient well on the print bed to minimise overhangs and support material.",
    solution:
      "I started by sketching the kinematic arrangement of a traditional gimbal and then modelled concentric rings in Fusion 360. Chamfered edges and tapered gaps were added to prevent fusion. I iterated the design by printing small test coupons to dial in the clearance. The final print requires only a single support tree that snaps off easily, after which all three axes spin smoothly. The model serves as a tactile demonstration of gimbal mechanics.",
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
        src: "placeholder_light_gray_block.png",
        alt: "Printed gimbal demonstrating rotation (replace with your photo)"
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
    overview:
      "A sturdy, spacious workbench is the heart of any workshop. Together with my brother, I designed and built a custom bench to suit our space and projects, providing more area for assembly and storage than commercially available options.",
    designMotivation:
      "Off-the-shelf benches were either too small or lacked the rigidity needed for heavy projects. Building our own allowed us to tailor the dimensions and include features like a tool shelf and vice mounts while learning carpentry skills.",
    problem:
      "We had to work within the physical limits of the garage and source affordable materials. The bench needed to be level, strong enough to support heavy equipment and easy to assemble with basic tools.",
    solution:
      "Using simple 2D sketches, we planned a frame built from dimensional timber and plywood. Mortise-and-tenon style joints and carriage bolts provide stability. We measured twice and cut once to ensure all legs and stretchers were square. After assembly, the top was sanded and sealed for durability. The final bench has ample storage underneath and has become the cornerstone of our workshop.",
    skills: [
      "Woodworking & joinery",
      "2D drafting & dimensioning",
      "Workshop safety",
      "Team collaboration"
    ],
    lessons:
      "Taking the time to plan and cut accurately avoids frustration later. I learned how to select straight lumber, clamp assemblies and apply finishes. Building something tangible with family was rewarding and improved my hands-on fabrication skills.",
    gallery: [
      {
        src: "Assets/project-4.png",
        alt: "Finished custom workbench"
      },
      {
        src: "placeholder_light_gray_block.png",
        alt: "Workbench during assembly (replace with your photo)"
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
    overview:
      "A budget-friendly, omni-directional robot built using 3D-printed wheels, salvaged electronics, and an Arduino. The robot can move in any planar direction—forward, sideways, and diagonally—thanks to linked omni-wheels, despite not supporting rotation due to motor driver limitations.",
    designMotivation:
      "This project was motivated by a desire to experiment with unconventional drive systems and explore the mechanical principles behind omni-directional movement. I wanted to build something hands-on that combined 3D printing with real-world electronics—without relying on expensive hardware.",
    problem:
      "Traditional robots using fixed-direction wheels are limited in how they maneuver. Achieving smooth, multi-directional motion often requires complex control systems and expensive components. I wanted to explore how far I could get with minimal tools and a constrained budget.",
    solution:
      "Using 3D-printed omni-wheels and a basic two-channel motor driver, I created a mechanically simple robot where each side's wheels are linked. This allowed for fluid planar movement across a surface. An Arduino handles basic motor control, with no rotation control due to the two-motor constraint. Despite the limited control, the robot is highly maneuverable and effective for demonstrating omni-directional motion.",
    skills: [
      "3D Design & Printing",
      "Arduino Prototyping",
      "Basic Motor Control",
      "Resourceful Hacking",
      "Mechanical Assembly"
    ],
    lessons:
      "This project taught me how to work creatively within hardware limitations. I learned how omni-wheels function mechanically, how to repurpose old electronics, and how simplifying a control system doesn't mean sacrificing functionality. It also reinforced the value of iteration and physical prototyping.",
    gallery: [
      {
        src: "Assets/omni-wheel-closeup.png",
        alt: "Close-up of 3D-printed omni wheel"
      },
      {
        src: "Assets/omni-wheel-chassis.png",
        alt: "Chassis showing Arduino and motor driver mounted"
      }
    ]
  }

};