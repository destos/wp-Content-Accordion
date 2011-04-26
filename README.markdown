This content accordion offers a pretty flexible solution for embedding
multiple accordions within content areas. By allowing you to set
multiple groups and insert accordions belonging to the same group in
different parts of the content.

## Usage:

Simply surround whatever content you wish to include within the
accordion with the shortcode <kbd>[accordion]your content
here[/accordion]</kbd> and the plugin will do the rest.
### accordion title

By default a link with the text “Expand Content” is added above the
hidden content to expand/collapse it. To change this text add a title
attribute to the shortcode like such <kbd>[accordion title=“Your Title
Here” ]your content here[/accordion]</kbd>
### groups

Accordions can be grouped together by specifying a unique group name or
number. By default all accordions are given a group that links all
accordions of the same post or page together. So clicking on one should
collapse the only open accordion content area of that page or post. To
assign your own group to an accordion add a group attribute and assign
it something unique you will use with the others in the group.

    [accordion title="I belond to group 1"  group="group-1"]your content here[/accordion]
    [accordion title="I'm special" group="special"]your content here[/accordion]
    [accordion title="I belong to group 1 as well" group="group-1"]your content here[/accordion]
    [accordion title="Your Title Here" ]your content here[/accordion]

The only two accordions that will be linked together are group–1, all
others will independently unless more accordions are added without a
group. In which case the last accordion listed would link with them.
## Styling the Accordion:

I included some sample styles you can include in your theme to style the
title and content area. At the moment no styles are provided by default
to allow you to add/customize your own.
### CSS Classes

The accordion title uses the .accordion-title class and the content is
wrapped in a div with the class .accordion-content. When a title is
clicked a class of .down is added to it.