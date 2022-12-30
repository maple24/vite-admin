# Notes

## Flexbox

### flex container

1. hidden md:flex
   ` for row direction, justify is x-axis, items is y-axis, for col direction, vice versa`
2. justify-between
3. items-center || self-end
4. flex-nowarp

### flex item

`flex item can also be a flex container`

1. use flex to place box position as well
2. order
3. flex-basis: width
4. flex-grow: when extend the page, the grow rate of box
5. \*flex-shrink: oppsite to grow

### misc

1. box-sizeing
   If you set box-sizing: border-box; on an element, padding and border are included in the width and height:
2. center element
   the best way to center a container is flexbox, however absolute postion with left-top-50% is doable

### group-hover

How to show a child or another depending on parent hover state?
Add `hidden group-hover:block` classes for child element, parent a element should have `group` class to work.

### [Position](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

`Relative`

> If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will have no effect on it’s positioning at all, it will be exactly as it would be if you left it as position: static; But if you do give it some other positioning attribute, say, top: 10px;, it will shift its position 10 pixels down from where it would normally be.

> One is that it introduces the ability to use z-index on that element, which doesn’t work with statically positioned elements. Even if you don’t set a z-index value, this element will now appear on top of any other statically positioned element. You can’t fight it by setting a higher z-index value on a statically positioned element.

> Any element that is a child of the relatively positioned element can be absolutely positioned within that block.

`Absolute`

> This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it.

> The trade-off (and most important thing to remember) about absolute positioning is that these elements are removed from the flow of elements on the page. An element with this type of positioning is not affected by other elements and it doesn’t affect other elements.

`Fixed`

> A fixed position element is positioned relative to the viewport, or the browser window itself. The viewport doesn’t change when the window is scrolled, so a fixed positioned element will stay right where it is when the page is scrolled.

`Sticky`

> Sticky positioning is really unique! A sticky element will just sit there like a static element, but as you scroll past it, if it’s parent element has room (usually: extra height) the sticky element will behave as if it’s fixed until that parent element is out of room.

## stop content overlaping sticky header
```
<!-- set z-index to 50 -->
z-50
```