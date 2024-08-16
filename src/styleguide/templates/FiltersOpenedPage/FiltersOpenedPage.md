```jsx
import React, { useState } from 'react';
import {
	FiltersClosedListProvider,
	FiltersOpened,
	Layout,
} from '@juniorlevel/df_boilerplate-library';

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

const [filters, setFilters] = useState([
	{
		id: 1,
		cardItem: [{ id: 1, status: 'changed', text: 'lorem-1' }],
	},

	{
		id: 2,
		cardItem: [
			{ id: 1, status: 'updated', text: 'project-1' },
			{ id: 2, status: 'changed', text: 'project-2' },
			{ id: 3, status: 'updated', text: 'project-3' },
		],
	},
]);

<FiltersClosedListProvider>
	<Layout buttons={buttons} title="Caption" avatar={{ title: 'AV' }}>
		<FiltersOpened isOpen={true} filtersCards={filters} />
	</Layout>
</FiltersClosedListProvider>;
```

```jsx noeditor
import Image1 from '../../assets/FiltersOpened/filters-opened1.png';
import Image2 from '../../assets/FiltersOpened/filters-opened2.png';
<div>
	<img src={Image1} />
	<img src={Image2} />
</div>;
```
