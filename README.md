
# ReactJS Navigation Bar
Bootstrap Navigation bar rebuilt with React components (ES6 classes).
No boostrap.min.css file! This navigation bar is built with Radium CSS inline styling. 

# ToDO

Responsive navigation bar

# Install
Clone the repository. Then install dependencies,

```js
npm install
```

# Run the webpack dev server
```js
npm start
```
Go to http://localhost:8080/ on your favorite browser to view the Navigation bar. 


## Components
```js
const dropdownItems = [
    {href: '#', name: 'Overview'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
];

const navbar = (
    <Navbar>
        <NavbarHeader href="homepage.html" name="Website Name"/>
        <NavbarItems>
            <Item link="about.html" title="About" />
            <Item link="contact.html" title="Contact" />
            <Item link="services.html" title="Services" />
            <NavbarDropdown name="Features">
                  <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

React.render(navbar, document.getElementById('navbar'));

```
