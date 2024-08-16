```jsx
import React from 'react';
import {
	FourImagesBg,
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import Image1 from './images/Image1.jpg';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';
import Image4 from './images/Image4.jpg';

const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

const buttons = [
	{
		id: 1,
		title: 'email',
		onClick: () => alert('email'),
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

<FourImagesBg imagesUrls={images}>
	<Welcome buttons={buttons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="VC" onClick={() => alert('VC click')} />
			<WelcomeButton title="G" onClick={() => alert('G click')} />
			<WelcomeButton title="R" onClick={() => alert('R click')} />
		</WelcomeAuthButtons>
	</Welcome>
</FourImagesBg>;
```

```jsx noeditor
import Image1 from '../../assets/Welcome/welcome-img1.png';
<img src={Image1} />;
```

```jsx
import {
	SingleImageBg,
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import Image1 from './images/Image1.jpg';

const buttons = [
	{
		id: 1,
		title: 'email',
		onClick: () => alert('email'),
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

<SingleImageBg imageUrl={Image1}>
	<Welcome buttons={buttons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="VC" onClick={() => alert('VC click')} />
			<WelcomeButton title="G" onClick={() => alert('G click')} />
			<WelcomeButton title="R" onClick={() => alert('R click')} />
		</WelcomeAuthButtons>
	</Welcome>
</SingleImageBg>;
```

```jsx noeditor
import Image2 from '../../assets/Welcome/welcome-img2.png';
<img src={Image2} />;
```

```jsx
import {
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';

const buttons = [
	{
		id: 1,
		title: 'email',
		onClick: () => alert('email'),
	},
	{
		id: 2,
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		id: 3,
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

<Welcome buttons={buttons}>
	<WelcomeAuthButtons>
		<WelcomeButton title="VC" onClick={() => alert('VC click')} />
		<WelcomeButton title="G" onClick={() => alert('G click')} />
		<WelcomeButton title="R" onClick={() => alert('R click')} />
	</WelcomeAuthButtons>
</Welcome>;
```

```jsx noeditor
import Image3 from '../../assets/Welcome/welcome-img3.png';
<img src={Image3} />;
```
