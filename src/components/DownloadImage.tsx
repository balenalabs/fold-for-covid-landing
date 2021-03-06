import React from 'react';
import { ImageForm } from '@bit/sradevski.balena-image-form.image-form';
import { Box } from 'rendition';
import * as BalenaSdk from 'balena-sdk';
import styled from 'styled-components';
import { client } from './useTracker';

const DOWNLOAD_IMAGE_ENDPOINT = `https://api.balena-cloud.com/download`;

const ImageFormContainer = styled(Box)`
	& hr {
		display: none;
	}

	& button {
		margin-left: 0;
		margin-right: auto;
	}
`;

interface DownloadImageProps {
	selectedApp: BalenaSdk.Application | undefined;
	selectedDeviceType: BalenaSdk.DeviceType | undefined;
	sdk: BalenaSdk.BalenaSDK;
}

export const DownloadImage = ({
	selectedApp,
	selectedDeviceType,
	sdk,
}: DownloadImageProps) => {
	const [releaseId, setReleaseId] = React.useState<number | undefined>();

	const deviceType = {
		...selectedDeviceType,
		options: selectedDeviceType?.options?.filter(
			(option: any) => option.name !== 'advanced',
		),
	};

	React.useEffect(() => {
		if (!selectedApp?.commit) {
			return;
		}

		sdk.models.release
			.get(selectedApp.commit)
			.then((res) => setReleaseId(res.id));
	}, [sdk.models.release, selectedApp]);

	return (
		<ImageFormContainer mt={3} width="80%">
			{deviceType && selectedApp && (
				<>
					<ImageForm
						downloadUrl={DOWNLOAD_IMAGE_ENDPOINT}
						appId={selectedApp.id}
						appName={selectedApp?.app_name}
						sdk={sdk}
						rawVersion={'latest'}
						deviceType={deviceType}
						getDownloadSize={() => Promise.resolve('')}
						onDownload={() =>
							client.track('[covid] Download Image', {
								deviceType: (deviceType as BalenaSdk.DeviceType)?.slug,
							})
						}
						setIsDownloadingConfig={() => null}
						// This will result in the .local domain being `foldforcovid.local`
						configurationComponent={
							<>
								<input type="hidden" name="hostname" value="foldforcovid" />
								{releaseId && (
									<input type="hidden" name="releaseId" value={releaseId} />
								)}
							</>
						}
					/>
				</>
			)}
		</ImageFormContainer>
	);
};
