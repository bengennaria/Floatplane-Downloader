export type Resolutions = ["360", "720", "1080", "1440", "2160", "3840", "4320"];

import type { ValueOfA } from "@inrixia/helpers/ts";

export type ChannelOptions = {
	title: string;
	titleOverride?: string;
	skip: boolean;
	isChannel: string;
	daysToKeepVideos?: number;
	replace?: string[];
	postTitleChecks?: postTitleChecks;
};

export type postTitleChecks = Array<{ match_title: string; result_title: string }>;
export type Channels = ChannelOptions[];

export type PlexSections = Array<{ server: string; section: string }>;
export type PlexSettings = {
	sectionsToUpdate: PlexSections;
	enabled: boolean;
	token: string;
};

export type SubscriptionSettings = {
	creatorId: string;
	plan: string;
	skip: boolean;
	channels: Channels;
};

export type Args = {
	username: string;
	password: string;
	token: string;
	headless: boolean;
	plexUsername: string;
	plexPassword: string;
	sanityCheck: boolean;
	dbPath: string;
	ffmpegPath: string;
	settingsPath: string;
};

export type PartialArgs = Partial<Args & Settings>;

export interface Extras extends Record<string, boolean> {
	stripSubchannelPrefix: boolean;
	downloadArtwork: boolean;
	saveNfo: boolean;
	considerAllNonPartialDownloaded: boolean;
}

export type Resolution = ValueOfA<Resolutions>;

export type Settings = {
	__SettingsWiki: string;
	runQuickstartPrompts: boolean;
	floatplane: {
		videoResolution: Resolution;
		videosToSearch: number;
		waitForNewVideos: boolean;
		seekAndDestroy: string[];
	};
	maxDownloadSpeed: number;
	filePathFormatting: string;
	plex: PlexSettings;
	extras: Extras;
	artworkSuffix: string;
	postProcessingCommand: string;
	subscriptions: {
		[key: string]: SubscriptionSettings;
	};
	metrics: {
		prometheusExporterPort: number | null;
		contributeMetrics: boolean;
	};
};
