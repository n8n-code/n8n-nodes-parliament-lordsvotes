import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { divisionsDescription } from './resources/divisions';

export class ParliamentLordsvotes implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Parliament Lordsvotes',
		name: 'N8nDevParliamentLordsvotes',
		icon: { light: 'file:./parliament-lordsvotes.svg', dark: 'file:./parliament-lordsvotes.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API that allows querying of Lords Votes data.',
		defaults: { name: 'Parliament Lordsvotes' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevParliamentLordsvotesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Divisions",
					"value": "Divisions",
					"description": ""
				}
			],
			"default": ""
		},
		...divisionsDescription
		],
	};
}
