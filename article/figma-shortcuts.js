// ============================================================
//  ARTICLE: Figma Keyboard Shortcuts Cheatsheet
// ============================================================

ARTICLE_REGISTRY["figma-shortcuts"] = {
  id: "figma-shortcuts",
  thumbnail: "", // left empty to use fallback / default
  subcategoryId: "figma-basics",
  categoryId: "figma",
  title: "Figma Keyboard Shortcuts Cheatsheet",
  description: "A comprehensive quick reference guide for essential Windows and macOS keyboard shortcuts in Figma.",
  date: "2026-06-22",
  youtubeUrl: "", // no video
  
  tags: ["figma", "shortcuts", "cheatsheet", "design tools", "workflow"],
  content: `
<style>
  .shortcut-table-wrapper {
    overflow-x: auto;
    margin: 20px 0 35px;
    border-radius: 12px;
    border: 1px solid var(--border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }
  .shortcut-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--bg-2);
    font-size: 0.95rem;
    text-align: left;
    min-width: 500px;
  }
  .shortcut-table th {
    background: var(--bg-3);
    color: var(--text);
    padding: 14px 18px;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 1px solid var(--border);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .shortcut-table td {
    padding: 14px 18px;
    color: var(--text-2);
    border-bottom: 1px solid var(--border);
    vertical-align: middle;
  }
  .shortcut-table tr:last-child td {
    border-bottom: none;
  }
  .shortcut-table tr:hover td {
    background: var(--bg-3);
    color: var(--text);
  }
  .shortcut-table kbd {
    background: var(--bg-1);
    border: 1px solid var(--border);
    border-bottom: 2px solid var(--text-3);
    border-radius: 6px;
    padding: 3px 8px;
    font-size: 0.82rem;
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--text);
    display: inline-block;
    margin: 2px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  }
  .shortcut-table td:nth-child(2),
  .shortcut-table td:nth-child(3) {
    white-space: nowrap;
  }
</style>

<p>Figma is one of the most powerful collaborative interface design tools in the industry. However, mouse clicks can slow you down. To truly master Figma and design at the speed of thought, learning its keyboard shortcuts is essential.</p>

<p>Here is a complete, well-organized cheatsheet of essential Figma shortcuts for both <strong>Windows/Linux</strong> and <strong>macOS</strong> to help boost your daily workflow efficiency.</p>

<h2>Essential & Interface</h2>
<p>These shortcuts let you toggle interface elements, navigate the canvas, zoom in/out, and trigger basic menus.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Show/Hide UI Panels</td>
        <td><kbd>Ctrl</kbd> + <kbd>\\</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>\\</kbd></td>
      </tr>
      <tr>
        <td>Search Menu (Quick Actions)</td>
        <td><kbd>Ctrl</kbd> + <kbd>/</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>/</kbd></td>
      </tr>
      <tr>
        <td>Pick Color (Color Eyedropper)</td>
        <td><kbd>I</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd></td>
        <td><kbd>I</kbd> or <kbd>Ctrl</kbd> + <kbd>C</kbd></td>
      </tr>
      <tr>
        <td>Toggle Rulers</td>
        <td><kbd>Shift</kbd> + <kbd>R</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>R</kbd></td>
      </tr>
      <tr>
        <td>Show Outlines (Outline Mode)</td>
        <td><kbd>Ctrl</kbd> + <kbd>Y</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Y</kbd></td>
      </tr>
      <tr>
        <td>Layout Grids Toggle</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd></td>
      </tr>
      <tr>
        <td>Pixel Preview</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Y</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>Y</kbd></td>
      </tr>
      <tr>
        <td>Pixel Grid Toggle</td>
        <td><kbd>Ctrl</kbd> + <kbd>'</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>'</kbd></td>
      </tr>
      <tr>
        <td>Zoom to 100%</td>
        <td><kbd>Shift</kbd> + <kbd>0</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>0</kbd></td>
      </tr>
      <tr>
        <td>Zoom to Fit Canvas</td>
        <td><kbd>Shift</kbd> + <kbd>1</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>1</kbd></td>
      </tr>
      <tr>
        <td>Zoom to Selection</td>
        <td><kbd>Shift</kbd> + <kbd>2</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>2</kbd></td>
      </tr>
      <tr>
        <td>Pan (Hand Tool)</td>
        <td><kbd>Space</kbd> + drag or <kbd>H</kbd></td>
        <td><kbd>Space</kbd> + drag or <kbd>H</kbd></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Move & Creation Tools</h2>
<p>Quick access keys to select tools from the top toolbar to build layouts and shapes instantly.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Move Tool</td>
        <td><kbd>V</kbd></td>
        <td><kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Frame Tool</td>
        <td><kbd>F</kbd></td>
        <td><kbd>F</kbd></td>
      </tr>
      <tr>
        <td>Slice Tool</td>
        <td><kbd>S</kbd></td>
        <td><kbd>S</kbd></td>
      </tr>
      <tr>
        <td>Text Tool</td>
        <td><kbd>T</kbd></td>
        <td><kbd>T</kbd></td>
      </tr>
      <tr>
        <td>Rectangle Tool</td>
        <td><kbd>R</kbd></td>
        <td><kbd>R</kbd></td>
      </tr>
      <tr>
        <td>Ellipse Tool</td>
        <td><kbd>O</kbd></td>
        <td><kbd>O</kbd></td>
      </tr>
      <tr>
        <td>Line Tool</td>
        <td><kbd>L</kbd></td>
        <td><kbd>L</kbd></td>
      </tr>
      <tr>
        <td>Arrow Tool</td>
        <td><kbd>Shift</kbd> + <kbd>L</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>L</kbd></td>
      </tr>
      <tr>
        <td>Pen Tool</td>
        <td><kbd>P</kbd></td>
        <td><kbd>P</kbd></td>
      </tr>
      <tr>
        <td>Pencil Tool</td>
        <td><kbd>Shift</kbd> + <kbd>P</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>P</kbd></td>
      </tr>
      <tr>
        <td>Add/Show Comments</td>
        <td><kbd>C</kbd></td>
        <td><kbd>C</kbd></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Selection & Layers</h2>
<p>Manipulate, find, select, lock, or group your layers inside the layer tree panels quickly.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Select All</td>
        <td><kbd>Ctrl</kbd> + <kbd>A</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>A</kbd></td>
      </tr>
      <tr>
        <td>Select None (Clear Selection)</td>
        <td><kbd>Esc</kbd></td>
        <td><kbd>Esc</kbd></td>
      </tr>
      <tr>
        <td>Deep Select (Direct Select Layer)</td>
        <td><kbd>Ctrl</kbd> + click</td>
        <td><kbd>Cmd</kbd> + click</td>
      </tr>
      <tr>
        <td>Select Layer Menu (Contextual List)</td>
        <td><kbd>Ctrl</kbd> + right click</td>
        <td><kbd>Cmd</kbd> + right click</td>
      </tr>
      <tr>
        <td>Group Selected Layers</td>
        <td><kbd>Ctrl</kbd> + <kbd>G</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>G</kbd></td>
      </tr>
      <tr>
        <td>Ungroup Layers</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd></td>
      </tr>
      <tr>
        <td>Frame Selected Layers</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>G</kbd></td>
      </tr>
      <tr>
        <td>Show/Hide Selected Layers</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd></td>
      </tr>
      <tr>
        <td>Lock/Unlock Selected Layers</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd></td>
      </tr>
      <tr>
        <td>Select Child Layer</td>
        <td><kbd>Enter</kbd></td>
        <td><kbd>Enter</kbd></td>
      </tr>
      <tr>
        <td>Select Parent Layer</td>
        <td><kbd>Shift</kbd> + <kbd>Enter</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>Enter</kbd></td>
      </tr>
      <tr>
        <td>Select Next Sibling Layer</td>
        <td><kbd>Tab</kbd></td>
        <td><kbd>Tab</kbd></td>
      </tr>
      <tr>
        <td>Select Previous Sibling Layer</td>
        <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Arranging & Alignment</h2>
<p>Align elements to grids or distribute vertical and horizontal spacing efficiently.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bring Layer Forward</td>
        <td><kbd>Ctrl</kbd> + <kbd>]</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>]</kbd></td>
      </tr>
      <tr>
        <td>Send Layer Backward</td>
        <td><kbd>Ctrl</kbd> + <kbd>[</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>[</kbd></td>
      </tr>
      <tr>
        <td>Bring Layer to Front</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>]</kbd> (or <kbd>Shift</kbd> + <kbd>]</kbd>)</td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>]</kbd> (or <kbd>Option</kbd> + <kbd>]</kbd>)</td>
      </tr>
      <tr>
        <td>Send Layer to Back</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>[</kbd> (or <kbd>Shift</kbd> + <kbd>[</kbd>)</td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>[</kbd> (or <kbd>Option</kbd> + <kbd>[</kbd>)</td>
      </tr>
      <tr>
        <td>Align Left</td>
        <td><kbd>Alt</kbd> + <kbd>A</kbd></td>
        <td><kbd>Option</kbd> + <kbd>A</kbd></td>
      </tr>
      <tr>
        <td>Align Right</td>
        <td><kbd>Alt</kbd> + <kbd>D</kbd></td>
        <td><kbd>Option</kbd> + <kbd>D</kbd></td>
      </tr>
      <tr>
        <td>Align Top</td>
        <td><kbd>Alt</kbd> + <kbd>W</kbd></td>
        <td><kbd>Option</kbd> + <kbd>W</kbd></td>
      </tr>
      <tr>
        <td>Align Bottom</td>
        <td><kbd>Alt</kbd> + <kbd>S</kbd></td>
        <td><kbd>Option</kbd> + <kbd>S</kbd></td>
      </tr>
      <tr>
        <td>Align Horizontal Centers</td>
        <td><kbd>Alt</kbd> + <kbd>H</kbd></td>
        <td><kbd>Option</kbd> + <kbd>H</kbd></td>
      </tr>
      <tr>
        <td>Align Vertical Centers</td>
        <td><kbd>Alt</kbd> + <kbd>V</kbd></td>
        <td><kbd>Option</kbd> + <kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Distribute Horizontal Spacing</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>H</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>H</kbd></td>
      </tr>
      <tr>
        <td>Distribute Vertical Spacing</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Tidy Up Layout</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>T</kbd></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Editing & Transforms</h2>
<p>Perform key commands for copying properties, masks, image placement, flipping shapes, and setting opacities.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Copy Selected Layer</td>
        <td><kbd>Ctrl</kbd> + <kbd>C</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>C</kbd></td>
      </tr>
      <tr>
        <td>Cut Selected Layer</td>
        <td><kbd>Ctrl</kbd> + <kbd>X</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>X</kbd></td>
      </tr>
      <tr>
        <td>Paste Selection</td>
        <td><kbd>Ctrl</kbd> + <kbd>V</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Paste Over Selection (In Place)</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Duplicate Selection</td>
        <td><kbd>Ctrl</kbd> + <kbd>D</kbd> or <kbd>Alt</kbd> + drag</td>
        <td><kbd>Cmd</kbd> + <kbd>D</kbd> or <kbd>Option</kbd> + drag</td>
      </tr>
      <tr>
        <td>Rename Layer</td>
        <td><kbd>Ctrl</kbd> + <kbd>R</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>R</kbd></td>
      </tr>
      <tr>
        <td>Copy Properties (Styles, Fills, Borders)</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>C</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>C</kbd></td>
      </tr>
      <tr>
        <td>Paste Properties</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Place Image/Video Asset</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd></td>
      </tr>
      <tr>
        <td>Crop Image Tool</td>
        <td><kbd>Alt</kbd> + double click</td>
        <td><kbd>Option</kbd> + double click</td>
      </tr>
      <tr>
        <td>Flip Horizontal</td>
        <td><kbd>Shift</kbd> + <kbd>H</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>H</kbd></td>
      </tr>
      <tr>
        <td>Flip Vertical</td>
        <td><kbd>Shift</kbd> + <kbd>V</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>V</kbd></td>
      </tr>
      <tr>
        <td>Use layer as Mask</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>M</kbd></td>
      </tr>
      <tr>
        <td>Set Layer Opacity (10% to 100%)</td>
        <td>Press numeric keys <kbd>1</kbd> to <kbd>9</kbd> (<kbd>0</kbd> for 100%)</td>
        <td>Press numeric keys <kbd>1</kbd> to <kbd>9</kbd> (<kbd>0</kbd> for 100%)</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Typography & Text</h2>
<p>Key shortcuts to format text layers, adjust letter spacing, leading, and sizes on the fly.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bold</td>
        <td><kbd>Ctrl</kbd> + <kbd>B</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>B</kbd></td>
      </tr>
      <tr>
        <td>Italic</td>
        <td><kbd>Ctrl</kbd> + <kbd>I</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>I</kbd></td>
      </tr>
      <tr>
        <td>Underline</td>
        <td><kbd>Ctrl</kbd> + <kbd>U</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>U</kbd></td>
      </tr>
      <tr>
        <td>Align Text Left</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd></td>
      </tr>
      <tr>
        <td>Align Text Center</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd></td>
      </tr>
      <tr>
        <td>Align Text Right</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></td>
      </tr>
      <tr>
        <td>Align Text Justified</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd></td>
      </tr>
      <tr>
        <td>Adjust Font Size</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> or <kbd>&gt;</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> or <kbd>&gt;</kbd></td>
      </tr>
      <tr>
        <td>Adjust Letter Spacing (Tracking)</td>
        <td><kbd>Alt</kbd> + <kbd>,</kbd> or <kbd>.</kbd></td>
        <td><kbd>Option</kbd> + <kbd>,</kbd> or <kbd>.</kbd></td>
      </tr>
      <tr>
        <td>Adjust Line Height (Leading)</td>
        <td><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> or <kbd>&gt;</kbd></td>
        <td><kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> or <kbd>&gt;</kbd></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Vector & Shape Editing</h2>
<p>Essential options when path editing, outline strokes, flattening paths, or manipulating shapes.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Flatten Selected Vectors (Convert to Vector)</td>
        <td><kbd>Ctrl</kbd> + <kbd>E</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>E</kbd></td>
      </tr>
      <tr>
        <td>Outline Stroke (Convert Stroke to Shape)</td>
        <td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd></td>
      </tr>
      <tr>
        <td>Swap Fill and Stroke Colors</td>
        <td><kbd>Shift</kbd> + <kbd>X</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>X</kbd></td>
      </tr>
      <tr>
        <td>Paint Bucket Tool (Edit Mode)</td>
        <td><kbd>B</kbd></td>
        <td><kbd>B</kbd></td>
      </tr>
      <tr>
        <td>Bend Tool (Curve Vector Points)</td>
        <td>Hold <kbd>Ctrl</kbd></td>
        <td>Hold <kbd>Cmd</kbd></td>
      </tr>
      <tr>
        <td>Join Vector Selection Path Points</td>
        <td><kbd>Ctrl</kbd> + <kbd>J</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>J</kbd></td>
      </tr>
      <tr>
        <td>Delete and Heal Selected Vector Points</td>
        <td><kbd>Shift</kbd> + <kbd>Backspace</kbd></td>
        <td><kbd>Shift</kbd> + <kbd>Delete</kbd></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Components & Libraries</h2>
<p>Create clean workflows for components, variants, team libraries, and asset panels.</p>

<div class="shortcut-table-wrapper">
  <table class="shortcut-table">
    <thead>
      <tr>
        <th style="width: 40%;">Action</th>
        <th style="width: 30%;">Windows & Linux</th>
        <th style="width: 30%;">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Create Component</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>K</kbd></td>
      </tr>
      <tr>
        <td>Detach Instance from Component</td>
        <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd></td>
        <td><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>B</kbd></td>
      </tr>
      <tr>
        <td>Show Components / Assets Sidebar Panel</td>
        <td><kbd>Alt</kbd> + <kbd>2</kbd></td>
        <td><kbd>Option</kbd> + <kbd>2</kbd></td>
      </tr>
      <tr>
        <td>Open Team Library Dialog</td>
        <td><kbd>Alt</kbd> + <kbd>3</kbd> (or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd>)</td>
        <td><kbd>Option</kbd> + <kbd>3</kbd> (or <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>O</kbd>)</td>
      </tr>
    </tbody>
  </table>
</div>

<p>Mastering these keyboard combinations keeps your hands on the keyboard and helps you execute UI design layouts in Figma with peak speed. Print or bookmark this page for reference while you design!</p>
  `
};
