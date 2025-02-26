type Research = {
	type: 'research';
	id: number;
	thumbnail: string;
	title: string;
	who: string;
	where: string;
	views: number;
	when: Date;
	content: string;
	summary: string;
	tag: string[];
};

type Investment = {
	type: 'invest';
	id: number;
	thumbnail: string;
	title: string;
	who: string;
	where: string;
	views: number;
	when: Date;
	content: string;
	summary: string;
	tag: string[];
};

type filterItem = {
	tag: string;
	content: string;
};

type User = {
	name: string;
	where: string;
	type: string;
	profile: string;
};

type ProfileInfo = {
	name: string;
	where: string;
	type: string;
	profile: string;
	summary?: string;
};

type PersonalInfo = {
	name: string;
	where: string;
	type: string;
	summary?: string;
	myWork?: Research[] | Investment[];
	profile: string;
	history?: Research[] | Investment[];
	bookmark?: Research[] | Investment[];
};
