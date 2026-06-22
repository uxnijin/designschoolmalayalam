// ============================================================
//  ARTICLE: Heuristic Evaluation
// ============================================================

ARTICLE_REGISTRY["heuristic-evaluation"] = {
  id: "heuristic-evaluation",
  thumbnail: "assets/thumbnails/heuristic-evaluation.svg",
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Heuristic Evaluation: Jakob Nielsen’s 10 Usability Heuristics",
  description: "Learn how to perform a usability audit on any digital product using Jakob Nielsen's 10 foundational UI heuristics.",
  date: "2026-06-22",
  
  tags: ["ux design", "heuristics", "usability", "ux laws", "heuristic evaluation"],
  content: `
    <p style="margin-bottom: 15px;">How do you measure if a user interface is intuitive and easy to use without running a costly user testing study? While direct user testing is always the gold standard, UX professionals use a reliable auditing method called a <strong>Heuristic Evaluation</strong> to catch 80% of usability issues early in the design cycle.</p>
    <p style="margin-bottom: 15px;">A heuristic evaluation is a usability inspection method where evaluators measure an interface against a set of established guidelines, called "heuristics." The most famous and widely accepted guidelines are **Jakob Nielsen's 10 Usability Heuristics**, published in 1994.</p>

    <h3>Nielsen’s 10 Usability Heuristics</h3>
    <p style="margin-bottom: 15px;">These are broad rules of thumb for interface design, not specific layout rules. They apply to web apps, mobile apps, hardware, and physical interfaces:</p>

    <h4>1. Visibility of System Status</h4>
    <p style="margin-bottom: 15px;">The system should always keep users informed about what is going on, through appropriate feedback within a reasonable time.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> A loading spinner, file upload progress bar, or email sent toast notification.</p>

    <h4>2. Match Between System and the Real World</h4>
    <p style="margin-bottom: 15px;">The system should speak the users' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon. Follow real-world conventions.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Desktop "recycle bin" metaphor, or organizing digital documents inside "folders".</p>

    <h4>3. User Control and Freedom</h4>
    <p style="margin-bottom: 15px;">Users often perform actions by mistake. They need a clearly marked "emergency exit" to leave the unwanted action without having to go through an extended dialogue.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> An "Undo" button on sent emails, or a "Cancel" button on multi-step checkout forms.</p>

    <h4>4. Consistency and Standards</h4>
    <p style="margin-bottom: 15px;">Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions and industry standards (Jakob's Law).</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Shopping cart icon always located in the top-right corner on e-commerce sites.</p>

    <h4>5. Error Prevention</h4>
    <p style="margin-bottom: 15px;">Even better than good error messages is a careful design which prevents a problem from occurring in the first place.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Disabling the submit button until all required form fields are valid; password strength indicators.</p>

    <h4>6. Recognition Rather Than Recall</h4>
    <p style="margin-bottom: 15px;">Minimize the user's memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Search history dropdowns, or visual icons alongside textual menu items.</p>

    <h4>7. Flexibility and Efficiency of Use</h4>
    <p style="margin-bottom: 15px;">Accelerators—unseen by the novice user—may often speed up the interaction for the expert user. Allow users to tailor frequent actions.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Keyboard shortcuts, macros, and templates.</p>

    <h4>8. Aesthetic and Minimalist Design</h4>
    <p style="margin-bottom: 15px;">Interfaces should not contain information which is irrelevant or rarely needed. Every extra unit of information competes with the relevant units and diminishes their visibility.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Clean white space, short body paragraphs, and removing unnecessary decorative borders.</p>

    <h4>9. Help Users Recognize, Diagnose, and Recover from Errors</h4>
    <p style="margin-bottom: 15px;">Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> Saying "Incorrect password. Try resetting it here" instead of "Error Code: 401 Unauthorized".</p>

    <h4>10. Help and Documentation</h4>
    <p style="margin-bottom: 15px;">It's best if the system doesn't need documentation. However, it may be necessary to provide search help and documentation. Any such information should be easy to search and focused on the user's task.</p>
    <p style="margin-bottom: 15px;"><em>UI Example:</em> A searchable help center, context-sensitive tooltips, or onboarding product tours.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Heuristic</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Quick Audit Check</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">System Status</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Does the app show confirmation when a database action completes? Is loading state obvious?</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">User Control</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Can users undo actions, dismiss modals easily, or exit a wizard mid-way?</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Consistency</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Are identical terminology and UI patterns used across all pages of the application?</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Error Prevention</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Are fields auto-formatted? Are errors caught inline as users type?</td>
        </tr>
      </tbody>
    </table>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Jakob Nielsen's 10 heuristics are the foundational rules of usability. Running a heuristic evaluation lets you identify visual and logical layout flaws before writing code, saving developmental time and delivering a highly intuitive product experience for your users.</p>
  `
};
