# tiptap-editor

### Quick Start

1. `git clone https://github.com/dwivedi-gaurav/tiptap-editor.git`
1. `cd tiptap-editor`
1. `yarn install`
1. `yarn dev`
1. Go to `http://localhost:3000`

### Folder structure

- **app**: Main application logic
  - **components**: React components
    - **editor** Tiptap editor
      - **internals** components used to build Editor component
        - `EditorControls.tsx` Buttons to format editor content
      - **styles** Css for editor component
        - `style.css`
      - `Editor.tsx` Main Editor component
    - **navbar** Top nav
      - `Navbar.tsx`
    - **notes** Notes component that uses editor component
      - **styles** Css for Notes component
        - `style.css`
      - `DisplayNotes.tsx` Component to display saved notes
      - `Notes.tsx` Parent of DisplayNotes.tsx
  - **store**: Redux store
- **public**: Test files
  - `logo.ong`: company logo
- `README.md`: Project documentation
- `package.json`
- `tailwind.config.js`
- `tsconfig.js`
- `postcss.config.mjs`

### Prod url

[tiptap editor](https://tiptap-editor-two.vercel.app/)
