// @flow

import {
	SingleImageBg,
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import React from 'react';

interface IWelcomePage8Props {
	imageUrl: string;
}

export const WelcomePage8 = ({ imageUrl }: IWelcomePage8Props): React.Node => {
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
		<SingleImageBg imageUrl={imageUrl}>
			<Welcome buttons={buttons}>
				<WelcomeAuthButtons>
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
					<WelcomeButton title="G" onClick={(): any => {}} />
					<WelcomeButton title="VK" onClick={(): any => {}} />
				</WelcomeAuthButtons>
			</Welcome>
		</SingleImageBg>
	);
};
