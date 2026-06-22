// ============================================================
//  ARTICLE: Prototyping with Variables
// ============================================================

ARTICLE_REGISTRY["figma-variables-prototyping"] = {
  id: "figma-variables-prototyping",
  thumbnail: "assets/thumbnails/figma-variables-prototyping.svg",
  subcategoryId: "prototyping-figma",
  categoryId: "figma",
  title: "Prototyping with Variables and Expressions in Figma",
  description: "Take your Figma prototyping to the next level. Learn how to use variables, numbers, strings, conditionals, and logical expressions to build dynamic prototypes.",
  date: "2026-06-22",
  
  tags: ["figma", "prototyping", "variables", "conditional logic", "interaction design"],
  content: `
    <p style="margin-bottom: 15px;">Historically, creating a high-fidelity prototype in Figma that involved a working shopping cart, a live character counter, or a validation form required creating dozens of interconnected frames. If you wanted to show a button updating from "0 items" to "3 items", you needed separate screens for each number.</p>
    <p style="margin-bottom: 15px;">With the introduction of **Variables** and **Expressions**, Figma prototyping now behaves like code. You can store values, perform mathematical operations, and trigger actions based on conditional (if/else) logic—all within a single frame.</p>

    <h3>What are Prototyping Variables?</h3>
    <p style="margin-bottom: 15px;">Variables are containers that store values (Numbers, Strings, Booleans, or Colors). During a prototype preview, user actions (like typing or clicking) can modify these values, and the UI adapts dynamically to show the changes.</p>

    <h3>Advanced Variables Concepts</h3>
    <p style="margin-bottom: 15px;">To build responsive prototypes, designers leverage three scripting features inside Figma's prototype panel:</p>

    <h4>1. Math Expressions</h4>
    <p style="margin-bottom: 15px;">Instead of assigning a static value to a variable, you can use mathematical operators (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>). This is perfect for increments, calculations, and totals.</p>
    <p style="margin-bottom: 15px;"><em>Example:</em> When a user taps "+", set <code>cartCount = cartCount + 1</code>. Figma will recalculate the value and update any text layer bound to <code>cartCount</code> instantly.</p>

    <h4>2. Conditional Logic (If/Else Statements)</h4>
    <p style="margin-bottom: 15px;">You can set actions that only fire if certain conditions are met. This allows you to enforce validation boundaries or toggle pages.</p>
    <p style="margin-bottom: 15px;"><em>Example:</em> If <code>cartCount >= 10</code>, show the "Free Shipping" alert layer. Else, keep the alert layer hidden.</p>

    <h4>3. String Concatenation</h4>
    <p style="margin-bottom: 15px;">You can merge variables with plain text strings to create dynamic messages.</p>
    <p style="margin-bottom: 15px;"><em>Example:</em> Set a text layer content to <code>"You have " + cartCount + " items in your bag"</code>.</p>

    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid var(--border); font-size: 0.9rem;">
      <thead>
        <tr style="background-color: var(--border); text-align: left;">
          <th style="padding: 12px; border: 1px solid var(--border); width: 25%;">Variable Type</th>
          <th style="padding: 12px; border: 1px solid var(--border); width: 40%;">UI Application Example</th>
          <th style="padding: 12px; border: 1px solid var(--border);">Action Syntax Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Number</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Incrementing items in a shopping bag, calculating order totals.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>Set cartCount to cartCount + 1</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">Boolean</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Toggling modal overlays, marking tasks as completed.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>Set showModal to true</code></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top; font-weight: bold;">String</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;">Showing typed input values, changing user greetings dynamically.</td>
          <td style="padding: 12px; border: 1px solid var(--border); vertical-align: top;"><code>Set userName to "Hi, " + textInput</code></td>
        </tr>
      </tbody>
    </table>

    <h3>Step-by-Step: Building an Increment Counter</h3>
    <ol style="margin-bottom: 20px; padding-left: 20px;">
      <li><p style="margin-bottom: 10px;"><strong>Create the Variable:</strong> In the Local Variables panel, create a number variable called <code>count</code> and set its initial value to <code>1</code>.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Bind the Variable to Text:</strong> Create a text layer showing "1" on your canvas. Select the text layer, locate the "Text" block in the right panel, click the hexagonal Variable icon, and link it to <code>count</code>.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Configure the Button Trigger:</strong> Create a plus (+) button. Go to the Prototype tab, add a "On tap" interaction, choose **Set variable**, select <code>count</code>, and input the expression <code>count + 1</code>.</p></li>
      <li><p style="margin-bottom: 10px;"><strong>Test in Preview:</strong> Click preview, tap the plus button, and watch the text count rise dynamically on screen!</p></li>
    </ol>

    <h3>Conclusion</h3>
    <p style="margin-bottom: 15px;">Figma variables and logic expressions close the gap between static design tools and dynamic programming. By incorporating simple calculations and conditional validation rules into your drafts, you can design highly realistic prototypes that accurately represent active system behavior to stakeholders and users during testing.</p>
  `
};
