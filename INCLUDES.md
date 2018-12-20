# Includes Parameters
Documentation on parameters used for includes throughout the site. For information on includes see the [Jekyll docs](https://jekyllrb.com/docs/includes/).

## logo
Displays the blue SOS logo. This should be used at the end of the content of commentaries & spotlights.
`{% logo %}`

## site-nav
Displays a list of navigation menu items
`{%- include site-nav.html class="header__nav [or] footer__nav" location="inHeader [or] inFooter" -%}`

- `class`: Determines style differentiation between header and footer and home.
- `location`: References menu item attribute that determines whether the item should be rendered.

## social-share
Displays a list of social share options
`{%- include social-share.html class="site__header [or] post__header [or] post__footer" -%}`

- `class`: Determines style differentiation between post header and footer--or special functionality for site header on spotlights.


## post-block
`{% include post-block.html minimal=true  %}`

- `minimal`: Set to `true` to hide the post excerpt, photo, and authors
- `class`: Add additional classes to block. Useful for specifying a featured post. Default is null.

## spotlights
- `align`: Set to 'left' to align left. Set to 'right' to align right
- 'width': Set 'small' 'large' 'full' or 'max' width
