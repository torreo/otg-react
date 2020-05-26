# Base application template for training

## Goal

Create basic application which allows user to type some text and display it in preview box as heading of arbitrary level.
Allowed headings are as per HTML specs, so H1, H2, H3, H4, H5, H6.

User should be able to type any text in some input control. Upon typing user should be able to immediately see how it looks in preview area.

User should be able to select level of header (e.g. H1..H6) in dropdown box with predefined set of options. 
Once user selects item from dropdown - this selection should be confirmed as selected item in dropdown and 
immediately displayed using according HTML tag in preview box.

User should be able to adjust heading level using + and - buttons. + button increases level (up to 6), and - button decreases level (down to 1). 
Once user reached allowed boundaries of valid level range (e.g. 1..6) we shall disable the corresponding button.
So if user currently has heading of level 2 selected, both + and - buttons should be enabled. 
But once he clicks - button, we need to update preview box, reflect the change as current value of dropdown control and 
disable "-" button (because we've reached the minimum possible value). Same for "+" button, when it reaches top boundary (e.g. 6).
All changes should be immediately reflected in preview box according to currently selected value of heading level.

User should see changes reflected immediately, regardless of which type of control he uses (+/- buttons or dropdown).
All these controls should act in sync.    

## Bonus points

- Implement inline editing.
E.g. user able to type in input control and this control shows how text will look like. 
For this case it's acceptable to have styles defined as classes (.h1, .h2, ..., .h6). 
They could be made visually similar to actual H1..H6 sizes via CSS. 
Also you can consider showing +/- and dropdown controls when user gets input focused, when input blurred (e.g. lost focus) - we can hide those controls.

- Write some tests, according to example in App.test.js.

- Any other good ideas are also welcome
