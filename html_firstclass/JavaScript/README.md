# Javascript

Javascript is another fundamental element in web development. In fact, Javascript is not necessary to run a web application, but, today, it is difficult to find a web site that rejects its use.

Javascript is fundamental to bring rich interactions between the user and the application, from popping up a message to running a game on browser

Javascript is mosmoret needed to manipulate Document Object Model (DOM), that represents the H TML document in the browser memory, which, through Javascript functions, you can add, change or remove elements on the page.

To create variables visibles just in the scope that it was defined we use the keyword `let`

If we want "global" variables, we use the keyword `var`

With `const` we will create a constant and it value can't be changed

Let's imagine that we need to change the text of some button in our web page.
First we have to create a variable and reference the HTML element for example by Id or Class
```js
let button = document.getElementById('button')
button.innerText = 'New button text'
```

The `document` variable its a reference to DOM. It has a lot of functions to access and manipulate those elements.

We also can associate functions that will be activate by determinate page events, like events associated with elements.

```js
<script>
    var button = document.getElementById('button')
    function changeButtonName(event){
        event.preventDefault()
        button.innerText = 'Cursos - Alterado'
    }
    button.onclick = changeButtonName
</script>
```

Here we are manipulating the inner text of button when we click on it.
the `onclick` property associated to the button referenced by Id, activates the `changeButtonName` function when clicked


With `addEventListener` we could do the same, but we don't need to click exactly on the button, we can click on anywhere of the page
```js
<script>
    var button = document.getElementById('button')
    function changeButtonName(event){
        event.preventDefault()
        button.innerText = 'Cursos - Alterado'
    }
    document.addEventListener('click', changeButtonName)
</script>
```

`preventDefault` is used to prevent the default behaviour of the element, so the button will not open a link, but change it name

Each HTML element has it own JS events so its a vast study.

