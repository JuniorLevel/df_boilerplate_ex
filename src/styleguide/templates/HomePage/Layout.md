```jsx
import React from 'react';
import { Layout } from '@juniorlevel/df_boilerplate-library';

const buttons = [
	{
		id: 1,
		title: 'Orders',
		onClick: () => {},
	},
	{
		id: 2,
		title: 'Compare',
		onClick: () => {},
	},
	{
		id: 3,
		title: 'Admin',
		onClick: () => {},
	},
];

<Layout
	title="Caption"
	buttons={buttons}
	theme="light"
	avatar={{ title: 'AV' }}
>
	<div />
</Layout>;
```

```jsx noeditor
import Image1 from '../../assets/Layout/layout.png';
<img src={Image1} />;
```
