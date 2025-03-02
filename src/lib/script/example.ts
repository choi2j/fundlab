import logo from '$lib/assets/img/logo.png';

const userCheck1: UserCheck = {
	id: 1111,
	username: 'john_doe',
	email: 'john@example.com',
	affiliation: 'Tech Corp'
};

const userCheck2: UserCheck = {
	id: 2111,
	username: 'jane_smith',
	email: 'jane@example.com',
	affiliation: 'Quantum Labs'
};

const userCheck3: UserCheck = {
	id: 3111,
	username: 'bob_jones',
	email: 'bob@example.com',
	affiliation: 'Eco Solutions',
};

// Research 예시 데이터 3개
const research1: Research = {
	id: 1221,
	worktype: 'research',
	title: 'AI Development Trends',
	content: 'Detailed analysis of AI trends in 2025...',
	summary: 'Overview of AI advancements',
	picture: logo,
	file: {
		name: 'ai_report.pdf',
		size: 2048,
		type: 'application/pdf',
		lastModified: Date.now()
	},
	date: new Date('2025-01-15'),
	view: 150,
	tag: ['AI', 'technology', 'research'],
	user: userCheck1
};

const research2: Research = {
	id: 2221,
	worktype: 'research',
	title: 'Quantum Computing Basics',
	content: 'Introduction to quantum computing principles...',
	summary: 'Basics of quantum computing',
	picture: logo,
	file: {
		name: 'quantum_intro.pdf',
		size: 1536,
		type: 'application/pdf',
		lastModified: Date.now()
	},
	date: new Date('2025-02-01'),
	view: 200,
	tag: ['quantum', 'physics', 'computing'],
	user: userCheck2
};

const research3: Research = {
	id: 3221,
	worktype: 'research',
	title: 'Climate Change Models',
	content: 'Modeling climate change effects...',
	summary: 'Climate prediction models',
	picture: logo,
	file: {
		name: 'climate_models.pdf',
		size: 3072,
		type: 'application/pdf',
		lastModified: Date.now()
	},
	date: new Date('2025-02-20'),
	view: 120,
	tag: ['climate', 'environment', 'science'],
	user: userCheck3
};

// Investment 예시 데이터 3개
const investment1: Investment = {
	id: 1331,
	worktype: 'investment',
	title: 'Tech Startup Funding',
	content: 'Investment opportunities in tech startups...',
	summary: 'Tech startup investment guide',
	picture: logo,
	file: {
		name: 'startup_report.pdf',
		size: 2560,
		type: 'application/pdf',
		lastModified: Date.now()
	},
	date: new Date('2025-01-10'),
	view: 180,
	tag: ['startup', 'technology', 'investment'],
	user: userCheck1
};

const investment2: Investment = {
	id: 2331,
	worktype: 'investment',
	title: 'Green Energy Portfolio',
	content: 'Building a sustainable energy investment portfolio...',
	summary: 'Green energy investment options',
	picture: logo,
	file: {
		name: 'energy_portfolio.pdf',
		size: 1792,
		type: 'application/pdf',
		lastModified: Date.now()
	},
	date: new Date('2025-02-05'),
	view: 220,
	tag: ['energy', 'sustainability', 'investment'],
	user: userCheck2
};

const investment3: Investment = {
	id: 3331,
	worktype: 'investment',
	title: 'Real Estate Trends',
	content: 'Analysis of real estate market trends...',
	summary: 'Real estate investment insights',
	picture: logo,
	file: {
		name: 'real_estate_analysis.pdf',
		size: 2304,
		type: 'application/pdf',
		lastModified: Date.now()
	},
	date: new Date('2025-02-15'),
	view: 160,
	tag: ['real_estate', 'market', 'investment'],
	user: userCheck3
};

let user: User = {
	id: 1234,
	username: 'john_doe',
	name: 'John Doe',
	email: 'john@example.com',
	password: 'hashedpass123',
	affiliation: 'Tech Corp',
	birth: '1990-05-15',
	usertype: 'researcher',
	picture: logo,
	work: [research1],
	bookmark: [research2],
	history: [research1, research3],
	introduction: 'AI researcher with 5 years of experience'
}

const user2: User = {
	id: 2234,
	username: 'jane_smith',
	name: 'Jane Smith',
	email: 'jane@example.com',
	password: 'hashedpass456',
	affiliation: 'Quantum Labs',
	birth: '1988-09-22',
	usertype: 'investor',
	picture: logo,
	work: [investment2],
	bookmark: [investment1],
	history: [research2, investment2],
	introduction: 'Investor focused on sustainable tech'
};

const user3: User = {
	id: 3234,
	username: 'bob_jones',
	name: 'Bob Jones',
	email: 'bob@example.com',
	password: 'hashedpass789',
	affiliation: 'Eco Solutions',
	birth: '1992-03-10',
	usertype: 'researcher',
	picture: logo,
	work: [research3, investment3],
	bookmark: [research1, investment2],
	history: [research3],
	introduction: 'Environmental scientist and investor'
};

export {
	user,
	user2,
	user3,
	userCheck1,
	userCheck2,
	userCheck3,
	research1,
	research2,
	research3,
	investment1,
	investment2,
	investment3
};
