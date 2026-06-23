// ============================================================
//  ARTICLE: UX Writing for AI Chatbots
// ============================================================

ARTICLE_REGISTRY["ux-writing-ai-chatbots"] = {
  id: "ux-writing-ai-chatbots",
  thumbnail: "assets/thumbnails/ux-writing-ai-chatbots.svg",
  subcategoryId: "ux-writing",
  categoryId: "ux-design",
  title: "UX Writing for AI Chatbots: Crafting Clear, Natural Conversational Copy",
  description: "Explore the rules of writing copy, system instructions, error fallbacks, and microcopy for conversational AI assistants and chatbots.",
  date: "2026-06-23",
  tags: ["UX Design", "UX Writing", "AI Chatbots", "Conversational UX", "Microcopy"],
  content: `
    <p style="font-size: 1.05rem; margin-bottom: 25px;">
      In conversational interfaces, words *are* the design. Without buttons, navigation bars, or layout grids to hide behind, the success of a chatbot rests entirely on the clarity, flow, and helpfulness of its text. 
    </p>
    <p style="margin-bottom: 25px;">
      UX writing for AI chatbots requires balancing a friendly, natural voice with clear boundaries, transparency, and logical guides. Here is how to write microcopy and system flows for conversational AI assistants.
    </p>

    <h3>1. Human-Centered Persona, Transparent Reality</h3>
    <p style="margin-bottom: 15px;">
      A conversational AI assistant should write with a polite, helpful, and natural tone, but it must never pretend to be human. Deceiving users ruins trust once they detect a robotic loop:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>State the Nature of AI:</strong> Introduce the assistant transparently during onboarding (e.g., "Hi, I'm DesignSchool's AI assistant. I can answer questions about UI/UX, but I occasionally make mistakes.").</li>
      <li style="margin-bottom: 8px;"><strong>Avoid Pretending:</strong> Never write prompts where the AI claims to have personal feelings, eyes, physical hands, or human experiences.</li>
    </ul>

    <h3>2. Writing Concisely for Scannability</h3>
    <p style="margin-bottom: 15px;">
      Reading multi-paragraph blocks of text is tiring, especially on mobile screens. Good conversational copy uses hierarchy:
    </p>
    <ul style="margin-bottom: 20px; padding-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 8px;"><strong>Formatting:</strong> Instruct your system prompts to return responses using bullet points, bold keywords, and short paragraphs.</li>
      <li style="margin-bottom: 8px;"><strong>Summarizing:</strong> Keep introductory lines short and put the most critical instructions or answers in the first sentence.</li>
    </ul>

    <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 25px 0; color: var(--text-2); font-style: italic;">
      "If a user asks a simple question and the AI replies with a wall of raw text, the reader's cognitive load spikes. Good UX writing structures information into clear steps."
    </blockquote>

    <h3>3. Designing Graceful Error Boundary Copy</h3>
    <p style="margin-bottom: 15px;">
      Traditional software errors say "Invalid input." In a conversational AI space, errors occur when a model hits content filters, network limits, or runs out of database context.
    </p>
    <p style="margin-bottom: 15px;">
      Write helper states that explain exactly what went wrong and provide actionable recommendations. For example:
      <br>
      <em>Instead of:</em> "System error code 503."
      <br>
      <em>Write:</em> "I can't access live web links right now, but I can outline the general design rules for you. Would you like me to do that, or would you like to rephrase your request?"
    </p>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">
      UX writing for AI is about building a guide rails. By stating AI limitations transparently, prioritizing bulleted formatting, and crafting error messages that redirect users productively, you write conversations that feel helpful, fluid, and intuitive.
    </p>
  `
};
