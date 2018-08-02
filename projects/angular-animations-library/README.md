# angular-animations-library

An angular library which provides several animations, highly customisable, ready to be used inside the `animations` metadata block of your components.

---

## Table Of Contents

- [Installation](#installation)
- [Example](#example)
- [Animations](#animations)
  - [Bounce Animation](#bounce-animation)
  - [Fill Size Animation](#fill-size-animation)
  - [Fly Animation](#fly-animation)
  - [Appear Animation](#appear-animation)
  - [Fade Animation](#fade-animation)
  - [Highlight Animation](#highlight-animation)
  - [Rotate Animation](#rotate-animation)
  - [Scale Animation](#scale-animation)
- [Developer Usage](#developer-usage)

---

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

## Animations

All the animations can be used by calling the corresponding functions and passing in the parameters expected by the current animation you are using.
There are two kind of animations:

- **Simple Animations**
- **Complex Animations**

The `Simple Animations` are based on simple linear style changes, while the `Complex Animations` are composed of style changes in different keyframes.
In order to use an animation, import the corresponding function from the `angular-animations-library` module, and then call this function from
the `animations` metadata of the component.

Every animation defines its trigger name, which will be used inside the HTML in order to embed the animation, and it defines 4 different transitions for every trigger:

1. **_active_**
2. **_inactive_**
3. **\*void => \*\***
4. **_\* => void_**

In this way, you are free to trigger the animation whenever you want, simply changing the state of its trigger from `inactive` to `active`.
The last two transitions are included only if you want that the animation will work also when the elment enters/leaves the view, through setting the `includeVoidTransitions` parameter to `true`, which is `false` by default.

You can pass several parameters to the animation, depending on the animation itself, but all of them share the two parameters `includeVoidTransitions` and
`duration`, which is `100ms` by default.

All the animations of the library can be combined if needed, in order to create more complex animations given by the composition of two or more animations.

## Example

In the HTML implement the trigger of the animation, and then change the state when you want to trigger the animation:

```html
<div [@highlight]="elementState" (mouseover)="elementState = 'active';" (mouseout)="elementState = 'inactive';">
  ANIMATED ELEMENT ON MOUSE OVER
</div>
```

Inside the component definition, add in the animations metadata, the corresponding function:

```javascript
@Component({
  ...
  animations: [
    highlightAnimationFn()
  ]
})
```

In this way, you use the default parameters for the animation, but you can change the behavior passing in the parameters that will overrite the default ones:

```javascript
@Component({
  ...
  animations: [
    highlightAnimationFn({
      duration: 500,
      includeVoidTransitions: true,
      highlightColor: 'red'
    })
  ]
})
```

### Bounce Animation

There are two types of bounce animations:

| Animation         | Trigger          | Function                    |
| ----------------- | ---------------- | --------------------------- |
| Vertical Bounce   | bounceVertical   | bounceVerticalAnimationFn   |
| Horizontal Bounce | bounceHorizontal | bounceHorizontalAnimationFn |

The parameters are an array of **_BounceAnimationStyleProperties_**, where each element represent a keyframe in the transition, and
each element includes:

| Parameter   | Type    | Description                                                         |
| ----------- | ------- | ------------------------------------------------------------------- |
| opacity     | number  | Opacity of the current keyframe                                     |
| translation | string  | Vertical or horizontal movement of the current keyframe             |
| offset      | number  | Offset of the current keyframe. It must be a value between 0 and 1. |

The default values are 3 keyframes with the following values:

```javascript
{ opacity: 0, translation: '-100%', offset: 0 },
{ opacity: 1, translation: '-15px', offset: 0.3 },
{ opacity: 1, translation: '0', offset: 1.0 }
```

### Fill Size Animation

There are two types of fill size animations:

| Animation   | Trigger    | Function              |
| ----------- | ---------- | --------------------- |
| Height Fill | fillHeight | fillHeightAnimationFn |
| Width Fill  | fillWidth  | fillWidthAnimationFn  |

The parameters are an object of **_FillSizeAnimationParams_** which includes:

| Parameter | Type    | Description                                                                  |
| --------- | ------- | ---------------------------------------------------------------------------- |
| size      | string  | The size to be filled horizontally or vertically, so the width or the height |

The default values are:

```javascript
{ size: '100%' }
```

### Fly Animation

There are two types of fly animations:

| Animation      | Trigger       | Function                 |
| -------------- | ------------- | ------------------------ |
| Vertical Fly   | flyVertical   | flyVerticalAnimationFn   |
| Horizontal Fly | flyHorizontal | flyHorizontalAnimationFn |

The parameters are an object of **_FlyAnimationParams_** which includes:

| Parameter    | Type    | Description                                                                   |
| ------------ | ------- | ----------------------------------------------------------------------------- |
| flyValue     | string  | Translation to be applied vertically or horizontally when the state is active |
| voidFlyValue | string  | Translation to be applied vertically or horizontally when the state is void   |

The default values are:

```javascript
{ flyValue: '100%', voidFlyValue: '-100%' }
```

### Appear Animation

The trigger is ***`appear`*** and the parameters are an object of **_AppearAnimationParams_** which includes just the default ones available for all the animations.

### Fade Animation

The trigger is ***`fade`*** and the parameters are an object of **_FadeAnimationParams_** which includes:

| Parameter     | Type    | Description                                    |
| ------------- | ------- | ---------------------------------------------- |
| fadeValue     | number  | Opacity to be applied when the state is active |
| voidFadeValue | number  | Opacity to be applied when the state is void   |

The default values are:

```javascript
{ fadeValue: 0, voidFadeValue: 0 }
```

### Highlight Animation

The trigger is ***`highlight`*** and the parameters are an object of **_HighlightAnimationParams_** which includes:

| Parameter          | Type    | Description                                             |
| ------------------ | ------- | ------------------------------------------------------- |
| highlightColor     | string  | Background color to be applied when the state is active |
| highlightVoidColor | string  | Background color to be applied when the state is void   |

The default values are:

```javascript
{ highlightColor: 'yellow', highlightVoidColor: highlightColor }
```

### Rotate Animation

The trigger is ***`rotate`*** and the parameters are an object of **_RotateAnimationParams_** which includes:

| Parameter         | Type    | Description                                                |
| ----------------- | ------- | ---------------------------------------------------------- |
| rotationValue     | number  | Degrees of rotation to be applied when the state is active |
| voidRotationValue | number  | Degrees of rotation to be applied when the state is void   |

The default values are:

```javascript
{ rotationValue: 45, voidRotationValue: -45 }
```

### Scale Animation

The trigger is ***`scale`*** and the parameters are an object of **_ScaleAnimationParams_** which includes:

| Parameter      | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| scaleValue     | number  | Scale value to be applied when the state is active |
| scaleVoidValue | number  | Scale value to be applied when the state is void   |

The default values are:

```javascript
{ scaleValue: 1.1, scaleVoidValue: 0 }
```
