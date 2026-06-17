// ============================================================
//  ARTICLE: Designing for Serial Task Switching
// ============================================================

ARTICLE_REGISTRY["serial-task-switching"] = {
  id: "serial-task-switching",
  thumbnail: "assets/thumbnails/serial-task-switching.svg", // add custom image path here (e.g. assets/my-image.png) to replace
  subcategoryId: "ux-laws",
  categoryId: "ux-design",
  title: "Designing for Serial Task Switching",
  description: "Serial task switching, or rapidly shifting attention between tasks, is a natural user behavior that lowers productivity and increases stress and the chance of errors.",
  date: "2025-05-23",
  
  tags: ["ux design", "ux laws", "serial task switching", "cognitive psychology", "attention"],
  content: `
    <p style="margin-bottom: 15px;">Be honest. How many tabs do you have open right now? If you’re like me, it’s probably more than you’d like to admit. Serial task switching is a natural behavior that has become part of our daily lives, whether you’re jumping between projects or exploring a thought that just popped into your head. Designing for this reality means helping users stay productive, reduce errors as they switch between tasks, and maintain focus when they choose to concentrate on just one.</p>

    <h3>Multitasking on the Web Is a Myth</h3>
    <p style="margin-bottom: 15px;">To understand serial task switching, let’s first clarify what multitasking really means and why it’s often misunderstood.</p>
    <p style="margin-bottom: 15px;"><strong>Multitasking</strong> is the act of doing two or more tasks at the same time.</p>
    <p style="margin-bottom: 15px;">This is what most people believe they’re doing when they juggle multiple tasks at once, whether they are answering emails while attending a virtual meeting or listening to a podcast while working. The idea of multitasking implies that the brain can effectively manage multiple cognitive tasks in parallel, distributing attention equally across each one. However, research in cognitive science has shown that true multitasking is a myth. When tasks demand similar cognitive resources, our brain cannot process both simultaneously.</p>
    <p style="margin-bottom: 15px;">On the web, even simple tasks, like reading or searching, draw on similar cognitive resources, making it nearly impossible to truly multitask without sacrificing performance. In these cases, we are not multitasking, we are serial task-switching.</p>
    <p style="margin-bottom: 15px;"><strong>Serial task-switching</strong> is a rapid switch between two or more tasks. Instead of managing both tasks simultaneously, attention shifts between them.</p>
    <p style="margin-bottom: 15px;">With serial task switching, attention is fragmented as we rapidly shift between tasks. Each time we switch tasks, the brain must reset and reacquire the context of the new task, which slows down productivity.</p>
    <p style="margin-bottom: 15px;">Everyone does serial task switching. Serial task switching is a natural part of how we interact with our incredibly busy environments.</p>

    <h3>Impact of Task Switching</h3>
    <p style="margin-bottom: 15px;">While constantly shifting between tasks may feel productive, over time, it has several negative effects, including errors, low productivity, and stress.</p>

    <h4>Errors</h4>
    <p style="margin-bottom: 15px;">The more we switch between tasks, the more likely we are to make mistakes. We are striving to retain information from both tasks in our limited <a href="https://www.nngroup.com/articles/working-memory-external-memory/" target="_blank" style="color: var(--accent); text-decoration: underline;">working memory</a>, so we end up taking into account fewer details from each task, and, as a result, we increase the chance that we’ll ignore something important. For example, writing an email while in a virtual meeting can lead to miscommunications, typos, or missed details in both activities. <a href="https://www.nngroup.com/articles/slips/" target="_blank" style="color: var(--accent); text-decoration: underline;">Error-prevention</a> tools like undo buttons and <a href="https://www.nngroup.com/articles/confirmation-dialog/" target="_blank" style="color: var(--accent); text-decoration: underline;">confirmation dialogs</a> are especially helpful for recovering from mistakes caused by serial task switching.</p>

    <h4>Low Productivity</h4>
    <p style="margin-bottom: 15px;">While task switching may feel like you’re getting more done in less time, that is not the case. Many studies (such as the one by Bogdan Vasilescu and colleagues on GitHub multitasking) show that people who switch between many tasks take longer to finish them and produce lower-quality work than those who focus on fewer tasks at a time. Constant interruptions prevent us from entering a <a href="https://www.nngroup.com/videos/flow-state/" target="_blank" style="color: var(--accent); text-decoration: underline;">flow state</a>, where deep work happens. Users may leave several tasks incomplete or poorly executed instead of finishing multiple tasks quickly.</p>

    <h4>Stress</h4>
    <p style="margin-bottom: 15px;">Every time we shift our focus to a different task, the brain has to work a bit harder to refocus and rebuild context. This frequent resetting strains cognitive resources and leaves us feeling overwhelmed. Over time, this cognitive overload makes it hard to concentrate and can lead to stress, as shown by research by Linda Becker and colleagues.</p>

    <h3>Interface Patterns That Support Task Switching</h3>
    <p style="margin-bottom: 15px;">Designing for task switching means creating interfaces that accommodate this behavior and help reduce the errors, productivity losses, and stress it can cause. The following examples show how different design solutions can reduce friction when attention is split.</p>

    <h4>Multi-View Interfaces</h4>
    <p style="margin-bottom: 15px;">Interfaces that let users keep multiple resources visible at once can reduce the <a href="https://www.nngroup.com/articles/interaction-cost-definition/" target="_blank" style="color: var(--accent); text-decoration: underline;">interaction cost</a> of switching between tasks. These designs don’t eliminate the <a href="https://www.nngroup.com/articles/minimize-cognitive-load/" target="_blank" style="color: var(--accent); text-decoration: underline;">cognitive load</a> of task switching, but they help by reducing the cost of jumping back and forth. Common multi-view interface patterns include split screen and picture-in-picture.</p>

    <h5>Split Screen</h5>
    <p style="margin-bottom: 15px;">Some tools allow users to access multiple resources within a platform at once. Platforms like Google Workspace, Microsoft Office, and Zoom use interactive sidebars and extendable windows to enable users to interact with two activities simultaneously.</p>
    <p style="margin-bottom: 15px;">Beyond split screen in individual tools, operating systems like Windows and MacOS allow users to split their screens or open multiple windows. For instance, a student might follow along with a lecture in one window, while completing an assignment in another window. Dividing cognitive resources between the two will still be inefficient and distracting, but by having both tasks in front of them, they will at least be able to minimize the effort of switching between them.</p>

    <h5>Picture-in-Picture</h5>
    <p style="margin-bottom: 15px;">Another type of multi-view interface is picture-in-picture. Video platforms offer picture-in-picture mode, which allows video content to remain visible in a small, movable window while users perform other tasks.</p>

    <h4>Running Tasks Simultaneously</h4>
    <p style="margin-bottom: 15px;">Another way to support task switching is by allowing users to continue to use the interface while working on tasks that involve a delay, like waiting for a support agent, processing a file, or loading content. Live-chat tools on websites often allow users to keep shopping, reading, or exploring the site while waiting for a chat agent’s response. This minimizes frustration with the chat agent and supports a more productive use of time.</p>

    <h4>Refusing Interruptions</h4>
    <p style="margin-bottom: 15px;">It’s natural for attention to fragment, but systems can help users stay on track when they decide it’s time to focus. Features like Do Not Disturb or Focus Mode create a boundary between the user and any potential distractions. By minimizing notifications and external triggers, these tools give users the space to stay engaged.</p>

    <h4>Notetaking Assistants Catch Details that Users Miss</h4>
    <p style="margin-bottom: 15px;">Note-taking assistants give users the option to revisit important aspects of the conversation later when needed. Tools like Otter.ai and Granola help users stay on track by capturing meeting notes, action items, and Q&A automatically.</p>

    <h3>Guidelines to Support Task Switching</h3>
    <p style="margin-bottom: 15px;">Task switching is part of users’ natural behavior, and interfaces should be designed to support that reality. You don’t need to design an operating system or a full productivity suite to support task switching. Thoughtful design choices in everyday tools can make task switching less stressful and less error-prone.</p>

    <h4>Let Users Arrange Their Workspace</h4>
    <p style="margin-bottom: 15px;">Users often have multiple goals within the same tool, such as referencing past work while completing a task or comparing two pieces of information. Flexible, adjustable layouts help support this behavior by reducing the cost of switching between tasks.</p>
    <p style="margin-bottom: 15px;">To do this, allow users to arrange their workspace and keep multiple views open at once through features like split-screen layouts, expandable windows, or side-by-side panels. Another option is to use collapsible sections or accordions to let users access relevant content without overwhelming the interface.</p>

    <h4>Keep Users Oriented</h4>
    <p style="margin-bottom: 15px;">With serial task switching, users often bounce back to an app after only a short interruption. They’re not fully recontextualizing, they just need quick indicators to recognize where they are and what they’re looking at.</p>
    <p style="margin-bottom: 15px;">To keep users oriented, use navigation elements like <a href="https://www.nngroup.com/articles/breadcrumbs/" target="_blank" style="color: var(--accent); text-decoration: underline;">breadcrumbs</a> and <a href="https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/" target="_blank" style="color: var(--accent); text-decoration: underline;">section headers</a> for immediate location awareness. <a href="https://www.nngroup.com/articles/ui-copy/" target="_blank" style="color: var(--accent); text-decoration: underline;">Label buttons and links clearly</a> so users understand the context of the interface and can move forward confidently. These cues minimize errors and help users resume work without needing to think too hard.</p>

    <h4>Allow Tasks to Run in Parallel</h4>
    <p style="margin-bottom: 15px;">When users encounter a task with a long wait, allow them to continue to complete other tasks using the interface. Interfaces that support parallel tasks help users stay productive.</p>
    <p style="margin-bottom: 15px;">While designing for parallel tasks, keep tasks that are in progress visible but unobtrusive. Use collapsible <a href="https://www.nngroup.com/articles/ui-elements-glossary/#Lightbox" target="_blank" style="color: var(--accent); text-decoration: underline;">popups</a> that remain visible as the user navigates, and avoid blocking important interface elements.</p>

    <h4>Design for Error Prevention and Recovery</h4>
    <p style="margin-bottom: 15px;">Task switching increases the chance of mistakes. Interfaces should include safeguards that help users avoid mistakes and recover when they do occur. To design for error prevention and recovery:</p>
    <ul style="margin-bottom: 20px; padding-left: 20px;">
      <li style="margin-bottom: 6px;"><p style="margin-bottom: 5px;">Use <a href="https://www.nngroup.com/articles/confirmation-dialog/" target="_blank" style="color: var(--accent); text-decoration: underline;">confirmation dialogs</a> for high-impact actions to help users avoid accidental mistakes.</p></li>
      <li style="margin-bottom: 6px;"><p style="margin-bottom: 5px;">Include <a href="https://www.nngroup.com/articles/user-control-and-freedom/" target="_blank" style="color: var(--accent); text-decoration: underline;">undo options</a> for actions like deleting, sending, or submitting, so users can quickly recover from unintended actions.</p></li>
      <li style="margin-bottom: 6px;"><p style="margin-bottom: 5px;">Display <a href="https://www.nngroup.com/articles/error-message-guidelines/" target="_blank" style="color: var(--accent); text-decoration: underline;">clear, actionable error messages</a> that help users understand what went wrong and how to fix it.</p></li>
      <li style="margin-bottom: 6px;"><p style="margin-bottom: 5px;">Provide forgiving defaults, such as autosaving and confirming with users before they exit a page with unsaved changes.</p></li>
    </ul>
    <p style="margin-bottom: 15px;">These practices will help reduce errors when their attention is divided.</p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Task switching is inevitable in today’s world, where it often feels like a million things are happening at once. Evaluating your own product with task switching in mind can reveal opportunities to reduce friction while task switching and support focus when users decide to give their full attention to one task. By designing with task switching in mind, we can create experiences that adapt to the way people actually work.</p>

    <hr style="border: 0; border-top: 1px solid var(--border); margin: 40px 0;" />
    
    <p style="font-size: 0.85rem; color: var(--text-3); line-height: 1.5;">
      This article is adapted from the literature on Serial Task Switching. 
      Read the detailed guide at the 
      <a href="https://www.nngroup.com/articles/serial-task-switching/" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: underline;">Nielsen Norman Group (NN/g)</a>.
    </p>
  `
};
