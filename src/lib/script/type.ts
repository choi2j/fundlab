// 파일 타입
type UserFile = {
	name: string;
	size: number;
	type: string;
	lastModified: number;
};

// 공통 속성을 위한 베이스 타입
type BasePost = {
	id: number;
	worktype: string;
	title: string;
	content: string;
	summary: string;
	picture: string;
	file: UserFile;
	date: Date;
	view: number;
	tag: string[];
	user: UserCheck;
};

// Research 타입
type Research = BasePost;

// Investment 타입
type Investment = BasePost;

// UserCheck 타입
type UserCheck = {
	id: number;
	username: string;
	email: string;
	affiliation: string;
};

// User 타입
type User = {
	id: number;
	username: string;
	name: string;
	email: string;
	password: string;
	affiliation: string;
	birth: string;
	usertype: string;
	picture: string;
	work: Research[] | Investment[];
	bookmark: Research[] | Investment[];
	history: Research[] | Investment[];
	introduction: string;
};

type Message = {
	user: string;
	message: string;
	file?: UserFile;
	date: Date;
};
