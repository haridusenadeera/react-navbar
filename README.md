
# React Bootsrap Navigation Bar
Bootstrap Navigation bar rebuilt with reactJS components.
No boostrap.css file! This navigation bar is built with Radium CSS inline styling. 

# Install
Clone the repository. Then,

```js
npm install
```

# Run the dev server
```js
npm start
```
Go to http://localhost:8080/ on the browser to view the Navigation bar. 


## Components
```js
const navbar = (
    <Navbar>
        <NavbarHeader href="homepage.html" name="Website Name"/>
        <NavbarItem>
<<<<<<< HEAD
            <Item link={about.html} title={About} />
            <Item link={contact.html} title={Contact} />
            <Item link={services.html} title={Services} />
=======
            <Item link="about.html" title={About} />
            <Item link="contact.html" title={Contact} />
            <Item link="services.html" title={Services} />
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
            <DropDown /> // under development
            <DropDown />
        </NavbarItem>
    </Navbar>
);

React.render(navbar, mountNode);

```
