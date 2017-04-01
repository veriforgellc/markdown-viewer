
var md = {}

md.marked = {
  defaults: {
    breaks: false,
    gfm: true,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    tables: true,
    langPrefix: 'language-' // prism
  },
  description: {
    breaks: 'Enable GFM line breaks\n(requires the gfm option to be true)',
    gfm: 'Enable GFM\n(GitHub Flavored Markdown)',
    pedantic: 'Don\'t fix any of the original markdown\nbugs or poor behavior',
    sanitize: 'Ignore any HTML\nthat has been input',
    smartLists: 'Use smarter list behavior\nthan the original markdown',
    smartypants: 'Use "smart" typographic punctuation\nfor things like quotes and dashes',
    tables: 'Enable GFM tables\n(requires the gfm option to be true)'
  },
  compile: (markdown, sendResponse) => {
    chrome.storage.sync.get('marked', (res) => {
      var html = marked(markdown, res.marked)
      sendResponse({message: 'html', html})
    })
  }
}
