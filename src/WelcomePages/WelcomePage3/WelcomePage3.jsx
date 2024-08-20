// @flow

import {
	FourImagesBg,
	MediaQuery,
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import React from 'react';

interface IWelcomePage3Props {
	imagesUrls: { id: number, url: string }[];
}

export const WelcomePage3 = ({
	imagesUrls,
}: IWelcomePage3Props): React.Node => {
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
				<MediaQuery minWidth={361}>
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
				</MediaQuery>
				<MediaQuery maxWidth={360}>
					<WelcomeAuthButtons>
						<WelcomeButton title="G" onClick={(): any => {}} />
						<WelcomeButton title="VK" onClick={(): any => {}} />
					</WelcomeAuthButtons>
				</MediaQuery>
			</Welcome>
		</FourImagesBg>
	);
};
