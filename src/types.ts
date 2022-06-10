export type Inputs = {
	fleet: string;
	source: string;
	environment: string;
	balenaToken: string;
	githubToken: string;
	cache: boolean;
	versionbot: boolean;
	createTag: boolean;
	layerCache: boolean;
	environmentVariables?: string;
};

export type RepoContext = {
	owner: string;
	name: string;
	sha: string;
	pullRequest: PullRequest | null;
};

export type PullRequest = {
	id: number;
	number: number;
	merged: boolean;
};

export type Release = {
	id: number;
	isFinal: boolean;
};

export type Tags = {
	sha: string;
	pullRequestId?: number;
};

export type BuildOptions = {
	noCache: boolean;
	draft: boolean;
	tags: Tags;
	env?: string[];
};

export const DEFAULT_BUILD_OPTIONS: Partial<BuildOptions> = {
	draft: true,
	noCache: false,
};
