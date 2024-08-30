// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { WelcomeButton, Welcome, WelcomeAuthButtons, SingleImageBg } from '@juniorlevel/df_boilerplate-library';
import { welcomeButtons, authButtons } from './data';
import image from '../pictures/Image1.jpg';

export const WelcomePage5 = (): React.Node => (
	<SingleImageBg imageUrl={image}>
		<Welcome buttons={welcomeButtons}>
			<MediaQuery minWidth={361}>
				<WelcomeAuthButtons>
					<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
					<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
				</WelcomeAuthButtons>
			</MediaQuery>
			<MediaQuery maxWidth={360}>
				<WelcomeAuthButtons>
					<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
					<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
				</WelcomeAuthButtons>
			</MediaQuery>
		</Welcome>
	</SingleImageBg>
);
