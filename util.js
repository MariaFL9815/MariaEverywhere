var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i
var DefaultWhitelist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}
$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!

$('#myModal').modal() // initialized with defaults
$('#myModal').modal({ keyboard: false }) // initialized with no keyboard
$('#myModal').modal('show') // initializes and invokes show immediately

var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList

// To allow table elements
myDefaultWhiteList.table = []

// To allow td elements and data-option attributes on td elements
myDefaultWhiteList.td = ['data-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
var myCustomRegex = /^data-my-app-[\w-]+/
myDefaultWhiteList['*'].push(myCustomRegex)
