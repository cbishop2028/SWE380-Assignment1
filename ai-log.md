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
