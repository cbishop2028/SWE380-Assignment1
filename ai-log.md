Project context: -Purpose: present my skills and projects to internship reviewers. - Existing system: an HTML/CSS/JavaScript portfolio template. -Allowed changes: content, styling, and small front-end corrections only. - Do not add: a backend, login system, analytics tracker, or external data collection. Acceptance criteria: All information has been replaced by my information.

The portfolio is visible and looks good on all types of devices.
There is no old or irrelevant information left in the portfolio.
There are projects and a resume on display that showcase my skills and knowledge.
No private information is given or shown in the portfolio.
This assignment will only be a website and will be accessible to anyone who wants access. Constraints: - Do not invent education, work history, awards, links, or technical skill. - Preserve required license and attribution. - Keep the site usable on mobile screens. - Maintain readable contrast, keyboard navigation, meaningful link text, and useful image alternative text. - Do not expose private information. First provide: 1. a file-by-file implementation plan. 2. Any assumptions or risks. 3. A proposed test checklist. 4. Any questions that must be answered before implementation. --- Do not modify files until the plan is reviewed

1. File-by-file implementation plan
Because the repository contents have not been provided, this plan uses common template filenames. I will map it to the actual structure after reviewing the files.
index.html or other HTML pages

Identify every template placeholder and instance of old or irrelevant information.
Replace content only with information you provide or that is already verified in the repository:
Name and professional headline
Short introduction
Education
Work or relevant experience
Projects
Technical skills
Resume link
Public contact and professional links


Remove sections that cannot be completed with verified information rather than inventing content.
Ensure each project includes, when available:
Project name
Concise description
Technologies actually used
Your contribution
Public repository or demo link
Useful screenshot alternative text


Improve page structure and accessibility:
One descriptive first-level heading
Logical heading order
Semantic landmarks such as header, nav, main, and footer
Meaningful link text instead of “click here”
Proper button and link elements
Visible keyboard focus
Accurate image alternative text
A skip-to-content link if appropriate
Correct page title and metadata


Add mobile viewport metadata if missing.
Remove obsolete comments, placeholder links, dead navigation, and unused template sections.
Preserve required copyright, license, and attribution notices.

css/, styles.css, or equivalent stylesheets

Preserve the template’s overall design unless a change is needed for usability.
Correct responsive behavior using existing breakpoints or small media-query changes.
Prevent horizontal scrolling and content overflow.
Make typography, spacing, navigation, cards, images, and buttons usable across narrow and wide screens.
Check readable foreground/background contrast.
Add or improve visible :focus-visible styles.
Avoid hover-only interactions.
Respect reduced-motion preferences where animations exist.
Ensure images and embedded content scale within their containers.
Remove only styles confirmed to be obsolete after the HTML review.

js/, script.js, or equivalent JavaScript

Review existing scripts for small front-end defects, including:
Mobile navigation
Anchor scrolling
Project filtering
Modal or menu keyboard behavior
Missing-element errors


Remove or disable analytics, trackers, external data collection, login logic, or network requests if present.
Avoid adding dependencies or large new features.
Keep the site functional when optional elements are absent.
Ensure interactive controls can be used by keyboard and expose suitable accessible states, such as aria-expanded, when needed.

assets/images/ or equivalent

Replace template headshots, screenshots, logos, and decorative images with approved assets.
Remove unused or irrelevant template images where safe.
Use descriptive filenames when practical.
Optimize large images for web delivery without visibly degrading them.
Set appropriate dimensions or aspect ratios to reduce layout shift.
Distinguish informative images from decorative ones:
Informative images receive useful alternative text.
Decorative images use empty alternative text.



Resume file, such as assets/resume.pdf

Replace the template resume with your approved public resume.
Check that the visible label clearly identifies it as a resume.
Confirm the PDF opens and downloads correctly.
Review it separately for private information before publication.
Avoid exposing a home address, personal phone number, student or employee identification number, private email address, signatures, or other unnecessary personal details.

Project data, such as projects.json
If the existing template stores content in a local data file:

Replace all sample project entries with verified information.
Remove unused fields and placeholder records only when this does not break the template.
Validate local paths and public URLs.
Do not introduce external data loading.

Site metadata and icons
For files such as manifest.json, favicon.*, or metadata in the HTML:

Replace template name, description, author, and icons where approved.
Remove outdated social-preview metadata.
Use only supplied public images and URLs.
Ensure no template author metadata is removed when required by its license.

README.md

Update setup and preview instructions if needed.
Describe the site accurately as a public static portfolio.
Preserve required license and attribution language.
Remove irrelevant template instructions, sample credentials, or obsolete deployment notes.

LICENSE, attribution, or notice files

Do not modify or remove required license terms.
Retain notices required by the template, fonts, icons, libraries, and other assets.
Document any attribution that must also remain visible on the website.

Build and deployment files
Examples include package.json, bundler configuration, and hosting configuration.

Make only changes necessary to keep the existing static site working.
Do not add a backend, login, database, tracker, or collection service.
Preserve existing deployment behavior unless a correction is required.
Check dependencies and scripts for unexpected analytics or network behavior.
Avoid framework migrations or unrelated upgrades.


2. Assumptions and risks
Assumptions

The existing template and its assets are licensed for this use.
The final site will remain static and publicly accessible.
You will provide or approve all personal content, project details, links, images, and the resume.
“All types of devices” means responsive support for common phone, tablet, laptop, and desktop viewport sizes—not every device ever released.
Existing tooling and architecture should be retained.
Sections lacking verified content may be removed rather than filled with invented information.
Public contact information is optional unless required by the assignment.

Risks

Missing source files: A precise file-by-file plan requires the actual file tree and source files.
Template remnants: Old information may exist in metadata, image filenames, comments, JavaScript data, hidden elements, the resume, or social-preview tags—not only visible page content.
Privacy exposure: A resume or document may include a home address, private phone number, personal email, embedded metadata, or other information unsuitable for a public site.
Unverified claims: Project technologies, roles, metrics, dates, education, and skills must be verified by you.
Broken links: Repository, demo, social, and resume links may be private, malformed, or inaccessible without an account.
Licensing: Removing template credits or third-party notices may violate license terms.
Accessibility: Template animations, custom menus, icon-only links, modals, or color palettes may need correction.
Responsive regressions: Long project titles, URLs, navigation labels, and screenshots can cause overflow.
Asset ownership: Images, logos, project screenshots, fonts, and icons must be approved for public use.
Public indexing: Once deployed, content may be indexed, copied, cached, or archived even if later removed.
Scope limitation: Small front-end corrections may not fully repair a template with major architectural or accessibility defects. Any needed work beyond the permitted scope should be documented rather than implemented without approval.


3. Proposed test checklist
Content and privacy

 Name, headline, introduction, education, experience, projects, and skills are accurate.
 Every factual claim comes from user-provided or approved information.
 No sample person, company, school, award, testimonial, metric, or project remains.
 No placeholder text such as “Lorem ipsum,” “Your Name,” or example.com remains.
 No obsolete content remains in hidden elements, comments, metadata, or local data files.
 Resume is current, approved, and publicly appropriate.
 No home address, private phone number, identification number, credentials, private repository URL, or unnecessary personal detail is exposed.
 Images and documents contain no unintended private information.
 All public links and usernames have been approved.

Projects and resume

 Multiple approved projects are visible, or the agreed number is present.
 Every project description and technology list is accurate.
 Each project clearly communicates skills or knowledge.
 Demo and repository links work and are publicly accessible where included.
 Missing demos or repositories are not represented by fake or empty links.
 Resume link opens the intended file.
 Resume is understandable without relying on the portfolio page.

Responsive layout
Test at representative widths, including approximately:

 320 pixels
 375 pixels
 768 pixels
 1024 pixels
 1440 pixels and above

At each width:

 No unexpected horizontal scrolling.
 Navigation remains accessible.
 Text remains readable without zooming.
 Images do not overflow or become excessively distorted.
 Project cards and buttons do not overlap.
 Long text and links wrap appropriately.
 Content remains usable at 200% browser zoom.
 Both portrait and landscape orientations are reasonable.

Keyboard and interaction

 All links, buttons, menus, and controls are reachable by keyboard.
 Focus order follows the visual and logical reading order.
 Focus is clearly visible.
 No keyboard trap exists.
 Mobile navigation can be opened and closed by keyboard.
 Interactive elements use the correct semantic HTML.
 External links and downloads are labeled clearly.
 Hover effects are not required to obtain essential information.

Accessibility

 Page has an informative title.
 Language is declared in the HTML.
 Heading hierarchy is logical.
 Semantic regions are present.
 A skip link is present if repeated navigation warrants one.
 Informative images have concise, useful alternative text.
 Decorative images have empty alternative text.
 Icon-only links have accessible names.
 Text and interface controls meet appropriate contrast targets.
 Content does not rely solely on color.
 Motion respects prefers-reduced-motion where relevant.
 Automated checks with browser accessibility tools show no serious errors.
 A manual screen-reader spot check covers navigation, headings, projects, and the resume link.

Technical quality

 Browser console shows no errors during normal use.
 Internal paths work from the deployed site, not only a local machine.
 No missing images, stylesheets, scripts, fonts, or resume files.
 No analytics, trackers, cookies, login flow, forms that collect data, or external data requests were added.
 Any existing unexpected collection or tracking code is identified and removed with approval.
 HTML and CSS pass reasonable validation, or remaining warnings are documented.
 Images are appropriately compressed and sized.
 Required license and attribution remain intact.
 Site works with JavaScript disabled where feasible; essential static content remains readable.
 Test in current Chromium, Firefox, and Safari or equivalent browser environments.

Final acceptance review

 Search the entire repository for template names, sample text, placeholder URLs, and old contact information.
 Compare every page and downloadable file against the approved content.
 Verify the deployed public version, not only the local preview.
 Confirm all five acceptance criteria.
 Record any known limitation that remains within the allowed scope.


4. Questions that must be answered before implementation

Please provide the repository files or a file tree plus the relevant source files.
What exact approved content should replace the template content? At minimum:
Display name
Professional headline
Short biography
Education
Work or relevant experience
Verified skills
Project names, descriptions, technologies, contributions, and dates if displayed
Approved repository and demo links
Approved public contact or professional profile links


Please provide the public-safe resume file and confirm that its contents are approved for unrestricted publication.
Which images and project screenshots are approved, and what should each image communicate?
Which existing visual elements must remain, and are there branding or assignment requirements?
What template license and attribution requirements apply? If unknown, I will inspect the repository.
What deployment target or base path is used? This affects relative links and asset paths.
Are there assignment-specific required sections, wording, filenames, or browser requirements not listed here?

No files will be modified until this plan is reviewed and implementation inputs are supplied.

Required answered questions: -Display name: Connor Bishop - Professional headline: Hello! I am a Junior Computer Science student at the University of Michigan-Flint. My favorite aspects of Computer Science are Object-Oriented programming, web development, and computer networks. - Short biography:  I am a Computer Science student studying at the University of Michigan-Flint. I am a web development intern in Lansing, Michigan. I graduate in December of 2027. - Work or relevant experience: I will attach my resume which will have the correct information. I will also attach the url for the repository. Approved public contact or professional profile links: (810)-618-2162 professional links: www.linkedin.com/in/connor-j-bishop here is the url for the repository: https://github.com/cbishop2028/SWE380-Assignment1.git - here is the repository for a digital logic design simulator that will be one of my projects displayed.  - I will also be changing the amount of projects that I would like to be on display. I would now like this number to be only 1.
Thank you. I’ll revise the approved implementation inputs as follows.
Approved portfolio content

Display name: Connor Bishop
Headline:“Hello! I am a Junior Computer Science student at the University of Michigan-Flint. My favorite aspects of Computer Science are Object-Oriented programming, web development, and computer networks.”
Biography:“I am a Computer Science student studying at the University of Michigan-Flint. I am a web development intern in Lansing, Michigan. I graduate in December of 2027.”
Public contact:
Phone: (810) 618-2162
LinkedIn: https://www.linkedin.com/in/connor-j-bishop
Resume also contains connobi@umich.edu


Project count: One
Project: Digital Logic Simulator
Portfolio repository:https://github.com/cbishop2028/SWE380-Assignment1.git

Digital Logic Simulator content
Based on the resume:

Date: Spring 2025
Role: Team Leader
Description: Led a team in designing and implementing a command-line digital logic simulator in C++.
Technical details: Used priority queues, pointers, operator overloading, and file parsing to implement simulation logic.
Leadership: Coordinated team collaboration to produce functional behavior and accurate logic flow.

I will not display the Data Structure Projects or Tic Tac Toe project because the requested project count is now one.
Resume content approved for use
The supplied resume verifies:

University of Michigan–Flint
Bachelor of Science in Computer Science, ABET-accredited
Expected graduation: December 2027
GPA: 3.4
President’s Scholarship
Relevant coursework listed in the resume
Menards employment beginning June 2026
Taco Bell employment from April 2022 through June 2026
Programming, technical, and software skills listed in the resume
Coding Club, varsity basketball, and LeetCode activities

I will use only information supplied here or already present and verifiable in the repository.
Privacy note
This is a public website. The supplied phone number and university email address will be available to anyone and may be indexed, copied, or used for unsolicited contact.
The phone number was explicitly approved for public display. Before implementation, the remaining required decision is whether connobi@umich.edu should also appear publicly on the webpage and resume. If not, the public resume should be redacted or replaced before deployment.
The statements about being a junior and a web development intern in Lansing are not reflected in the supplied resume. I can treat your direct statement as authorization to use them, but the internship should not be expanded with an employer, dates, duties, or technologies unless you supply those details.
Remaining implementation blocker
I cannot inspect or modify files from the GitHub URL with the tools currently available in this conversation. The repository files need to be uploaded here, ideally as a ZIP archive, along with the actual resume PDF intended for the site. After receiving them, I can map the approved plan to exact filenames while preserving the existing license and attribution.
No files have been modified.
Is there any other way to give you access to the repositories or my resume considering I cannot upload .zip files
Yes. You have several alternatives:
Repository
Since ZIP uploads are unavailable, you can provide the code by:

Uploading files individually

Start with the repository’s file tree.
Then upload the HTML, CSS, JavaScript, project-data, README, and license files.
Include images only if they need review or replacement.


Pasting files into the conversationUse a separate fenced code block for each file and label its path:
File: index.html
<!-- file contents -->

Installing or enabling a GitHub connectorIf your U-M GPT interface offers a GitHub connector, it may allow direct repository access. This conversation currently has no GitHub or Web Search connector available, so I cannot open or clone the supplied URL.

Sharing a smaller text bundleIf allowed, combine text-based files into one .txt or .md file with clear separators:
===== index.html =====
...

===== css/style.css =====
...

===== js/script.js =====
...


Do not include credentials, access tokens, private keys, environment files, or other secrets.
Resume
I already have the parsed text, so I can use it to update the portfolio’s HTML content. To place a downloadable resume on the finished site, however, the repository needs the actual public-safe PDF.
Possible approaches:

Upload the PDF directly if PDF uploads are supported.
Add the PDF to the GitHub repository yourself and tell me its exact path, such as assets/Connor_Bishop_Resume.pdf.
Provide the resume in an accepted document format, then later export it to PDF and place it at the agreed path.

Before publishing, decide whether the public PDF should include your phone number and U-M email. You have approved the phone number for display, but have not yet explicitly approved the email for public display.
SWE380-DLDrepo.pdfPDF DocumentSWE380-repositoryWebApp.pdfPDF DocumentThe public pdf is allowed to show both my email and phone number. Here are the repositories as a pdf files:
I received both repository exports and can now inspect the relevant source text. I also have the resume content, and your email and phone number are approved for public display.
Repository findings
The portfolio currently contains substantial template content that must be removed:

Richard Hanrick’s identity and contact information
Birthday and Sacramento location
Unverified services, clients, and testimonials
Nine sample projects
Sample education, experience, skills, and blog posts
A nonfunctional contact form
A Google Maps embed
Template social links
Template funding configuration
Template README badges and promotional links

The project repository verifies that the Digital Logic Simulator:

Is written in C++
Uses object-oriented classes for gates, wires, and events
Parses circuit and vector text files
Uses a priority queue for event processing
Supports AND, OR, NOT, NAND, NOR, XOR, and XNOR gates
Models gate delays
Produces command-line wire traces
Includes multiple circuit test inputs
Was developed with a Visual Studio C++ project

Updated exact implementation plan
index.html
I will:

Change the title to Connor Bishop | Computer Science Portfolio.
Replace the template identity with Connor Bishop.
Show the supplied headline in the About section.
Show:
connobi@umich.edu
(810) 618-2162
LinkedIn with meaningful text


Remove the birthday and specific-location fields.
Remove all unverified Facebook, Twitter, and Instagram links.
Remove the template avatar reference unless an approved portrait or neutral replacement is supplied.
Keep only these navigation sections:
About
Resume
Project


Remove:
Services
Testimonials and modal
Clients
Blog
Contact form
Google Maps embed


Populate Resume with verified:
Education
Menards and Taco Bell experience
Technical skills
Relevant coursework
Activities and leadership


Add a clearly labeled downloadable-resume link pointing to a local PDF path.
Replace percentage-based skill bars, because no proficiency percentages were supplied, with readable skill groups.
Replace all nine projects with one Digital Logic Simulator entry.
Link that project to its repository once its public URL is confirmed.
Include a verified project description based on the resume and source code.
Add appropriate accessible names, meaningful link text, and button states.
Add a skip-to-content link.
Preserve the template’s copyright notice through the license and source attribution.

assets/css/style.css
I will:

Keep the current dark visual design and responsive breakpoints.
Remove or leave unused template CSS only where doing so is safe; functionality takes priority over aggressive cleanup.
Add styling for:
Skip link
Resume download link
Skill groups
Project description and technology list


Improve visible keyboard focus.
Add focus behavior equivalent to project-card hover behavior.
Add reduced-motion support.
Correct the invalid font-weight: var(--fw-3) declaration.
Protect narrow layouts from overflow caused by the long headline and contact information.
Allow the single project to use an appropriate width instead of an unnecessarily sparse three-column grid.

assets/js/script.js
I will simplify it to retain only:

Sidebar contact expansion
Navigation between About, Resume, and Project
Keyboard-accessible state updates, including aria-expanded

I will remove JavaScript for:

Testimonials and modal
Project filtering
Contact-form validation
Removed sections

This will also prevent null-element runtime errors after the unused HTML is removed.
assets/Connor_Bishop_Resume.pdf

The actual resume PDF should be added at this path.
The webpage will use a local link with a descriptive download label.
The supplied resume text is approved, including the email and phone number.

The PDF export of repository content is not itself a usable substitute for the resume PDF asset.
Project image
The repository export contains no project screenshot. I will avoid falsely presenting a template image as the simulator. The project card can be implemented without an image, or you can later add an approved screenshot such as:
assets/images/digital-logic-simulator.png
A useful alternative text would be:

Command-line output from the C++ Digital Logic Simulator showing simulated wire traces over time.

README.md
I will replace promotional template content with:

Portfolio purpose
Static HTML/CSS/JavaScript description
Local viewing instructions
Project structure
Template attribution
MIT license reference

LICENSE

No changes.
Retain the 2022 codewithsadee MIT copyright and license.

.github/FUNDING.yml

Remove it because it advertises the template author’s Patreon and is irrelevant to this portfolio.
License attribution will remain in LICENSE, source comments, and README.

content-nodes.md
Update it with the approved public content and one project, or remove it if it is only an obsolete planning artifact. I recommend updating it if the assignment expects a content record.
index.txt
This duplicates all old template text. It should either be regenerated with Connor’s content or removed. I recommend removing it unless required by the assignment because it is not used by the website and retaining it would violate the requirement that no old information remain.
ai-log.md
Preserve it if required as an assignment record. It already documents the planning interaction. If retained, it should not be treated as website content.
website-demo-image/

Remove Thumbs.db.
The template screenshots should be replaced with current screenshots after implementation or removed to avoid displaying obsolete template content in repository documentation.

Two material limitations

No actual files can be written from the parsed PDF. The PDF gives me enough text to prepare exact replacement code, but this conversation has no repository/file-writing connector. I can provide complete replacement contents or patches for you to apply.
The Digital Logic Simulator’s public repository URL has not been identified. The URL supplied earlier, SWE380-Assignment1.git, appears to be the portfolio repository. I will not invent a second repository URL.

No repository files have been modified. The plan is now mapped to the actual repository and remains ready for review.
Please provide complete replacement contents for the repository. I will add the applicable files into a new branch in the github repo. There is no need to modify the digital logic simulator in any way. All that is needed is the web application
Below are complete replacement contents for the web application. The Digital Logic Simulator repository does not need changes.
Resulting repository structure
.
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── script.js
│   └── Connor_Bishop_Resume.pdf
├── ai-log.md
├── content-nodes.md
├── index.html
├── LICENSE
└── README.md
Delete these obsolete items:
.github/FUNDING.yml
index.txt
website-demo-image/
Also delete any unused template image directory if one exists, such as assets/images/. The replacement page does not require it.
Place your actual resume PDF at:
assets/Connor_Bishop_Resume.pdf
The project link below uses the portfolio repository URL you supplied because no separate public URL for the Digital Logic Simulator was provided. If the simulator has a different repository, replace the marked URL in index.html.

index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta
    name="description"
    content="The computer science portfolio of Connor Bishop, a student at the University of Michigan-Flint."
  >
  <meta name="author" content="Connor Bishop">

  <title>Connor Bishop | Computer Science Portfolio</title>

  <link rel="stylesheet" href="./assets/css/style.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  >

  <script
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
  ></script>
  <script
    nomodule
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
  ></script>
</head>

<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <main class="site-layout">
    <aside class="sidebar" aria-labelledby="profile-name" data-sidebar>
      <div class="sidebar-summary">
        <div class="initials-avatar" aria-hidden="true">CB</div>

        <div class="profile-summary">
          <h1 class="profile-name" id="profile-name">Connor Bishop</h1>
          <p class="profile-title">Computer Science Student</p>
        </div>

        <button
          class="contact-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="contact-details"
          data-sidebar-btn
        >
          <span>Show contact information</span>
          <ion-icon name="chevron-down-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <div class="sidebar-details" id="contact-details" data-sidebar-details>
        <div class="separator"></div>

        <ul class="contact-list">
          <li class="contact-item">
            <div class="icon-box" aria-hidden="true">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-content">
              <span class="contact-label">Email</span>
              <a class="contact-link" href="mailto:connobi@umich.edu">
                connobi@umich.edu
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box" aria-hidden="true">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-content">
              <span class="contact-label">Phone</span>
              <a class="contact-link" href="tel:+18106182162">
                (810) 618-2162
              </a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box" aria-hidden="true">
              <ion-icon name="school-outline"></ion-icon>
            </div>

            <div class="contact-content">
              <span class="contact-label">University</span>
              <span class="contact-text">University of Michigan-Flint</span>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li>
            <a
              class="social-link"
              href="https://www.linkedin.com/in/connor-j-bishop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin" aria-hidden="true"></ion-icon>
              <span>Connor Bishop on LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="main-content" id="main-content">
      <nav class="navbar" aria-label="Portfolio sections">
        <ul class="navbar-list">
          <li>
            <button
              class="navbar-link active"
              type="button"
              aria-controls="about"
              aria-selected="true"
              data-nav-link="about"
            >
              About
            </button>
          </li>

          <li>
            <button
              class="navbar-link"
              type="button"
              aria-controls="resume"
              aria-selected="false"
              data-nav-link="resume"
            >
              Resume
            </button>
          </li>

          <li>
            <button
              class="navbar-link"
              type="button"
              aria-controls="project"
              aria-selected="false"
              data-nav-link="project"
            >
              Project
            </button>
          </li>
        </ul>
      </nav>

      <article
        class="page-panel active"
        id="about"
        tabindex="-1"
        data-page="about"
      >
        <header>
          <h2 class="section-title">About me</h2>
        </header>

        <section class="about-introduction" aria-labelledby="introduction-title">
          <h3 class="visually-hidden" id="introduction-title">Introduction</h3>

          <p class="headline">
            Hello! I am a Junior Computer Science student at the University of
            Michigan-Flint. My favorite aspects of Computer Science are
            Object-Oriented programming, web development, and computer networks.
          </p>

          <p>
            I am a Computer Science student studying at the University of
            Michigan-Flint. I am a web development intern in Lansing, Michigan.
            I graduate in December of 2027.
          </p>
        </section>

        <section class="overview-section" aria-labelledby="interests-title">
          <h3 class="subsection-title" id="interests-title">
            Areas of interest
          </h3>

          <ul class="interest-grid">
            <li class="content-card">
              <div class="icon-box large-icon" aria-hidden="true">
                <ion-icon name="cube-outline"></ion-icon>
              </div>

              <div>
                <h4>Object-Oriented Programming</h4>
                <p>
                  Designing programs with classes, encapsulation, and reusable
                  components.
                </p>
              </div>
            </li>

            <li class="content-card">
              <div class="icon-box large-icon" aria-hidden="true">
                <ion-icon name="code-slash-outline"></ion-icon>
              </div>

              <div>
                <h4>Web Development</h4>
                <p>
                  Building usable and responsive experiences with HTML, CSS,
                  and JavaScript.
                </p>
              </div>
            </li>

            <li class="content-card">
              <div class="icon-box large-icon" aria-hidden="true">
                <ion-icon name="git-network-outline"></ion-icon>
              </div>

              <div>
                <h4>Computer Networks</h4>
                <p>
                  Studying how computers communicate and exchange information
                  across networks.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>

      <article
        class="page-panel"
        id="resume"
        tabindex="-1"
        hidden
        data-page="resume"
      >
        <header class="section-header">
          <h2 class="section-title">Resume</h2>

          <a
            class="primary-link"
            href="./assets/Connor_Bishop_Resume.pdf"
            download="Connor_Bishop_Resume.pdf"
          >
            <ion-icon name="download-outline" aria-hidden="true"></ion-icon>
            <span>Download Connor Bishop's resume (PDF)</span>
          </a>
        </header>

        <section class="timeline" aria-labelledby="education-title">
          <div class="timeline-heading">
            <div class="icon-box" aria-hidden="true">
              <ion-icon name="school-outline"></ion-icon>
            </div>
            <h3 id="education-title">Education</h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4>University of Michigan-Flint</h4>
              <p class="timeline-date">Expected December 2027</p>
              <p>
                Bachelor of Science in Computer Science, ABET-accredited.
                GPA: 3.4. President's Scholarship Award.
              </p>
            </li>
          </ol>
        </section>

        <section class="timeline" aria-labelledby="experience-title">
          <div class="timeline-heading">
            <div class="icon-box" aria-hidden="true">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3 id="experience-title">Experience</h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4>Order Pickup and Delivery Team Member — Menards</h4>
              <p class="timeline-date">June 2026–Present · Clio, Michigan</p>
              <ul class="detail-list">
                <li>
                  Operate forklifts and order selectors to retrieve, stage, and
                  load merchandise for customer pickup and delivery.
                </li>
                <li>
                  Fulfill online and in-store orders using inventory management
                  and order-processing software.
                </li>
                <li>
                  Assist customers, verify pickup documentation, and load
                  merchandise safely.
                </li>
              </ul>
            </li>

            <li class="timeline-item">
              <h4>Shift Lead — Taco Bell</h4>
              <p class="timeline-date">April 2022–June 2026 · Flushing, Michigan</p>
              <ul class="detail-list">
                <li>
                  Supervised team operations and supported compliance with
                  quality and safety standards.
                </li>
                <li>
                  Trained and mentored new employees to meet performance
                  expectations.
                </li>
                <li>
                  Resolved customer concerns and maintained accurate shift
                  records.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section class="skills-section" aria-labelledby="skills-title">
          <h3 class="subsection-title" id="skills-title">Skills</h3>

          <div class="skills-grid">
            <section class="content-card skill-card" aria-labelledby="programming-title">
              <h4 id="programming-title">Programming</h4>
              <ul class="tag-list">
                <li>C++</li>
                <li>SQL</li>
                <li>R</li>
                <li>Object-Oriented Design</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Vim</li>
              </ul>
            </section>

            <section class="content-card skill-card" aria-labelledby="technical-title">
              <h4 id="technical-title">Technical knowledge</h4>
              <ul class="tag-list">
                <li>Data Structures</li>
                <li>Digital Logic Design</li>
                <li>Computer Networks</li>
                <li>Database Design</li>
              </ul>
            </section>

            <section class="content-card skill-card" aria-labelledby="tools-title">
              <h4 id="tools-title">Software and tools</h4>
              <ul class="tag-list">
                <li>Quartus II</li>
                <li>wxWidgets</li>
                <li>Microsoft Office</li>
                <li>Linux/Unix</li>
              </ul>
            </section>
          </div>
        </section>

        <section class="coursework-section" aria-labelledby="coursework-title">
          <h3 class="subsection-title" id="coursework-title">
            Relevant coursework
          </h3>

          <ul class="tag-list coursework-list">
            <li>Digital Logic Design</li>
            <li>Object-Oriented Programming</li>
            <li>Data Structures</li>
            <li>C++ Programming</li>
            <li>Computer Networks</li>
            <li>Database Design</li>
            <li>Computer Architecture</li>
            <li>Introduction to Linux/Unix</li>
            <li>Discrete Structures</li>
            <li>Physics I and II</li>
          </ul>
        </section>

        <section class="activities-section" aria-labelledby="activities-title">
          <h3 class="subsection-title" id="activities-title">
            Activities and leadership
          </h3>

          <ul class="activity-list">
            <li>
              <strong>University of Michigan-Flint Coding Club:</strong>
              Member, 2024–Present
            </li>
            <li>
              <strong>Varsity Basketball:</strong>
              Team Captain, September 2024–March 2025
            </li>
            <li>
              <strong>LeetCode:</strong>
              Independent algorithmic problem-solving practice
            </li>
          </ul>
        </section>
      </article>

      <article
        class="page-panel"
        id="project"
        tabindex="-1"
        hidden
        data-page="project"
      >
        <header>
          <h2 class="section-title">Project</h2>
        </header>

        <section class="project-card" aria-labelledby="simulator-title">
          <div class="project-visual" aria-hidden="true">
            <ion-icon name="hardware-chip-outline"></ion-icon>
          </div>

          <div class="project-content">
            <p class="project-meta">C++ · Spring 2025 · Team Leader</p>
            <h3 id="simulator-title">Digital Logic Simulator</h3>

            <p>
              Led a team in designing and implementing a command-line digital
              logic simulator in C++. The program parses circuit and vector
              files, schedules events with a priority queue, models gate
              propagation delays, and prints wire traces over simulated time.
            </p>

            <p>
              The implementation uses object-oriented classes for gates, wires,
              and events. It supports AND, OR, NOT, NAND, NOR, XOR, and XNOR
              gates and includes multiple circuit inputs for testing.
            </p>

            <h4>Skills demonstrated</h4>
            <ul class="tag-list">
              <li>C++</li>
              <li>Object-Oriented Design</li>
              <li>Priority Queues</li>
              <li>Pointers</li>
              <li>Operator Overloading</li>
              <li>File Parsing</li>
              <li>Digital Logic</li>
              <li>Team Leadership</li>
            </ul>

            <p class="project-link-note">
              The repository link below currently points to the supplied
              portfolio repository. Replace it if the simulator has a separate
              public repository.
            </p>

            <a
              class="primary-link"
              href="https://github.com/cbishop2028/SWE380-Assignment1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github" aria-hidden="true"></ion-icon>
              <span>View the project repository on GitHub</span>
            </a>
          </div>
        </section>
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <p>
      Portfolio content © 2026 Connor Bishop. Original vCard template © 2022
      codewithsadee and used under the MIT License.
    </p>
  </footer>

  <script src="./assets/js/script.js"></script>
</body>
</html>

assets/css/style.css
/*
 * Connor Bishop portfolio
 * Based on the vCard Personal Portfolio template.
 * Original template copyright 2022 @codewithsadee.
 * Licensed under the MIT License; see ../../LICENSE.
 */

:root {
  --bg-gradient-card:
    linear-gradient(
      135deg,
      hsla(45, 100%, 71%, 0.08),
      hsla(240, 2%, 13%, 0) 45%
    ),
    hsl(240, 2%, 13%);

  --border-gradient:
    linear-gradient(
      to bottom right,
      hsl(0, 0%, 27%),
      hsla(0, 0%, 27%, 0)
    );

  --accent-gradient:
    linear-gradient(
      to right,
      hsl(45, 100%, 72%),
      hsl(35, 100%, 68%)
    );

  --jet: hsl(0, 0%, 25%);
  --onyx: hsl(240, 1%, 17%);
  --eerie-black-1: hsl(240, 2%, 13%);
  --eerie-black-2: hsl(240, 2%, 12%);
  --smoky-black: hsl(0, 0%, 7%);
  --white: hsl(0, 0%, 98%);
  --light-gray: hsl(0, 0%, 84%);
  --muted: hsl(0, 0%, 72%);
  --accent: hsl(45, 100%, 72%);
  --accent-dark: hsl(42, 76%, 55%);

  --font-family: "Poppins", sans-serif;

  --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.25);

  --transition: 180ms ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-family);
  scroll-behavior: smooth;
}

body {
  min-width: 280px;
  color: var(--light-gray);
  background: var(--smoky-black);
  line-height: 1.6;
}

button,
a {
  font: inherit;
}

button {
  border: 0;
}

a {
  color: inherit;
}

img,
svg,
ion-icon {
  display: block;
}

ul,
ol {
  list-style: none;
}

::selection {
  color: var(--smoky-black);
  background: var(--accent);
}

:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
}

.skip-link {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  padding: 10px 16px;
  color: var(--smoky-black);
  font-weight: 600;
  text-decoration: none;
  background: var(--accent);
  border-radius: 8px;
  transform: translateY(-180%);
  transition: transform var(--transition);
}

.skip-link:focus {
  transform: translateY(0);
}

.site-layout {
  min-width: 0;
  margin: 15px 12px 85px;
}

.sidebar,
.page-panel {
  position: relative;
  z-index: 1;
  padding: 15px;
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  box-shadow: var(--shadow-1);
}

.sidebar {
  max-height: 112px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: max-height 500ms ease-in-out;
}

.sidebar.active {
  max-height: 535px;
}

.sidebar-summary {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 0;
}

.initials-avatar {
  display: grid;
  flex: 0 0 70px;
  width: 70px;
  height: 70px;
  place-items: center;
  color: var(--accent);
  font-size: 24px;
  font-weight: 600;
  background: linear-gradient(
    to bottom right,
    hsl(240, 1%, 25%),
    hsl(0, 0%, 19%)
  );
  border-radius: 20px;
}

.profile-summary {
  min-width: 0;
}

.profile-name {
  margin-bottom: 8px;
  color: var(--white);
  font-size: clamp(1rem, 6vw, 1.25rem);
  font-weight: 500;
  line-height: 1.25;
  overflow-wrap: anywhere;
}

.profile-title {
  display: inline-block;
  max-width: 100%;
  padding: 4px 10px;
  color: var(--white);
  font-size: 0.68rem;
  background: var(--onyx);
  border-radius: 8px;
  overflow-wrap: anywhere;
}

.contact-toggle {
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 2;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  color: var(--accent);
  cursor: pointer;
  background: var(--border-gradient);
  border: 1px solid var(--jet);
  border-radius: 0 15px;
  box-shadow: var(--shadow-2);
}

.contact-toggle::before {
  position: absolute;
  z-index: -1;
  content: "";
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
}

.contact-toggle:hover,
.contact-toggle:focus-visible {
  color: var(--smoky-black);
  background: var(--accent-gradient);
}

.contact-toggle:hover::before,
.contact-toggle:focus-visible::before {
  background: var(--accent);
}

.contact-toggle span {
  display: none;
}

.contact-toggle ion-icon {
  font-size: 17px;
  transition: transform var(--transition);
}

.contact-toggle[aria-expanded="true"] ion-icon {
  transform: rotate(180deg);
}

.sidebar-details {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 300ms ease,
    visibility 300ms ease;
}

.sidebar.active .sidebar-details {
  visibility: visible;
  opacity: 1;
}

.separator {
  width: 100%;
  height: 1px;
  margin: 18px 0;
  background: var(--jet);
}

.contact-list {
  display: grid;
  gap: 18px;
}

.contact-item {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 14px;
}

.icon-box {
  position: relative;
  z-index: 1;
  display: grid;
  flex: 0 0 34px;
  width: 34px;
  height: 34px;
  place-items: center;
  color: var(--accent);
  background: var(--border-gradient);
  border-radius: 9px;
  box-shadow: var(--shadow-1);
}

.icon-box::before {
  position: absolute;
  z-index: -1;
  content: "";
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
}

.contact-content {
  min-width: 0;
}

.contact-label {
  color: var(--muted);
  font-size: 0.68rem;
  text-transform: uppercase;
}

.contact-link,
.contact-text {
  display: block;
  color: var(--white);
  font-size: 0.8rem;
  overflow-wrap: anywhere;
}

.contact-link {
  text-underline-offset: 3px;
}

.contact-link:hover {
  color: var(--accent);
}

.social-list {
  padding: 0 6px 4px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--light-gray);
  font-size: 0.86rem;
  text-decoration: none;
}

.social-link ion-icon {
  flex: 0 0 auto;
  color: var(--accent);
  font-size: 20px;
}

.social-link:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.main-content {
  position: relative;
  min-width: 0;
}

.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.95);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  box-shadow: var(--shadow-2);
  backdrop-filter: blur(10px);
}

.navbar-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
}

.navbar-link {
  padding: 18px 12px;
  color: var(--light-gray);
  font-size: 0.78rem;
  cursor: pointer;
  background: transparent;
  transition: color var(--transition);
}

.navbar-link:hover {
  color: var(--white);
}

.navbar-link.active {
  color: var(--accent);
}

.page-panel {
  display: none;
}

.page-panel.active {
  display: block;
  animation: fade-in 300ms ease both;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.section-title {
  position: relative;
  margin-bottom: 28px;
  padding-bottom: 10px;
  color: var(--white);
  font-size: clamp(1.5rem, 8vw, 2rem);
  font-weight: 600;
  line-height: 1.25;
}

.section-title::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 38px;
  height: 4px;
  content: "";
  background: var(--accent-gradient);
  border-radius: 4px;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  gap: 4px;
}

.section-header .section-title {
  margin-bottom: 16px;
}

.subsection-title {
  margin-bottom: 18px;
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
}

.about-introduction {
  margin-bottom: 35px;
  font-size: 0.93rem;
}

.about-introduction p {
  margin-bottom: 16px;
}

.about-introduction p:last-child {
  margin-bottom: 0;
}

.headline {
  color: var(--white);
  font-size: clamp(1rem, 4vw, 1.12rem);
  font-weight: 400;
}

.interest-grid,
.skills-grid {
  display: grid;
  gap: 18px;
}

.content-card {
  position: relative;
  z-index: 1;
  padding: 20px;
  background: var(--border-gradient);
  border-radius: 14px;
  box-shadow: var(--shadow-2);
}

.content-card::before {
  position: absolute;
  z-index: -1;
  content: "";
  inset: 1px;
  background: var(--bg-gradient-card);
  border-radius: inherit;
}

.interest-grid .content-card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.large-icon {
  flex-basis: 44px;
  width: 44px;
  height: 44px;
  font-size: 22px;
}

.content-card h4,
.project-content h3,
.project-content h4,
.timeline-item h4 {
  color: var(--white);
}

.content-card h4 {
  margin-bottom: 5px;
  font-size: 0.98rem;
}

.content-card p {
  color: var(--light-gray);
  font-size: 0.86rem;
}

.primary-link {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  gap: 9px;
  padding: 11px 15px;
  color: var(--smoky-black);
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
  background: var(--accent);
  border-radius: 10px;
  overflow-wrap: anywhere;
  transition:
    background var(--transition),
    transform var(--transition);
}

.primary-link:hover {
  background: var(--accent-dark);
  transform: translateY(-1px);
}

.primary-link ion-icon {
  flex: 0 0 auto;
  font-size: 20px;
}

.timeline {
  margin-bottom: 35px;
}

.timeline-heading {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 14px;
}

.timeline-heading h3 {
  color: var(--white);
  font-size: 1.2rem;
}

.timeline-list {
  margin-left: 18px;
  padding-left: 24px;
  border-left: 1px solid var(--jet);
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 30px;
}

.timeline-item::before {
  position: absolute;
  top: 7px;
  left: -29px;
  width: 8px;
  height: 8px;
  content: "";
  background: var(--accent);
  border: 4px solid var(--jet);
  border-radius: 50%;
  box-sizing: content-box;
}

.timeline-item h4 {
  margin-bottom: 4px;
  font-size: 0.95rem;
  line-height: 1.45;
}

.timeline-date {
  margin-bottom: 10px;
  color: var(--accent);
  font-size: 0.82rem;
}

.timeline-item > p:last-child {
  font-size: 0.88rem;
}

.detail-list {
  display: grid;
  padding-left: 20px;
  gap: 7px;
  font-size: 0.88rem;
  list-style: disc;
}

.skills-section,
.coursework-section,
.activities-section {
  margin-bottom: 35px;
}

.skill-card h4 {
  margin-bottom: 14px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.tag-list li {
  padding: 6px 10px;
  color: var(--white);
  font-size: 0.77rem;
  background: var(--onyx);
  border: 1px solid var(--jet);
  border-radius: 999px;
}

.coursework-list {
  padding: 20px;
  background: var(--eerie-black-1);
  border: 1px solid var(--jet);
  border-radius: 14px;
}

.activity-list {
  display: grid;
  padding-left: 20px;
  gap: 10px;
  font-size: 0.88rem;
  list-style: disc;
}

.activity-list strong {
  color: var(--white);
  font-weight: 500;
}

.project-card {
  overflow: hidden;
  background: var(--bg-gradient-card);
  border: 1px solid var(--jet);
  border-radius: 18px;
  box-shadow: var(--shadow-2);
}

.project-visual {
  display: grid;
  min-height: 190px;
  place-items: center;
  color: var(--accent);
  background:
    radial-gradient(
      circle at center,
      hsla(45, 100%, 72%, 0.12),
      transparent 60%
    ),
    var(--onyx);
}

.project-visual ion-icon {
  font-size: clamp(80px, 30vw, 150px);
}

.project-content {
  padding: 22px;
}

.project-meta {
  margin-bottom: 8px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.project-content h3 {
  margin-bottom: 15px;
  font-size: clamp(1.3rem, 6vw, 1.8rem);
}

.project-content > p:not(.project-meta, .project-link-note) {
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.project-content h4 {
  margin: 24px 0 12px;
  font-size: 1rem;
}

.project-content .primary-link {
  margin-top: 22px;
}

.project-link-note {
  margin-top: 22px;
  padding: 12px;
  color: var(--muted);
  font-size: 0.76rem;
  background: var(--eerie-black-1);
  border-left: 3px solid var(--accent);
  border-radius: 4px;
}

.site-footer {
  padding: 0 20px 90px;
  color: var(--muted);
  font-size: 0.72rem;
  text-align: center;
}

@media (min-width: 580px) {
  .site-layout {
    margin-top: 60px;
    margin-bottom: 100px;
  }

  .sidebar,
  .page-panel {
    width: 520px;
    margin-right: auto;
    margin-left: auto;
    padding: 30px;
  }

  .sidebar {
    max-height: 180px;
    margin-bottom: 30px;
  }

  .sidebar.active {
    max-height: 560px;
  }

  .sidebar-summary {
    gap: 24px;
  }

  .initials-avatar {
    flex-basis: 120px;
    width: 120px;
    height: 120px;
    font-size: 38px;
    border-radius: 28px;
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .profile-title {
    padding: 5px 14px;
    font-size: 0.76rem;
  }

  .contact-toggle {
    top: -30px;
    right: -30px;
    display: flex;
    width: auto;
    height: auto;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
  }

  .contact-toggle span {
    display: block;
    font-size: 0.74rem;
  }

  .navbar-list {
    gap: 18px;
  }

  .navbar-link {
    padding: 20px 12px;
    font-size: 0.9rem;
  }

  .about-introduction {
    font-size: 0.98rem;
  }

  .project-content {
    padding: 30px;
  }
}

@media (min-width: 768px) {
  .sidebar,
  .page-panel {
    width: 700px;
  }

  .contact-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 18px;
  }

  .contact-item:last-child {
    grid-column: 1 / -1;
  }

  .interest-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .interest-grid > :last-child {
    grid-column: 1 / -1;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skills-grid > :last-child {
    grid-column: 1 / -1;
  }

  .project-card {
    display: grid;
    grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.5fr);
  }

  .project-visual {
    min-height: 100%;
  }
}

@media (min-width: 1024px) {
  .sidebar,
  .page-panel {
    width: 950px;
  }

  .main-content {
    width: 950px;
    margin: auto;
  }

  .navbar {
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: auto;
    border-radius: 0 20px;
    box-shadow: none;
  }

  .navbar-list {
    gap: 16px;
    padding: 0 18px;
  }

  .page-panel {
    min-height: 650px;
  }

  .section-title {
    padding-right: 280px;
  }

  .interest-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .interest-grid > :last-child {
    grid-column: auto;
  }

  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .skills-grid > :last-child {
    grid-column: auto;
  }

  .site-footer {
    padding-bottom: 30px;
  }
}

@media (min-width: 1250px) {
  .site-layout {
    display: flex;
    max-width: 1200px;
    align-items: stretch;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    gap: 25px;
  }

  .sidebar,
  .page-panel,
  .main-content {
    width: auto;
  }

  .sidebar {
    position: sticky;
    top: 60px;
    width: 275px;
    height: max-content;
    max-height: none;
    margin: 0;
    padding-top: 55px;
    overflow: visible;
  }

  .sidebar-summary {
    flex-direction: column;
  }

  .initials-avatar {
    flex-basis: 150px;
    width: 150px;
    height: 150px;
    font-size: 48px;
  }

  .profile-summary {
    width: 100%;
    text-align: center;
  }

  .profile-title {
    margin: auto;
  }

  .contact-toggle {
    display: none;
  }

  .sidebar-details {
    visibility: visible;
    opacity: 1;
  }

  .contact-list {
    grid-template-columns: 1fr;
  }

  .contact-item:last-child {
    grid-column: auto;
  }

  .main-content {
    flex: 1;
    min-width: 0;
    margin: 0;
  }

  .page-panel {
    min-height: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

assets/js/script.js
'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const sidebarDetails = document.querySelector('[data-sidebar-details]');

const desktopSidebarQuery = window.matchMedia('(min-width: 1250px)');

function updateSidebarState() {
  const isDesktop = desktopSidebarQuery.matches;
  const isExpanded = isDesktop || sidebar.classList.contains('active');

  sidebarButton.setAttribute('aria-expanded', String(isExpanded));

  const buttonText = sidebarButton.querySelector('span');

  if (buttonText) {
    buttonText.textContent = isExpanded
      ? 'Hide contact information'
      : 'Show contact information';
  }

  if (isDesktop) {
    sidebarDetails.removeAttribute('inert');
  } else if (isExpanded) {
    sidebarDetails.removeAttribute('inert');
  } else {
    sidebarDetails.setAttribute('inert', '');
  }
}

sidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  updateSidebarState();
});

desktopSidebarQuery.addEventListener('change', updateSidebarState);
updateSidebarState();

const navigationButtons = Array.from(
  document.querySelectorAll('[data-nav-link]')
);

const pages = Array.from(document.querySelectorAll('[data-page]'));

function showPage(pageName, moveFocus = true) {
  pages.forEach((page) => {
    const isActive = page.dataset.page === pageName;

    page.classList.toggle('active', isActive);
    page.hidden = !isActive;
  });

  navigationButtons.forEach((button) => {
    const isActive = button.dataset.navLink === pageName;

    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  const activePage = pages.find((page) => page.dataset.page === pageName);

  if (activePage && moveFocus) {
    activePage.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

navigationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showPage(button.dataset.navLink);
  });
});

showPage('about', false);

README.md
# Connor Bishop Portfolio

A public static portfolio website for Connor Bishop, a Computer Science student
at the University of Michigan-Flint.

The site presents:

- A short professional introduction
- Education and work experience
- Verified technical skills and coursework
- One featured C++ Digital Logic Simulator project
- A downloadable resume
- Public email, phone, and LinkedIn contact information

## Technology

- HTML
- CSS
- JavaScript

No backend, login system, analytics tracker, contact form, or external data
collection is included.

## Local preview

Clone the repository and open `index.html` in a browser.

For a local HTTP server, Python can be used from the repository root:

```bash
python -m http.server 8000
Then visit:
http://localhost:8000
Resume
The public resume PDF must be stored at:
assets/Connor_Bishop_Resume.pdf
Project repository link
The project button currently points to:
https://github.com/cbishop2028/SWE380-Assignment1
If the Digital Logic Simulator has a separate public repository, update thatlink in index.html.
Accessibility
The site includes:

Semantic page structure
Keyboard-operable navigation
Visible focus indicators
A skip link
Meaningful link labels
Responsive layouts
Reduced-motion support
Text alternatives or accessible treatment for visual content

Template attribution
This portfolio is based on thevCard Personal Portfoliotemplate created by codewithsadee.
The original template is licensed under the MIT License. Its copyright andlicense notice are preserved in LICENSE.
License
See LICENSE.

---

# `content-nodes.md`

```markdown
# Approved public portfolio content

## Identity

- Name: Connor Bishop
- Email: connobi@umich.edu
- Phone: (810) 618-2162
- LinkedIn: https://www.linkedin.com/in/connor-j-bishop

## Headline

Hello! I am a Junior Computer Science student at the University of
Michigan-Flint. My favorite aspects of Computer Science are Object-Oriented
programming, web development, and computer networks.

## Biography

I am a Computer Science student studying at the University of Michigan-Flint.
I am a web development intern in Lansing, Michigan. I graduate in December of
2027.

## Education

- University of Michigan-Flint
- Bachelor of Science in Computer Science, ABET-accredited
- Expected December 2027
- GPA: 3.4
- President's Scholarship Award

## Experience

### Menards

- Role: Order Pickup and Delivery Team Member
- Dates: June 2026–Present
- Location: Clio, Michigan

### Taco Bell

- Role: Shift Lead
- Dates: April 2022–June 2026
- Location: Flushing, Michigan

## Featured project

### Digital Logic Simulator

- Date: Spring 2025
- Role: Team Leader
- Language: C++
- Features:
  - Circuit and vector-file parsing
  - Priority-queue event processing
  - Gate propagation delays
  - Command-line wire traces
  - AND, OR, NOT, NAND, NOR, XOR, and XNOR gates
- Skills:
  - Object-oriented design
  - Priority queues
  - Pointers
  - Operator overloading
  - File parsing
  - Digital logic
  - Team leadership

## Verified skills

### Programming

- C++
- SQL
- R
- Object-Oriented Design
- Git
- GitHub
- Vim

### Technical knowledge

- Data Structures
- Digital Logic Design
- Computer Networks
- Database Design

### Software and tools

- Quartus II
- wxWidgets
- Microsoft Office
- Linux/Unix

LICENSE
Keep the existing file unchanged:
MIT License

Copyright (c) 2022 codewithsadee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Before merging

Add the actual resume at assets/Connor_Bishop_Resume.pdf.
Replace the project URL if the simulator has a separate public repository.
Confirm whether the Menards “Present” status is still correct when deployed.
Open the site through a local HTTP server and test:
Navigation by keyboard
Contact expansion on mobile
Resume download
LinkedIn and GitHub links
Layout at 320, 375, 768, 1024, and 1440 pixels


Search the branch for Richard, Sacramento, Lorem, codewithsadee_, and old sample project names. Only the required template attribution to codewithsadee should remain.

