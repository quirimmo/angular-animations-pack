# angular-animations-library

An angular library which provides several animations, highly customisable, ready to be used inside the `animations` metadata block of your components.

If you like the project, and if you would like that this will be updated and maintained adding new animations and features, please leave a star on the
github repository.

---

## Table Of Contents

- [Installation](#installation)
- [Animations](#animations)
- [Builtin Animations](#builtin-animations)
  - [Builtin Animations Example](#builtin-animations-example)
  - [Builtin Bounce Animations](#builtin-bounce-animations)
  - [Builtin Fade Animations](#builtin-fade-animations)
  - [Builtin Fold Animations](#builtin-fold-animations)
- [Custom Animations](#custom-animations)
  - [Custom Animations Example](#custom-animations-example)
  - [Bounce Animation](#bounce-animation)
  - [Fill Size Animation](#fill-size-animation)
  - [Fly Animation](#fly-animation)
  - [Appear Animation](#appear-animation)
  - [Fade Animation](#fade-animation)
  - [Highlight Animation](#highlight-animation)
  - [Rotate Animation](#rotate-animation)
  - [Scale Animation](#scale-animation)
- [Notes](#notes)

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

- **Custom Animations**
- **Builtin Animations**

In order to use an animation, import the corresponding function from the `angular-animations-library` module, and then call this function from
the `animations` metadata of the component.

## Builtin Animations

The `Builtin Animations` are animations ready to be used for entering/leaving effects.
They are really easy to be implemented and they can or cannot accept some parameters.

Every animation defines its trigger name, used inside the HTML in order to implement the animation.

Most of these animations define only 2 transitions,
even if few of them define also the transitions you will see in the **_`Custom Animations`_**, so `active` and `inactive`:

1. **_:enter_**
2. **_:leave_**

The `duration` is 300 ms by default, but it can be changed passing in the parameter.

You can combine entering and leaving animation of different types on the same element.

## Builtin Animations Example

In the HTML implement the trigger of the animation, even without specifying any state:

```html
<div [@foldIn] [@foldOut]>
  ANIMATED ELEMENT ON ENTER AND ON LEAVE WITH FOLD ANIMATION
</div>
```

Inside the component definition, add in the animations metadata, the corresponding function:

```javascript
@Component({
  ...
  animations: [
    foldInAnimation()
  ]
})
```

In this way, you use the default parameters for the animation, but you can change the behavior passing in the parameters that will override the default ones:

```javascript
@Component({
  ...
  animations: [
    foldInAnimation({
      duration: 500
    })
  ]
})
```

### Builtin Bounce Animations

The parameters are an array of `BounceAnimationParams` so structured:

```javascript
{ opacity: `number`, translation: `string`, offset: `number` }
```

| Animation        | Trigger        | Function                | Parameters Values                                           |
| ---------------- | -------------- | ----------------------- | ----------------------------------------------------------- |
| Bounce In Left   | bounceInLeft   | bounceInLeftAnimation   | `{ 0, '-100%', 0 }, { 0.5, '20%', 0.7 }, { 1, '0', 1.0 }`   |
| Bounce In Right  | bounceInRight  | bounceInRightAnimation  | `{ 0, '100%', 0 }, { 0.5, '-20%', 0.7 }, { 1, '0', 1.0 }`   |
| Bounce Out Left  | bounceOutLeft  | bounceOutLeftAnimation  | `{ 0, '0%', 0 }, { 0.5, '20%', 0.7 }, { 1, '-100%', 1.0 }`  |
| Bounce Out Right | bounceOutRight | bounceOutRightAnimation | `{ 0, '0%', 0 }, { 0.5, '-20%', 0.7 }, { 1, '100%', 1.0 }`  |
| Bounce In Up     | bounceInUp     | bounceInUpAnimation     | `{ 0, '-100%', 0 }, { 0.5, '-20%', 0.7 }, { 1, '0%', 1.0 }` |
| Bounce In Down   | bounceInDown   | bounceInDownAnimation   | `{ 0, '100%', 0 }, { 0.5, '-20%', 0.7 }, { 1, '0%', 1.0 }`  |
| Bounce Out Up    | bounceOutUp    | bounceOutUpAnimation    | `{ 0, '0%', 0 }, { 0.5, '20%', 0.7 }, { 1, '-100%', 1.0 }`  |
| Bounce Out Down  | bounceOutDown  | bounceOutDownAnimation  | `{ 0, '0%', 0 }, { 0.5, '-20%', 0.7 }, { 1, '100%', 1.0 }`  |

### Builtin Fade Animations

| Animation      | Trigger       | Function               |
| -------------- | ------------- | ---------------------- |
| Fade In        | fadeIn        | fadeInAnimation        |
| Fade Out       | fadeOut       | fadeOutAnimation       |
| Fade In Left   | bounceInLeft  | bounceInRightAnimation |
| Fade In Right  | bounceInRight | bounceInRightAnimation |
| Fade Out Left  | fadeOutLeft   | fadeOutLeftAnimation   |
| Fade Out Right | fadeOutRight  | fadeOutRightAnimation  |
| Fade In Up     | fadeInUp      | fadeInUpAnimation      |
| Fade In Down   | fadeInDown    | fadeInDownAnimation    |
| Fade Out Up    | fadeOutUp     | fadeOutUpAnimation     |
| Fade Out Down  | fadeOutDown   | fadeOutDownAnimation   |

### Builtin Fold Animations

| Animation | Trigger | Function         |
| --------- | ------- | ---------------- |
| Fold In   | foldIn  | foldInAnimation  |
| Fold Out  | foldOut | foldOutAnimation |

## Custom Animations

The `Custom Animations` are based on simple linear style changes or style changes with different keyframes.

Every animation defines its trigger name, which will be used inside the HTML in order to embed the animation, and it defines 4 different transitions for every trigger:

1. **_active_**
2. **_inactive_**
3. **\*void => \*\***
4. **_\* => void_**

In this way, you are free to trigger the animation whenever you want, simply changing the state of its trigger from `inactive` to `active`.
The last two transitions are included only if you want that the animation will work also when the elment enters/leaves the view, through setting the `includeVoidTransitions` parameter to `true`, which is `false` by default.

You can pass several parameters to the animation, depending on the animation itself, but all of them share the two parameters `includeVoidTransitions` and
`duration`, which is `300ms` by default.

All the animations of the library can be combined if needed, in order to create more complex animations given by the composition of two or more animations.

## Custom Animations Example

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
    highlightAnimation()
  ]
})
```

In this way, you use the default parameters for the animation, but you can change the behavior passing in the parameters that will override the default ones:

```javascript
@Component({
  ...
  animations: [
    highlightAnimation({
      duration: 500,
      includeVoidTransitions: true,
      highlightColor: 'red'
    })
  ]
})
```

### Bounce Animation

There are two types of bounce animations:

| Animation         | Trigger          | Function                  |
| ----------------- | ---------------- | ------------------------- |
| Vertical Bounce   | bounceVertical   | bounceVerticalAnimation   |
| Horizontal Bounce | bounceHorizontal | bounceHorizontalAnimation |

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

| Animation   | Trigger    | Function            |
| ----------- | ---------- | ------------------- |
| Height Fill | fillHeight | fillHeightAnimation |
| Width Fill  | fillWidth  | fillWidthAnimation  |

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

| Animation      | Trigger       | Function               |
| -------------- | ------------- | ---------------------- |
| Vertical Fly   | flyVertical   | flyVerticalAnimation   |
| Horizontal Fly | flyHorizontal | flyHorizontalAnimation |

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

## Notes

Sometimes you can see an error of the ATO compiler when adding directly the functions inside the animations metadata block of the component.

The precise error is the following:

> Angular - Error during template compile. Function calls are not supported in decorators but was called

This is due to the fact that the animations metadata block wants in only static code.

In order to get rid of this error, you need to define the animation values in an another file and then import them inside the component file.

Define an external file called for example **_custom-animations.ts_** exporting the animation's value:

```typescript
import { bounceInDownAnimation } from 'angular-animations-library';

export const bounceInDownAnimationValue = bounceInDownAnimation();
```

Then inside the component's animations block, include the `bounceInDownAnimationValue`
