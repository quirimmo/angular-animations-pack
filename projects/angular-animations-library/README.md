# angular-animations-library

An angular library which provides several animations, highly customisable, ready to be used inside the `animations` block of the components.

---

## Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [Animations](#animations)
  * [Bounce Animation](#bounce-animation)
    * [Vertical Bounce Animation](#vertical-bounce-animation)
    * [Horizontal Bounce Animation](#horizontal-bounce-animation)
  * [Fill Size Animation](#fill-size-animation)
    * [Fill Height Animation](#fill-height-animation)
    * [Fill Width Animation](#fill-width-animation)
  * [Fly Animation](#fly-animation)
    * [Vertical Fly Animation](#vertical-fly-animation)
    * [Horizontal Fly Animation](#horizontal-fly-animation)
  * [Appear Animation](#appear-animation)
  * [Fade Animation](#fade-animation)
  * [Highlight Animation](#highlight-animation)
  * [Rotate Animation](#rotate-animation)
  * [Scale Animation](#scale-animation)
* [Developer Usage](#developer-usage)

---

## Description

An utility library for angular which provides several methods in order to implement animations on the fly on your components, simply calling a function inside
your `animation` metadata of the component.

## Installation

In order to install the module execute the following command:

`npm install --save angular-animations-library`

and then inside your application import the `AngularAnimationsLibraryModule` including the following code:

```JavaScript
...
import { AngularAnimationsLibraryModule } from 'angular-animations-library';
...
@NgModule({
  ...
  imports: [..., AngularAnimationsLibraryModule],
  ...
})
export class AppModule {}
```

After that, simply call the animation's function you want to use inside your component's animation metadata property.

## Animations

All the animations can be used by calling the corresponding functions and passing in the parameters expected by the current animation you are using.
There are mainly two kind of animations:

* Simple Animations
* Complex Animations

The `Simple Animations` are based on simple linear style changes, while the `Complex Animations` are composed of style changes in different keyframes.
In order to use an animation, import the corresponding function from the `angular-animations-library` module, and then call this function from
the `animations` metadata of the component, like in the following example:

```javascript
import { highlightAnimationFn } from 'angular-animations-library';
@Component({
  ...
  animations: [
    highlightAnimationFn()
  ]
  ...
})
```

All the animations of the library can be combined if needed, in order to create more complex animations given by the composition of two or more animations.

