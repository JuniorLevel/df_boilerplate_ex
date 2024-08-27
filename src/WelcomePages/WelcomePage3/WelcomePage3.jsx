// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import {
	Welcome,
	WelcomeAuthButtons,
	FourImagesBg,
	WelcomeButton,
} from '@juniorlevel/df_boilerplate-library';
import { welcomeButtons, authButtons, images } from './data';

export const WelcomePage3 = (): React.Node => (
	<FourImagesBg imagesUrls={images}>
		<Welcome buttons={welcomeButtons}>
			<MediaQuery minWidth={361}>
				<WelcomeAuthButtons>
					<WelcomeButton
						title={authButtons[0].title}
						onClick={authButtons[0].onClick}
					/>
					<WelcomeButton
						title={authButtons[1].title}
						onClick={authButtons[1].onClick}
					/>
					<WelcomeButton
						title={authButtons[2].title}
						onClick={authButtons[2].onClick}
					/>
					<WelcomeButton
						title={authButtons[3].title}
						onClick={authButtons[3].onClick}
					/>
					<WelcomeButton
						title={authButtons[4].title}
						onClick={authButtons[4].onClick}
					/>
					<WelcomeButton
						title={authButtons[5].title}
						onClick={authButtons[5].onClick}
					/>
					<WelcomeButton
						title={authButtons[6].title}
						onClick={authButtons[6].onClick}
					/>
					<WelcomeButton
						title={authButtons[7].title}
						onClick={authButtons[7].onClick}
					/>
					<WelcomeButton
						title={authButtons[8].title}
						onClick={authButtons[8].onClick}
					/>
					<WelcomeButton
						title={authButtons[9].title}
						onClick={authButtons[9].onClick}
					/>
				</WelcomeAuthButtons>
			</MediaQuery>
			<MediaQuery maxWidth={360}>
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
			</MediaQuery>
		</Welcome>
	</FourImagesBg>
);
