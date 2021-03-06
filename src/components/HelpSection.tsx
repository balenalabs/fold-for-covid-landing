import React from 'react';
import { Flex, Box, Heading, Txt, Button } from 'rendition';
import join_1 from '../img/join_1.svg';
import join_2 from '../img/join_2.svg';
import join_3 from '../img/join_3.svg';
import { ExternalLink } from './ExternalLink';
import { InfoStep } from './InfoStep';
import { Link } from './Link';

const HelpSection = () => {
	return (
		<Flex
			mt={5}
			mx="auto"
			maxWidth="1280px"
			flexDirection={['column', 'column', 'row', 'row']}
			alignItems="flex-start"
			justifyContent="space-between"
			px={3}
			id="how-does-this-help"
		>
			<Box flex={1} mr={[0, 0, 3]}>
				<Heading.h2 bold>
					What is Fold for Covid, and how does it help?
				</Heading.h2>
				<Txt.p mt={3}>
					The Fold for Covid project aims to make it easy to donate spare
					compute capacity to support COVID-19 research with a few simple steps.{' '}
					<ExternalLink
						label="This effort"
						href="https://www.balena.io/blog/balena-enables-more-devices-to-join-rosetta-home-to-research-covid-19/"
					/>{' '}
					contributes to the{' '}
					<ExternalLink
						label="Rosetta@Home"
						href="https://boinc.bakerlab.org"
					/>{' '}
					project, led by the{' '}
					<ExternalLink
						href="https://www.bakerlab.org"
						label="Baker Laboratory at the University of Washington"
					/>
					, which uses distributed computing to help scientists and doctors find
					potential treatments for COVID-19.
				</Txt.p>
				<Txt.p mt={3}>
					Your contributions help researchers look for proteins that bind to the
					famous “spike” protein on COVID-19. By finding these binding proteins,
					doctors hope to develop medicines that prevent the virus from entering
					healthy cells.
				</Txt.p>
				<Txt.p mt={3}>
					Do you have a spare computer or single board computer at home? Join
					the fight!
				</Txt.p>
				<Button outline mb={2} mt={3} href="/how-does-it-help">
					Read More
				</Button>
			</Box>

			<Box flex={1} mt={[3, 3, 0, 0]} ml={[0, 0, 3, 3]}>
				<Heading.h2 bold>Join the fight!</Heading.h2>
				<Flex
					width="100%"
					justifyContent={['center']}
					flexDirection={['column', 'column', 'row', 'row']}
					my={3}
				>
					<InfoStep
						index={1}
						title="Find an old laptop or computer"
						img={join_1}
					></InfoStep>
					<InfoStep
						index={2}
						title="Download and install  balenaEtcher &amp; image"
						img={join_2}
					></InfoStep>
					<InfoStep
						index={3}
						title="Let’s fight the virus together!"
						img={join_3}
					></InfoStep>
				</Flex>
				<Button mt={3} mb={[2, 2, 1]} href="#get-started" primary>
					Get Started
				</Button>
				<Txt mt={2} color="text.light">
					If you don’t have anything to run this project on you can still help
					by running Rosetta@home on your desktop computer,{' '}
					<Link dark href="/#get-started-main-computer">
						<Txt.span
							ml={-1}
							style={{ textDecoration: 'underline' }}
							fontSize={1}
						>
							instructions are here.
						</Txt.span>
					</Link>
				</Txt>
			</Box>
		</Flex>
	);
};

export default HelpSection;
