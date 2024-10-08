// @flow

import React from 'react';
import { Welcome, FourImagesBg, WelcomeAuthButtons, WelcomeButton } from '@/components';
import { welcomeButtons, authButtons, images } from './data';

export const WelcomePage1 = (): React.Node => (
	<FourImagesBg imagesUrls={images}>
		<Welcome buttons={welcomeButtons}>
			<WelcomeAuthButtons>
				<WelcomeButton title={authButtons[0].title} onClick={authButtons[0].onClick} />
				<WelcomeButton title={authButtons[1].title} onClick={authButtons[1].onClick} />
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);
