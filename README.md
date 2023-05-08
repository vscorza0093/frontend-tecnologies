# Front End Tecnologies

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

`<b>`       ->  bold
`<strong>`  ->  strong
`<i>`       ->  italic
`<sup>`     ->  superior text
`<sub>`     ->  inferior text

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
`:active`       ->  Verify if a link is active
`:checked`      ->  Used with selection of radio, check or option elements
`:disabled`     ->  Represents disabled state
`:focus`        ->  When a element get focus
`:nth-child`    ->  Select based on group positions









