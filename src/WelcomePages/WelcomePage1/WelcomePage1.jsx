// @flow

import React from 'react';
import {
	Welcome,
	FourImagesBg,
	WelcomeAuthButtons,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import { welcomeButtons, authButtons, images } from './data';

export const WelcomePage1 = (): React$MixedElement => (
	<FourImagesBg imagesUrls={images}>
		<Welcome buttons={welcomeButtons}>
			<WelcomeAuthButtons>
				<WelcomeButton
					title={authButtons[0].title}
					onClick={authButtons[0].onClick}
				/>
				<WelcomeButton
					title={authButtons[1].title}
					onClick={authButtons[1].onClick}
				/>
			</WelcomeAuthButtons>
		</Welcome>
	</FourImagesBg>
);
