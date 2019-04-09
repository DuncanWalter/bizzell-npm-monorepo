declare module '*.css' {
  const styles: { [key: string]: string }
  export = styles
}

declare module '*.html' {
  const content: string
  export = content
}

// https://github.com/froala/react-froala-wysiwyg/issues/16
declare module 'react-froala-wysiwyg' {
  const content: any
  export = content
}

declare module 'react-froala-wysiwyg/FroalaEditorView' {
  const content: any
  export = content
}
