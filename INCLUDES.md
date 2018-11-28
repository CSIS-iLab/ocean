# Includes Parameters
Documentation on parameters used for includes throughout the site. For information on includes see the [Jekyll docs](https://jekyllrb.com/docs/includes/).

## site-nav
Displays a list of navigation menu items
`{%- include site-nav.html class="header__nav [or] footer__nav" location="inHeader [or] inFooter" -%}`

- `class`: Determines style differentiation between header and footer and home.

- `location`: References menu item attribute that determines whether the item should be rendered.

## post-block
`{% include post-block.html hide_excerpt=true show_image=true class="post-block--featured" %}`

- `hide_excerpt`: Set to `true` to hide the post excerpt
- `show_image`: Set to `true` to show the post thumbnail
- `class`: Add additional classes to block. Useful for specifying a featured post. Default is null.
