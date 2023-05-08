# Frontend Tecnologies

* http protocol, html, css and everything related to web and front-end

## A Bit of History

Web is just popular as it is thanks to HTML creation and evolution

HTML was created in 90's by Tim Berners-Lee to make possible the information exchange between universities cientists

Tim Berners-Lee is also the founder of World Wide Web Consortium a.k.a W3C

    #### HTML 2.0 - 1995
        Characteristics formalization
    #### HTML 3.2 - 1997
        Allowed the creation of tables, applets and floating texts
    #### HTML 4.1 - 1999
        Multimedia and stylesheets support
    #### HTML 5.0 - 2014
        New field formats, controls and better usability

In the begginning, html pages are statics, but nowsday, html pages are dynamic and depends on user inputs, CSS and Java Script use


## HTML Base Structure

HTML states for *Hyper Text Markup Language*

HTML are composed by tags that states between < > (lesser than and greater than signals)
Some of those tags are closed with / (bar) before > (greater than signal) but not all the tags close this way, the most of them close with / (bar) before the tag name and than > (greater than signal)
We could code HTML in any text editor, like word(.doc), text document (.txt), or any other, in the end, we just have to convert it to html format (.html).

VSCode or other editors like Sublime are the best to support us, it has extensions to automate a lot of work on coding HTML

```html
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>First Document</title>
    </head>
        <body>
            <div>
                <h1>Hello, World!</h1>

                <p>First Paragraph</p>
            </div>
        </body>
    </html>
```

* What the heck this code does?

`html`: indicates the begginning of HTML document
`head`: tag with header informations, used by search engines to content indexation
`head`: tag com informações para o cabeçalho da página, muito usado nos motores de busca para indexação de conteúdo.
`meta`: allows the attribute use to page configuration and text format, compatibility between browsers and screen resolution
`title`: tag that shows the title page in browser tab
`body`: indicates the start of document body
`div`: generates block division inside the page
`h1`: shows text in "highlighted" format
`p`: paragraph tag.

There's a lot of tags available to build a web page, and a great place to consult is at w3schools https://www.w3schools.com/html/

* Formatting elements

`<b>`       -  bold
`<strong>`  -  strong
`<i>`       -  italic
`<sup>`     -  superior text
`<sub>`     -  inferior text

## CSS

CSS stands for Cascading Style Sheets

CSS consists on a stylization language used to format HTML elements and help developers to grants a beauty and cleaner web page visualization

Nowadays in CSS 3, we are able to implement functionality that, in the past, just Java Script could handle
This facilities provided lighter web pages loading, improving usability and performance.

While HTML defines the web page structure, CSS defines the style and organization. Also, with CSS we can apply effects and filters to adequate the navigation for any user condition.

There are three ways to use CSS in an HTML document:

1. Inline - CSS code insert directly in the HTML element
2. Inside - CSS code inside HTML file, incorporating trough <style></style> tag
3. Outside - Separated files to CSS and HTML and than reference that CSS document inside HTML document

All the three have their pros and cons, but the best practices way is Outside CSS

## Syntax

### CSS Selectors

CSS allow us to define styles for each element available at HTML document. We only need to use selectors correctly.

We can point to HTML elements trough:
1. element name         ->  for all elements of that type simply using element name like button{}
2. defining classes     ->  for all elements grouped on that class using a . before class-name{}
3. defining id's        ->  for all elements wich the id has been assigned using a # before id-name{}

We can also select children or brothers elements inside a structure or define styles for the whole elements on the web page using * 

* There are many CSS parameters to be used and we can consult them on the W3schools website

### Pseudo classes

Pseudo classes represents an special state for some HTML element, and, generally, indicates the user interaction with this element in determinated moment

They act with some pre-defined behaviours that can be very useful

A great example is `:hover` that changes a pre-seted button color when the user puts the cursor on a button

```css
    button {
    width: 260px;
    height: 50px;
    background-color: "#5394F9";
    }

    button:hover {
        background-color: "black";
    }
```

Other examples
`:active`       -  Verify if a link is active
`:checked`      -  Used with selection of radio, check or option elements
`:disabled`     -  Represents disabled state
`:focus`        -  When a element get focus
`:nth-child`    -  Select based on group positions


### Positioning

Element positioning on a web site is crucial for the good usability and style.
Develop a bad interface could ruin our project

By default all new element has your positioning set as static `position: static`. To change this initial behaviour we could use five values to `position` property:

1. absolute
2. fixed
3. relative
4. static
5. sticky

Each of those values allows a specific behaviour for the component that are receiving it

To use a value like `relative` we should first understand how the hierarchy was created between the elements.
This could be a hindrance, like when we have a lot of nested elements.

(pt-br) article to understand how to handle with positioning
https://www.devmedia.com.br/position-css-definindo-a-posicao-de-elementos-com-fixed-relative-e-absolute/37700

### position: relative

* This property specifies a relative position of the element related to the father element

This position is defined trough four other propertys: `top`,`bottom`,`left` & `right` that indicates the distance related to the top, bottom, left and/or right, taking as reference the father element.


### position: absolute

* This property "takes the element off the hierarchy". In fact, turns the element a children of the whole page, and not of a single element. 

Now, we could position this element in any place of the page. This could be useful in cases that we need to posite an alert box without breaking the page layout.

Despite this possibility, is also important to use the `position: absolute` with caution, once that, because this hierarchy change, all the page responsivity could be broken.


## position: fixed

* Fixed position works on a different way. Although the similarity between `fixed` and `absolute` exists, using `fixed`, the element will respond, in layout terms, to the browser.
It means that, although we scroll up and down the website, the element will stay fixed on the same position

This kind of property is specially useful to develop menus, so the user will never loose navigation options when using our website.


## Responsive Design

Basically, responsivity is the capability that we give to an website to be auto adaptable to any screen resolution

Today it seems obvious, but in the beginning of the internet, this caused many problems with elements and malfunctions.

(en) quite old but exceptional article about responsive design, retrating the begginnings of the approach
https://alistapart.com/article/responsive-web-design/


## Flexbox

Its a universal layout model that can be used to different screen resolutions, allowing dynamic adjustments, whitout worring about positioning of a bunch of elements at once

_from Wikipedia_
CSS Flexible Box Layout, commonly known as Flexbox,is a CSS 3 web layout model.It is in the W3C's candidate recommendation (CR) stage. The flex layout allows responsive elements within a container to be automatically arranged depending on viewport (device screen) size.

By default elements respects the order that they are positioned, so, we have to manage them to get different responses

The main flexbox commands are:

`justify-content` CSS property aligns items horizontally and accepts the following values: 
```css
justify-content: flex-start; #default value -> posite the elements on left side of the page
justify-content: flex-end;                  -> posite the elements on the right side of the page
justify-content: center;                    -> posite the elements on the center of the page
justify-content: space-between;             -> posite the elements on the page with equal space between
justify-content: space-around;              -> posite the elements on the page with equal space around
```

`align-items` CSS property aligns items vertically and accepts the following values:
```css
align-items: flex-start;                    -> Items align to the top of the container.
align-items: flex-end;                      -> Items align to the bottom of the container.
align-items: center;                        -> Items align at the vertical center of the container.
align-items: baseline;                      -> Items display at the baseline of the container.
align-items: stretch;                       -> Items are stretched to fit the container.
```

`flex-direction` CSS property defines the direction items are placed in the container, and accepts the following values:
```css
flex-direction: row;                        -> Items are placed the same as the text direction.
flex-direction: row-reverse;                -> Items are placed opposite to the text direction.
flex-direction: column;                     -> Items are placed top to bottom.
flex-direction: column-reverse;             -> Items are placed bottom to top.
```

* Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.

`flex-wrap` CSS property spread items out, which accepts the following values:
```css
flex-wrap: nowrap;                          -> Every item is fit to a single line.
flex-wrap: wrap;                            -> Items wrap around to additional lines.
flex-wrap: wrap-reverse;                    -> Items wrap around to additional lines in reverse.
```

* The two properties `flex-direction` and `flex-wrap` are used so often together that the shorthand property `flex-flow` was created to combine them. This shorthand property accepts the value of the two properties separated by a space. 
For example, you can use `flex-flow: row wrap` to set rows and wrap them.
Any combination is possible
```css
flex-flow: wrap column;
flex-flow: nowrap column-reverse;
flex-flow: wrap-reverse row;
```

`align-content` CSS property is used to set how multiple lines are spaced apart from each other. This property takes the following values:
```css
align-content: flex-start:                  -> Lines are packed at the top of the container.
align-content: flex-end:                    -> Lines are packed at the bottom of the container.
align-content: center:                      -> Lines are packed at the vertical center of the container.
align-content: space-between:               -> Lines display with equal spacing between them.
align-content: space-around:                -> Lines display with equal spacing around them.
align-content: stretch:                     -> Lines are stretched to fit the container.
```
* This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.


* Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the order property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).

`order`
```css
order: 1;
```

* Another property you can apply to individual items is `align-self`. This property accepts the same values as align-items and its value for the specific item.


Comprehensive guide to CSS flexbox layout.
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Webpages to flexbox training

Flexbox Zombie
https://mastery.games/post/flexboxzombies2/

Flexbox Froggy
https://flexboxfroggy.com/

## Bootstrap
