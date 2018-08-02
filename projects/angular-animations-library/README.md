# angular-animations-library

An angular library which provides several animations, highly customisable, ready to be used inside the `animations` block of the components.

---

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Animations](#animations)
  - [Bounce Animation](#bounce-animation)
    - [Vertical Bounce Animation](#vertical-bounce-animation)
    - [Horizontal Bounce Animation](#horizontal-bounce-animation)
  - [Fill Size Animation](#fill-size-animation)
    - [Fill Height Animation](#fill-height-animation)
    - [Fill Width Animation](#fill-width-animation)
  - [Fly Animation](#fly-animation)
    - [Vertical Fly Animation](#vertical-fly-animation)
    - [Horizontal Fly Animation](#horizontal-fly-animation)
  - [Appear Animation](#appear-animation)
  - [Fade Animation](#fade-animation)
  - [Highlight Animation](#highlight-animation)
  - [Rotate Animation](#rotate-animation)
  - [Scale Animation](#scale-animation)
- [Developer Usage](#developer-usage)

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

- **Simple Animations**
- **Complex Animations**

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

Every animation defines its trigger name, which will be used inside the HTML in order to embed the animation, and it defines 4 different states for every trigger:

1. **_active_**
2. **_inactive_**
3. **\*void => \*\***
4. **_\* => void_**

The last two are included only if you want that the animation will work also when the elment enters/leaves the view, through setting the `includeVoidTransitions`
parameter to `true`.
In this way, you are free to trigger the animation whenever you want, simply changing the state of its trigger from `inactive` to `active`.

The following snippet shows how to implement the trigger inside the HTML in the case above of the highlight animation, achieving an highlight animation on mouse over:

```html
<div [@highlight]="elementState" (mouseover)="elementState = 'active';" (mouseout)="elementState = 'inactive';">
  ANIMATED ELEMENT ON MOUSE OVER
</div>
```

You can pass several parameters to the animation, depending on the animation itself, but all of them share the two parameters `includeVoidTransitions` and
`duration`.

All the animations of the library can be combined if needed, in order to create more complex animations given by the composition of two or more animations.

### Bounce Animation

There are two types of bounce animations:

1. **Vertical Bounce**
2. **Horizontal Bounce**

These animations are based on keyframes, so if you want to, you can specify new keyframes which differ from the default ones.

The params of this kind of animation are an array of **_BounceAnimationStyleProperties_**, where each element represent a keyframe in the transition, and
each element includes:

1. **_opacity_**: A number which represents the opacity of the current keyframe
2. **_translation_**: A string which represents the vertical or horizontal translation of the current keyframe
3. **_offset_**: A number which represents the offset of the current keyframe

### Vertical Bounce Animation

You can use a Vertical Bounce Animation using the function **_`bounceVerticalAnimationFn`_** and passing in the parameters you have seen above for the bounce animations.

Inside your component, use the following code in order to import and call the Vertical Bounce Animation:

```javascript
import { bounceVerticalAnimationFn } from 'angular-animations-library';

@Component({
  ...
  animations: [
    bounceVerticalAnimationFn()
  ]
  ...
})
```

The default values are 3 keyframes with the following values:

```javascript
{ opacity: 0, translation: '-100%', offset: 0 },
{ opacity: 1, translation: '-15px', offset: 0.3 },
{ opacity: 1, translation: '0', offset: 1.0 }
```

Then inside your HTML you must use the trigger name ***`bounceVertical`*** passing the state `active` when you want to trigger the animation, and `inactive` when you
want to stop it.
An example of the HTML code could be something like the following:

```html
<div class="red-block" [@bounceVertical]="animationState" (mouseover)="animationState = 'active';" (mouseout)="animationState = 'inactive';">
  ANIMATED BLOCK WITH VERTICAL BOUNCE ANIMATION ON MOUSE OVER
</div>
```

### Horizontal Bounce Animation

You can use a Horizontal Bounce Animation using the function **_`bounceHorizontalAnimationFn`_** and passing in the parameters you have seen above for the bounce animations.

Inside your component, use the following code in order to import and call the Horizontal Bounce Animation:

```javascript
import { bounceHorizontalAnimationFn } from 'angular-animations-library';

@Component({
  ...
  animations: [
    bounceHorizontalAnimationFn()
  ]
  ...
})
```

The default values are 3 keyframes with the following values:

```javascript
{ opacity: 0, translation: '-100%', offset: 0 },
{ opacity: 1, translation: '-15px', offset: 0.3 },
{ opacity: 1, translation: '0', offset: 1.0 }
```

Then inside your HTML you must use the trigger name ***`bounceHorizontal`*** passing the state `active` when you want to trigger the animation, and `inactive` when you
want to stop it.
An example of the HTML code could be something like the following:

```html
<div class="red-block" [@bounceHorizontal]="animationState" (mouseover)="animationState = 'active';" (mouseout)="animationState = 'inactive';">
  ANIMATED BLOCK WITH HORIZONTAL BOUNCE ANIMATION ON MOUSE OVER
</div>
```

### Fill Size Animation

There are two types of fill size animations:

1. **Height Fill**
2. **Width Fill**

These animations are simple animations, not based on keyframes but just on styles transitions, and if you want to, you can specify new style properties which differ from the default ones.

The params of this kind of animation are an object **_FillSizeAnimationParams_**, which includes:

1. **size**: A string representing the size to be filled, horizontally or vertically, so the width or the height
