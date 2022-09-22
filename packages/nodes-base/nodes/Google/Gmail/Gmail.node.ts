import { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';

import { NodeVersionedType } from '../../../src/NodeVersionedType';

import { GmailV1 } from './v1/GmailV1.node';

import { GmailV2 } from './v2/GmailV2.node';

export class Gmail extends NodeVersionedType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Gmail',
			name: 'gmail',
			icon: 'file:gmail.svg',
			group: ['transform'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Consume the Gmail API',
			defaultVersion: 2,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new GmailV1(baseDescription),
			2: new GmailV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
