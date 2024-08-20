// @flow

import {
	FourImagesBg,
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import React from 'react';

interface IWelcomePage1Props {
	imagesUrls: { id: number, url: string }[];
}

export const WelcomePage1 = ({
	imagesUrls,
}: IWelcomePage1Props): React.Node => {
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

	return (
		<FourImagesBg imagesUrls={imagesUrls}>
			<Welcome buttons={buttons}>
				<WelcomeAuthButtons>
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
				</WelcomeAuthButtons>
			</Welcome>
		</FourImagesBg>
	);
};
